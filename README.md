# 🚀 Veronique 🇫🇷

### **An "almost in space" VueJS Typescript Development Boilerplate**
![Veronique rocket](https://upload.wikimedia.org/wikipedia/commons/e/e5/Fus%C3%A9e_VERONIQUE_%288727147868%29.jpg)


## Features
- **Ready to run** : the dockerized environment allows you to use Veronique the same way in every machine
- **Start coding now** : Webpack is already set to compile typescript, transpile ES6+, and bundle scripts and scss styles.
- **Work efficiently** : Local server with HMR embedded and Vue.js out of the box.

## Install
- **you'll need [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed on your system.** That's all.
- clone the repo
- ```cd``` to your repo then ```cp .env.example .env```
- update the .env variables depending on your needs
- run ```docker-compose up```

## Dev mode vs. Prod mode
- Development mode will launch the server, enable HMR, launch webpack in watch mode.
- Production mode compiles your code only once, into minified files and serves it through the server.


## Disclaimer
**Use ONLY for development purposes**<br>
Veronique is not designed to provide a production server.

## Credits
If you are looking for a professional Typescript development boilerplate, you could consider using [openizr/project-boilerplate](https://github.com/openizr/project-boilerplate) with [openizr/typescript-dev-kit](https://github.com/openizr/typescript-dev-kit). Many thanks to those two projects and its contributors. Veronique is a simplified version of it.