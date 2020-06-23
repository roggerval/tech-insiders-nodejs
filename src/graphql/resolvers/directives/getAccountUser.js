import { SchemaDirectiveVisitor, ValidationError } from 'apollo-server';
import {
  GraphQLDirective,
  DirectiveLocation,
  defaultFieldResolver
} from 'graphql';

export class getAccountUserDirective extends SchemaDirectiveVisitor {
  static getDirectiveDeclaration(directiveName, schema) {
    return new GraphQLDirective({
      name: 'getAccountUser',
      locations: [DirectiveLocation.FIELD_DEFINITION],
      args: {}
    });
  }
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...params) {
      const [obj, args, context, info] = params;
      const { user } = context;
      const accountUser = await user.$relatedQuery('accountUser');

      if (!accountUser) {
        throw new ValidationError('AccountUser not found');
      }

      console.log('accountUserId ', accountUser.id);
      const result = await resolve.apply(this, [
        obj,
        args,
        { ...context, accountUser },
        info
      ]);
      return result;
    };
  }
}
