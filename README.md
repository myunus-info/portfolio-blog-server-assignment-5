# Assignment-5

This is my fifth assignment in the Programming Hero Next Level Web Development course platform. I am very excited to share and describe my project with you.

This is a blogging and portfolio platform management application that consists of three collections: One is the blog collection, another project collection and the other message collection. The first and the second one involve creating, fetching, updating and deleting operations of blogs and projects. The third one handles sending and viewing user messages.

Here is the description of how I have set up my project environment, the technologies I have used, how to run and inspect the project.

## PROJECT SETUP

## Local Environment Setup

- [Git](https://git-scm.com/)
- [Node.js v22.3.0](https://nodejs.org/en/)
- [NPM 10.8.1](https://www.npmjs.com/)
- [MongoDB Driver](https://www.mongodb.com/)
- [Mongoose v8.8.2](https://mongoosejs.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Environment Variables for Local Development

> Create a .env file and adjust the following environment variables.

```bash
# Please add these variables in your .env file
NODE_ENV=development
PORT=<application_port>
DATABASE_URL=<database_url>
```

> Create a database in MongoDB named portfolio-blog

## NPM SCRIPTS

```bash
$ npm install           # install dependencies
$ npm start             # development build
$ npm run start:prod    # production build
$ npm run start:dev     # start in development mode
$ npm run build         # compile typescript code into javascript
$ npm run lint          # check whether there is any potential error
$ npm run lint:fix      # fix whether there is any potential error
$ npm run prettier      # beautify the unorganized code
$ npm run prettier:fix  # prettier-fix your code
```
