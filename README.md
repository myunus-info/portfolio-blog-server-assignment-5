# Assignment-3

This is my third assignment in the Programming Hero Next Level Web Development course platform. I am very excited to share and describe my project with you.

This is a blogging platform management application that consists of two collections: One is the blog collection, another user collection. The first one involves creating, fetching, updating and deleting operations. The second one handles user registration and login management as well as manages the authentication workflow.

Here is the description of how I have set up my project environment, the technologies I have used, how to run and inspect the project and last but not the least - Postman API Documentation:

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
BCRYPT_SALT_ROUNDS=<salt_rounds>
JWT_ACCESS_SECRET=<access_secret>
JWT_ACCESS_EXPIRES_IN=<expiry_time>
```

> Create a database in MongoDB named blogging-platform

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

### VIDEO INTRO: [(Click Here)](https://drive.google.com/file/d/1yKYsxAImBhABVms2XjpswdwOEYCas__K/view?usp=sharing)

### API Documentation: [POSTMAN API DOCUMENTATION (Click Here)](https://www.postman.com/winter-capsule-905954/public-work-space/documentation/npqprg8/blogging-platform)
