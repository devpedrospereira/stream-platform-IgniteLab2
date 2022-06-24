import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4quv20308d901z683v19wwk/master',
    cache: new InMemoryCache()
});