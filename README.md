# Dynamic Table

This project has the implementation for a utility table which has the ability to show and render data dynamically with dynamic columns with the best practices and optimizations intact.

It also has common features like sorting and searching on each dynamic column and features like row grouping are also implemented.

You can preview this project live at this [link]().

It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

#### Pre-Requisites

Node environemnt required to start the dev server and Angular need to be installed globally to be able to run `ng serve` command. `npm start` command could also be used to do the same.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Deployment

For static deployment use the artifacts generated after successfully running the build process. Copy all contents from the `dist/<project-name>` and place it in the server root directory from where the application needs to be served.

#### NOTE

As this is a SPA (Single Page Application) if rounting is used further configurations required to be done on server t avoid **404** errors.
Configure the server to send all requests to the index file
