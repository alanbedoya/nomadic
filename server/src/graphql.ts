import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} from 'graphql';

const Listing = new GraphQLObjectType({
  name: 'Listing',
  fields: {
    id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    numOfGuests: { type: GraphQLNonNull(GraphQLInt) },
    numOfBeds: { type: GraphQLNonNull(GraphQLInt) },
    numOfBaths: { type: GraphQLNonNull(GraphQLInt) },
    rating: { type: GraphQLNonNull(GraphQLInt) },
  },
});

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLList(Listing),
      resolve: () => 'Hello from the Query!',
    },
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello from the Mutation!',
    },
  },
});

export const schema = new GraphQLSchema({ query: query, mutation: mutation });
