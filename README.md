# Articles Webapp

Frontend of a simple application for exploring multi-tenancy concepts. Works within a single tenant
environment, identified by browsed domain.

## Table of Contents

* [Building Docker image](#building-docker-image)
* [Running on local machine](#running-on-local-machine)
* [Project repositories](#project-repositories)

## Building Docker image

Building Docker image requires to first build distribution files on local machine,
before `docker build` call.

```bash
$ npm run build
$ docker build -t articles-webapp .
```

## Running on local machine

Running locally requires to `articles-backend` application (along with its own dependencies) to be
up and running. Angular development server launches a reverse-proxy for `/api` paths. Follow
[backend instructions][articles-backend-running] to launch it.

To run Angular development server use `start` npm task.

```shell
$ npm start
```

The application will be available on [`http://localhost:4200`](http://localhost:4200).

**Note**, that as a Docker service, the application works as a [nginx][nginx] server, available on
port `:80`.

## Project repositories

* [`articles-app`][articles-app], which holds Docker environment setup.
* [`articles-backend`][articles-backend], which holds backend application.
* [`articles-webapp`][articles-webapp], which holds frontend application.

[articles-backend]: https://github.com/malczuuu/articles-backend

[articles-backend-running]: https://github.com/malczuuu/articles-backend#running-on-local-machine

[articles-webapp]: https://github.com/malczuuu/articles-webapp

[articles-app]: https://github.com/malczuuu/articles-app

[nginx]: https://hub.docker.com/_/nginx
