# Angular Electron Vader

A super simple app built on [Angular](https://angular.io/) & [Electron](https://electron.atom.io/) and best used in dire situations.

![Darth Vader](http://i.imgur.com/Xtc42gu.png)

## Getting Started

1. Clone it `git clone https://github.com/stevengregory/angular-electron-vader.git`

1. Get in `cd angular-electron-vader`

1. Run `npm i`

## Configuration

The `.env` file `PACKAGE` variable sets where Electron will run. If `PACKAGE` is set to false, it will run from the dev server. Otherwise, Electron will run from the `dist/` directory, which needs to be generated in the build step. Additionally, the `BASEURL` will need to be updated for your project.

## Build

Run `npm run build` to build the project and set the `BASEURL`. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Development Server

Run `npm start` to kick off the dev server. The app will automatically reload if you change any of the source files.

## Running Electron

Run `electron .` to start Electron. If running from the dev server, this command will need to be run in a separate terminal.

## Create Package

Run `npm run package:mac` to run the build and package the application. The desktop installer will be created in the `package/` directory.