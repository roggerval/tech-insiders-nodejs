import { SchemaDirectiveVisitor, ValidationError } from 'apollo-server';
import {
  GraphQLDirective,
  DirectiveLocation,
  defaultFieldResolver
} from 'graphql';

export class getAccountDirective extends SchemaDirectiveVisitor {
  static getDirectiveDeclaration(directiveName, schema) {
    return new GraphQLDirective({
      name: 'getAccount',
      locations: [DirectiveLocation.FIELD_DEFINITION],
      args: {}
    });
  }
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...params) {
      const [obj, args, context, info] = params;
      const { accountUser } = context;
      const account = await accountUser.$relatedQuery('account');

      if (!account) {
        throw new ValidationError('Account not found');
      }

      console.log('accountId ', account.id);
      const result = await resolve.apply(this, [
        obj,
        args,
        { ...context, account },
        info
      ]);
      return result;
    };
  }
}
