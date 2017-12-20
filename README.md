# BOILERPLATE for REACT-REDUX Web Apps
<!-- #### NPM - https://www.npmjs.com/package/react-boilerplater -->
<!-- #### Github - https://github.com/AliceWonderland/react-boilerplater -->
##### By Alice Chuang 2017 (Still a work in progress)


This boilerplate runs on Node, Express, React, Postgres. It is a node-based stack for creating web apps using React. Node and Express will be your app server. React and React-Redux will be your server-side scripting language for creating page templates. Postgres will be your database. We will use Sequelize to make queries to the Postgres database.

Follow the instructions below to get this boilerplate up and running. The instructions are for OSX.

#### Pre-Installation
Before forking this repo and cloning down to your computer, make sure Node and Postgres are installed.

- Download and install Node.js https://docs.npmjs.com/getting-started/installing-node
- Download and install Postgres DB http://postgresapp.com/
- Check to see if Node or NPM is installed by typing `node -v` or `npm -v` into your Terminal

#### Installation
- Fork this repo to your Github (Hit the Fork button at the top right of this repo. Choose where you'd like to fork it.)
- From your Terminal or Shell Prompt:
- Browse to folder where you will download this repo
- Clone down the repo, `git clone https://github.com/your-username/react-boilerplater.git` (this clones into a folder `react-boilerplater`)
- Browse to this folder
- Run `npm install` (This installs all the necessary packages required to run this app)
- Run `npm run start-dev` (Make sure Postgres is running. If not, stop the server by hitting ctrl+c. Start Postgres, you should see the icon in the top right menu bar next to the battery life icon, re-run start-dev)
- Open your web browser (Chrome), browse to http://localhost:3000/ to see the app running!

#### Notes
- To keep the server running as you build out your app use `npm run start-dev`. Nodemon will watch for changes to your files and rebuild as necessary.
- Build out your web app using this react skeleton!

#### Main Files
- `package.json` This file lists all the scripts and required packages to install
- `app.js` This file is equivalent to the index.html file in the web root of your site
- `/server/index.js` Server configuration file
- `/db/index.js` Database configuration file and tables
- `/client` This folder contains all the react templates for the pages in your web app


#### Includes:
- Node.js
- Express
- React
- React-Redux
- Sequelize
- Postgres
- Thunk
- Bootstrap

#### Supporting Packages:
- Node.js
- NPM
- Nodemon
- Webpack
- Babel

#### Not Yet Included:
- Web Sockets - Socket.io
- Linter
- Bluebird
- OAuth
- Mocha
- Chai
- Jasmine


#### To Create Your Own Boilerplate:
- Create a project folder
- Run `npm init`, `git init` from your console to initialize node, npm, git
- (make sure both npm and git are installed, https://www.npmjs.com/get-npm) ***
- Create the '.gitignore' file, include 'node_modules', 'bundle.js', package-lock.json etc... (files listed in here will exclude from git when committing to github repo)
- Run 'npm install -g nodemon' to install Nodemon globally (listens for file changes and re-compiles Webpack)
- Install Postgres
- From there, install any packages desired using `npm install --save-dev my-pkg-name` or `npm install --save my-pkg-name`. Use --save-dev to install dev dependencies, --save for production dependencies.


#### Some Helpful Links:
- Facebook's Create-React-App https://github.com/facebookincubator/create-react-app
