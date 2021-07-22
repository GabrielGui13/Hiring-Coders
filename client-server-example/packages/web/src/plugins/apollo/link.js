import { ApolloLink, Observable } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

//browsers antigos => unfetch
//servers => node fetch (padrao)

const loggerLink = new ApolloLink((operation, forward) => new Observable(observer => {
    const subscription = forward(operation).subscribe({
        next: result => { //da o resultado na api
            console.log('Log', result)
            observer.next(result);
        },
        complete: observer.complete.bind(observer), //executa para o estado de complete
        error: observer.error.bind(observer), //executa para um error
    });

    return () => subscription.unsubscribe(); //para o Observable
}));

const link = ApolloLink.from([
    loggerLink,
    onError((error) => { //recebe o erro do graphql
        console.log('graphql error' ,error) //teria o tratamento dos erros
    }),
    setContext((_, { headers }) => { //exemplo de uso de jwt, teria que montar uum cabecalho parar cada requisicao

        // ... validacoes
        //sempre executado, papel de middleware
        
        return {
            headers: {...headers},
            /* Authorization: `Bearer ${token}` */
        }
    }),
    createHttpLink({ //sempre o ultimo
        uri: 'http://127.0.0.1:8000/graphql'
    })
]);

export default link;