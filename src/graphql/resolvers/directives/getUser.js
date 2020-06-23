import {
  SchemaDirectiveVisitor,
  AuthenticationError,
  ValidationError
} from 'apollo-server';
import {
  GraphQLDirective,
  DirectiveLocation,
  defaultFieldResolver
} from 'graphql';
import { User } from '../../../services/objection/models/User/User';

export class getUserDirective extends SchemaDirectiveVisitor {
  static getDirectiveDeclaration(directiveName, schema) {
    return new GraphQLDirective({
      name: 'getUser',
      locations: [DirectiveLocation.FIELD_DEFINITION],
      args: {}
    });
  }
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...params) {
      const [obj, args, context, info] = params;

      if (!context.authorization) {
        throw new AuthenticationError('User is not authenticated');
      }
      const user = await User.query().findById(context.authorization);

      if (!user) {
        throw new ValidationError('User not found');
      }

      console.log('userId ', user.id);
      const result = await resolve.apply(this, [
        obj,
        args,
        { ...context, user },
        info
      ]);
      return result;
    };
  }
}
