import { SchemaDirectiveVisitor, ValidationError } from 'apollo-server';
import {
  GraphQLDirective,
  DirectiveLocation,
  GraphQLString,
  GraphQLNonNull,
  defaultFieldResolver
} from 'graphql';
import { IdentityBasedPolicy } from 'iam-policies';

export class hasPermissionDirective extends SchemaDirectiveVisitor {
  static getDirectiveDeclaration(directiveName, schema) {
    return new GraphQLDirective({
      name: 'hasPermission',
      locations: [DirectiveLocation.FIELD_DEFINITION],
      args: {
        action: {
          type: new GraphQLNonNull(GraphQLString)
        },
        resource: {
          type: new GraphQLNonNull(GraphQLString)
        },
        param: {
          type: GraphQLString
        }
      }
    });
  }
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    let { action, resource } = this.args;
    field.resolve = async function(...params) {
      const [obj, args, context, info] = params;
      const { account, accountUser, accountGroup } = context;

      const defaultResult = () => ({
        permissions: [
          {
            effect: 'allow',
            resources: ['*'],
            actions: ['*']
          }
        ]
      });
      const policies = await Promise.all([
        account ? account.$relatedQuery('organizationScp') : defaultResult,
        accountUser.$relatedQuery('identityPolicy')
      ]);

      const finalPermission = policies.every(policy => {
        if (policy)
          return new IdentityBasedPolicy(policy.permissions).evaluate({
            action,
            resource
          });
        else true;
      });

      if (!finalPermission)
        throw new ValidationError(`User is not allowed to ${field.name}`);

      const result = await resolve.apply(this, [
        obj,
        args,
        {
          ...context
        },
        info
      ]);
      return result;
    };
  }
}
