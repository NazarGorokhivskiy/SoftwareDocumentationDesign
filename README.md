# Node.js application following the Multi-layered Architecture Pattern

### Was made for university subject "Software Documentation Design"
Inspired by [Bulletproof node.js project architecture](https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf).

---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.<br/>
Your **Node.js version** should be at least **13** and **npm version 6.13**.

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v13.3.0

    $ npm --version
    6.13.1
    
---

## Install

    $ https://github.com/NazarGorokhivskiy/SoftwareDocumentationDesign.git
    $ cd SoftwareDocumentationDesign
    $ npm i
    $ npm i -g dotenv

## Configure Environment variables file

Create `.env` file in the root of your project. You have to specify the following env variables:

```
# Database config (MSSQL)
DB_NAME=
DB_HOST=
DB_USERNAME=
DB_PASSWORD=

# Azure Redis
REDIS_HOST=
REDIS_PORT=
REDIS_PASS=

# Azure Event Hubs
EVENT_HUBS_URL=

# POSSIBLE VALUES: CONSOLE | EVENT_HUBS
PRINT_STRATEGY="CONSOLE"
```

## Running the project for development

Berfore running the project in development, at first you need to install **nodemon** util by runnung the following  command
``` 
$ npm i -g nodemon
```    
After that you should be able to freely run the project:
```
$ npm run dev
```
## Running the project for production
```
$ npm start
```
