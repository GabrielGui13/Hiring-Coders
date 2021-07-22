# Passo a passo para uso de GraphQL e Apollo-Express

## **Conexão Frontend/Backend**
### **Dependências**
```console
npm install apollo-link apollo-link-context apollo-link-error apollo-link-http apollo-client apollo-cache-inmemory graphql graphql-tag react-apollo
```
- Dependências para criar a conexão ao GraphQL pelo Apollo Server
- 'apollo-link' para a classe ApolloLink e Observable
- 'apollo-link-http' para a createHttpLink
- 'apollo-link-context' para setContext
- 'apollo-link-error' para onError
- 'apollo-client' para ApolloClient
- 'apollo-cache-inmemory' para InMemoryCache
- 'graphql' para uso geral
- 'graphql-tag' para gql
- 'react-apollo' para useQuery, useMutation e ApolloProvider



### **Passo a passo**
#### Definição do client
- Em uma pasta plugins/apollo/** o link.js deverá ser criado
- Nesse arquivo deverá ser definida a conexão com o servidor backend
- o loggerLink (opcional) vai instanciar a classe ApolloLink passando uma função que recebe um 'operation' (operação do graphql) e um 'forward' (próxima operação do graphql)
- Dentro dessa função vai instanciar um Observable e passa um observer de parâmetro
- Dentro dessa nova função, outra função subscription será chamada passando o forward(operation).subscribe({}), que terá um objeto com complete, error, e next, para passar o resultado da requisição a frente
- A instância do observable terá como return o subscription.unsubscribe(), para parar de "observar"
- Após a criação de um link customizável, o link em si será criado, link com o backend
- A classe ApolloLink será chamada com o método .from( ), que receberá uma array de "middlewares"
- O primeiro item da lista será o nosso link customizável criado
- Depois será passado o onError, que irá lançar um erro
- o setContext servirá para definir os headers da requisição, seria potenciamente usado com JWT por exemplo, e retornar os headers: {...headers}
- Por último temos o createHttpLink, que terá um uri, que irá receber a url do nosso servidor backend com a rota /graphql, que irá direto no servidor e pode ser usado o playground
- o createHttpLink deve sempre ser o último item da lista
- Após a definição do link, deverá ser criado o client.js, que servirá como parâmetro de acesso ao backend
- Dentro do arquivo, InMemoryCache deverá ser instanciado para passar como middleware o uso do cache nas requisições, visando não ir ao servidor todas as vezes
- Uma constante client deverá ser criada, que terá a instância de ApolloClient passando um objeto de parâmetro
- O objeto receberá o link, o cache, e ativará o connectToDevTools: true para habilitar o Apollo Dev Tools no browser

#### Utilização no Frontend
- No index.js, o ApolloProvider deverá ser chamado, e deverá envolver o App envolvido pelo BrowserRouter
- o ApolloProvider receberá como props o client criado que acessa o servidor do backend
- Em um arquivo em components, uma const com gql`` deverá ser criada, e será responsável por criar a Query com a sintaxe de acesso do graphql
- Após definir o acesso que será feito na Query, o hook useQuery deverá ser utilizado com destruturing de objeto, recebendo data(response), error(error), loading(true enquanto carrega os dados), e se quiser o fetchMore para refazer a query
- O useQuery receberá por parâmetro a query declarada acima, e logo após um objeto que contém um 'fetchPolicy', que irá declarar a forma de requisição (Ex: 'cache-and-network' irá acessar os dados em cache e no server ao mesmo tempo, o que retornar primeiro predomina)
- Após o fetchPolicy, será passado um variables: que terá como valor um objeto passando a chave e o valor das variáveis
- Após reunir os dados da query, deverão ser feitas as devidas verificações, funções e interações com os dados
- Outra const com gql`` também pode ser criada para tratar as mutations, a sintaxe de chamada em graphql será a mesma, exceto ao trocar o nome query por mutation
- Após definir a chamada, o hook useMutation deverá ser chamado com destructuring de array recebendo uma função para executar a mutation, tem um tratamento diferente da query
- o useMutation recebe como parâmetro a const da mutation criada
- Quando a função do useMutation for chamada, ela receberá apenas um objeto com as variáveis 

```js

```

#### xxx

```js

```