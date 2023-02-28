# Desafio Mercado Pago de Front-end

![Index](https://user-images.githubusercontent.com/5558195/221766054-96d16592-f132-4174-ba90-8e37d940781a.png)

## Sobre o projeto
Este projeto é uma aplicação completa Front-end, que consiste em integrar com Mercado Pago e criar pagamentos com cartão de crédito e Boleto Bancário.


## 💻 Tecnologias/ferramentas:

- [React](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [React Router](https://reactrouter.com/en/main)
- [Axios](https://axios-http.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)


## :electric_plug: Pré-Requisitos:

- [Node.js](https://nodejs.org/en/) >= v16.10.0
- [Visual Studio Code](https://code.visualstudio.com/)
- [Yarn](https://yarnpkg.com/) ou [NPM](https://nodejs.org/en/)
- Ter conta no [Mercado Pago](https://www.mercadopago.com.br/) para [gerar as credenciais](https://www.mercadopago.com.br/settings/account/credentials) Public key e Access Token de teste para as integrações.
- Para realizar as transações [Cartão de crédito e Boleto Bancário] o back-end precisa está configurado e rodando. Para clonar o projeto e configurar o back-end [clique aqui](https://github.com/renanjefferson/backend_mercado_pago_challenge).

> Crie uma pasta como o nome que desejar e acesse esse diretório que criou.


**Clone o repositório front-end**
```
git clone https://github.com/renanjefferson/frontend_mercado_pago_challenge.git
```
<br/>

- Entre no diretório frontend_mercado_pago_challenge e abra o projeto no VSCode
- Digite: yarn install ou npm install (dependendo do gerenciador acima escolhido)
- Crie e configure o arquivo '.env' na raíz do projeto com a Public Key e Access Token da forma como está no arquivo '.env.example'
 ```
 VITE_MP_TEST_PUBLIC_KEY=<SUA_CHAVE_PUBLICA>
 ```
 ```
 VITE_MP_TEST_ACCESS_TOKEN=<SEU_TOKEN_DE_ACESSO>
 ```
 
 
**Rodar a aplicação**
```
yarn dev
```
ou
```
npm run dev
```


**Local**
```
http://127.0.0.1:5173/
```

