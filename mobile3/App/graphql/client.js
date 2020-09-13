import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    uri: 'http://192.168.0.105:4000',
    request: operation => {
        operation.setContext({
            headers: {
                Authorization: 'Bearer 123',
            },
        });
    },
});
