# MisClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0-next.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Directories

### core

Here the pipes, guards, directives, models setc are stored, each one it's own module

### presentation

The presentation logic goes here. It has module where each module is a different dashboard for a different user role.

- `modules` - each dashboard based on user role is a module
- `components` - components that are shared in the modules
- `atomic` - components that are for smallest units, example button, select, input, etc

### persistence
Here the state management goes, and the api interactions.
