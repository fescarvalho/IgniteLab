import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4on7jjd0lws01xl6cv7grkq/master',
  cache: new InMemoryCache(),
});
