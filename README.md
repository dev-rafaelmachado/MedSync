# MedSync

![GitHub repo size](https://img.shields.io/github/repo-size/dev-rafaelmachado/MedSync?style=for-the-badge)

## 🚀 Sobre o projeto

Este projeto é um sistema web para fazer marcação de consultas, incluindo uma função que permite aos médicos solicitar a desmarcação de consultas pelo administrador.
    
[![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Fastify](https://img.shields.io/badge/Fastify-20232A?style=for-the-badge&logo=fastify&logoColor=white)](https://www.fastify.io/)
[![Prisma](https://img.shields.io/badge/Prisma-20232A?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://pt-br.reactjs.org/)
[![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![VSCODE](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![ESLINT](https://img.shields.io/badge/ESLINT-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)

## Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Instalação

```bash
$ git clone https://github.com/dev-rafaelmachado/MedSync
$ cd medsync
```

## Executando - Backend
    
```bash
$ cd back
$ yarn
$ yarn prisma migrate dev
$ yarn prisma generate
$ yarn dev
```

## Executando - Frontend
    
```bash
$ cd front
$ yarn
$ yarn dev
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

### Backend
`DATABASE_URL`

### Frontend
`NEXT_PUBLIC_BASE_URL`

## Considerações

- O projeto foi desenvolvido em 2 dias (somente na madrugada), portanto, não está completo.
- O projeto não possui testes automatizados.
- O projeto não possui uma documentação.
- O projeto não possui uma interface responsiva.

O projeto foi desenvolvido com o intuito de explorar e aprimorar minhas habilidades em React, Next.js e Typescript, motivado pelo teste técnico da Volvo que meu amigo realizou [@marcelowf](https://github.com/marcelowf). Busquei entender se conseguiria realizar um projeto similar ou comparável, contribuindo assim para o desenvolvimento e aplicação prática dos conhecimentos adquiridos na minha área de estudo, ciência da computação.

## Autores

- [@dev-rafaelmachado](https://github.com/dev-rafaelmachado)









