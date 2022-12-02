# PWA: Just Another Text Editor

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Preview](#preview)
- [Contact](#contact)
- [License](#license)

## Description

A single-page progressive web application that allows developers to write notes or code snippets whenever they desire, even without an internet connection. 

## Installation
Check out the deployed site [here!](https://ryan-jate-pwa.herokuapp.com/)

To install the app locally, click the "Install!" button found at the top left of the page. The [preview](#preview) below demonstrates this functionality.

To install the app locally via cloning the GitHub repo:

- Ensure that Node.js is installed on your local machine
- Clone the GitHub repo to your local machine
- Use your local machine's command-line to navigate to the cloned repo's directory
- Run "npm install"
- Run "npm start"
- Enter http://localhost:3000 in your browser of choice

## Technologies Used

- JavaScript
- Node
- NPM
- Express
- Webpack
- IndexedDB
- GitBash
- GitHub

## Usage

This seemingly simple website serves as a developer's own text editor for writing notes and code snippets, but in truth, perhaps the most notable aspect of this project is its status as a full-stack, progressive web application. Utilizing webpack plugins, and saving caches via IndexedDB, this intuitive text editor loads and saves any text placed into it in a flash. In addition, the application can even be installed locally on the machine, and the text saved within the application will persist without an internet connection. The registered service working functioning on the back-end of this application allows this data to be stored as assets within the app's own cache, which the developer may clear whenever they choose.

## Preview

The following image shows the application's basic functionality, including data persistence upon reload:

![Demonstration of the app's data persistence online.](./previews/online.gif)

The following image demonstrates installing the application, with data persistence still intact:

![Demonstration of the app's data persistence installed locally.](./previews/install.gif)

## Contact

[GitHub](https://github.com/Darxmarx)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/Darxmarx) 
<br/>
[LinkedIn](https://www.linkedin.com/in/ryan-feola-052892196//)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/ryan-feola-052892196//)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)