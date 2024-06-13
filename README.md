# Star Wars Characters

![Star Wars Characters](https://picsum.photos/800/200) <!-- Adicione uma imagem relevante aqui -->

## Descrição

O projeto **Star Wars Characters** é uma aplicação web desenvolvida com Next.js que consome a API do Star Wars para listar personagens. A aplicação permite carregar mais personagens dinamicamente e filtrar personagens por seu planeta natal.

## Get in Touch

https://star-wars-characters-gold.vercel.app/

## Funcionalidades

- **Listagem de Personagens**: Exibe uma lista de personagens do universo Star Wars com informações detalhadas como nome, altura, massa, gênero e planeta natal.
- **Carregar Mais Personagens**: Botão para carregar mais personagens dinamicamente.
- **Filtro por Planeta Natal**: Filtro para visualizar personagens de um planeta específico ou todos os planetas.
- **Imagens dos Personagens**: Exibe imagens dos personagens usando a API do Picsum.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Axios**: Cliente HTTP baseado em Promises para fazer requisições à API.
- **Jest**: Framework de testes em JavaScript.
- **Testing Library**: Conjunto de utilitários para testar componentes React.

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente:

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/star-wars-characters.git
cd star-wars-characters
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o servidor de desenvolvimento**

```bash
npm run dev
```

4. **Abra seu navegador**

#### **Acesse http://localhost:3000 para ver a aplicação em execução.**

## Estrutura do Projeto

```perl
.
├── app
│   ├── _components
│   │   ├── CharactersList.tsx
│   │   ├── Filter.tsx
│   │   └── __tests__
│   │       ├── CharactersList.test.tsx
│   │       ├── Filter.test.tsx
│   ├── _helpers
│   │   └── getWorldName.ts
│   ├── _types
│   │   └── types.ts
│   └── page.tsx
├── public
│   └── ...
├── jest.config.js
├── jest.setup.js
├── package.json
├── README.md
└── tsconfig.json

```

## Contribuição

Se você quiser contribuir com este projeto, por favor siga os passos abaixo:

1. Fork o repositório
2. Crie uma branch para sua feature (git checkout -b feature/nova-feature)
3. Commit suas mudanças (git commit -m 'Adiciona nova feature')
4. Faça o push para a branch (git push origin feature/nova-feature)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Autor
GuilhermeCardoso - @lguilhermecardoso
