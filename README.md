# picsum.photos carousel
Uses picsum.photos API to randomly select 10 pictures and display them into a carousel.

## Install

### With docker
**you need [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) to be installed on your system.**
- clone the repo
- ```cd``` to your cloned repo directory
- then ```cp .env.example .env```
- update the .env variables depending on your needs
- run ```docker-compose up```
- browse `http://localhost`

### Without docker
**your need NodeJS and Yarn.**
- clone the repo
- run `yarn`
- run `yarn run dev`
- browse `http://localhost`

## Dev mode vs. Prod mode
- Development mode will launch the server, enable HMR, launch webpack in watch mode.
- Production mode compiles your code only once, into minified files and serves it through the server.