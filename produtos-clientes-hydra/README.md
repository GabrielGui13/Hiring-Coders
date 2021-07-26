# Sistema de cadastro da Hydra

## Descrição 

O sistema de cadastro da Hydra é uma aplicação que gerencia em tempo real os dados cadastrados de produtos e clientes de uma empresa fictícia. O site já está 100% responsivo, optei por colocar os elementos em coluna para facilitar a visualização tanto em desktop quanto em mobile, mesmo assim a visualização em celular fica melhor na horizontal, devido ao grande fluxo de informações das tabelas.

## User Interface

A interface do sistema é bem simples, logo de início, o BrowserRouter do react-router-dom coloca um component vazio pedindo para o usuário selecionar qual interface de cadastro ele prefere, dois botões na parte superior administram qual página o usuário irá entrar, a de cadastro e mostra de produtos, ou a dos clientes, ao clicar na logomarca acima, a página inicial de seleção é carregada novamente. Cada tabela, seja de produto ou cliente, contém um arquivo pré-cadastrado de referência.

## Funcionalidades

O site foi feito em ReactJs com styled-components, e está centrado na interação entre o Yup para fazer o schema do corpo do formulário e os dados recebidos. As informações passadas pelo cliente dentro do formulário são agrupadas em um objeto gerenciado pela biblioteca React Hook Form, que facilita a manipulação dos dados no momento do envio, todas as informações são inseridas dentro de um array que é enviado como JSON para o localStorage, a tabela abaixo recupera esses dados e imprime na tela. A aplicação também conta com uma lib chamada cep-promise, que ao enviar um CEP como requisição, ele retorna um JSON com a localização referente ao CEP. Quando o CEP é digitado no formulário e o usuário desseleciona a caixa de texto, uma função é disparada para retornar a localização do CEP e preencher automaticamente os outros campos. 

### [Link do Sistema de Cadastro Hydra](https://hydra-sistema-cadastro.netlify.app/)