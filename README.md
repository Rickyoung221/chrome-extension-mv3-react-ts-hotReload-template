# Chrome Extension

This project was bootstrapped with Create-React-App with Typescript added, a template which is developed based Manifest V3.

## 1. What's included
The template has been included:
- Main Technologies and their version:
  - Manifest V3;
  - React 18.0.0;
  - Typescript 4.6.3: 
  - Create-React-App (CRA) 5.0.1.
  - Craco 6.4.3;
  - Webpack V5;
  - react-router-dom v6;
  
- `chrome` proper types installed.
- The build settings from CRA are updated in order to generate multiple files (content, background ..).
  - Implemented **Craco** to override create-react-app configuration. In this way, the project does not need to be ejected if the developer wanna modify the webpack.

- Build Popup, ContentScript, BackgroundScript as isolated directories with corresponding config setting in webpack.
- Fix the Polyfill node core module error as the [current version of webpack](https://github.com/webpack/webpack) no longer includes NodeJS polyfills by default.

> ### Automatic Node.js Polyfills Removed
>
> In the early days, webpack's aim was to allow running most Node.js modules in the browser, but the module landscape changed and many module uses are now written mainly for frontend purposes. Webpack <= 4 ships with polyfills for many of the Node.js core modules, which are automatically applied once a module uses any of the core modules (i.e. the `crypto` module).
>
> While this makes using modules written for Node.js easier, it adds these huge polyfills to the bundle. In many cases these polyfills are unnecessary.
>
> Webpack 5 stops automatically polyfilling these core modules and focus on frontend-compatible modules. Our goal is to improve compatibility with the web platform, where Node.js core modules are not available.
>
> Ref: https://webpack.js.org/blog/2020-10-10-webpack-5-release/#automatic-nodejs-polyfills-removed

​	Since it is just a template project, it would not enable this feature for the developers. 

- Hot Reload, improve the development efficiency. 
- Merely use custom components for demo. (So the developers are welcome to add any UI Framework they want, no need to remove any dependencies.)
- Popup:
  - page with basic layout (header, body, footer).
  - Router setting
- Content Script inject web page successfully. 



## 2. Installation
In the project directory, run:

```shell
yarn install

# Run in dev mode
yarn start

# Run in production mode
yarn build 
```
After the build command, visit `chrome://extensions/` on Chrome browser:

![Upload /build](https://tva1.sinaimg.cn/large/e6c9d24egy1h19oxmphn0j20fq05kweo.jpg)

Enable the Developer mode toggle.

Then click **Load unpacked** and select the `/build` folder which was produced from this repo. 

The application is now loaded. If click the new button that appear on the extensions toolbar, the popup page of the project would be shown. 

## 3. Folder Structure of this template

As below, the template has removed the uncessary files from the original Create-React-App(CRA) structure. If interested, visit https://create-react-app.dev/docs/adding-typescript/ to learn how to build a start a new Create React App project with [TypeScript](https://www.typescriptlang.org/).

The original `App.tsx`  has been moved and set as popup page.

```shell
chrome-extension-mv3-react-ts-hotReload-template/
├── node_modules/ # The folder would be generated after installed. 
├── README.md
├── config/		# Config files folder for Craco
│   └── craco.config.dev.js  # Where you override the webpack config, development mode
│   └── craco.config.prod.js  # Where you override the webpack config, production mode
├── package.json
├── public/ 
│   ├── index.html # The page template.
│   ├── logo192.png   # Should be replaced for your convenience, the project icon.
│   └── manifest.json # The blueprint of extension that tell the browser how to load the project.
├── src/ # Only files inside src are processed by webpack.
│   ├── index.css
│   ├── index.tsx  # The entry point, render the popup page. 
│   ├── background_script/ # Files run in the service workers
│   │   └── index.tsx
│   ├── content_script/  # Files that run in the context of web pages and access to the DOM elements
│   │   └── index.tsx # Entry of content script
│   │   └── types.tsx # Define msg object types
│   ├── popup/ 
│   │   ├── index.tsx
│   │   └── style.css
├── tsconfig.json 	# specify the root level files and the compiler options that requires to compile a TypeScript project.
└── yarn.lock
```

Export the directory tree through the command:

```bash
tree -L 4 -I "node_modules" > READMEnew.md
```

## 4. Guide

- How React app interact with the content scripts? - [**Message Passing**](https://developer.chrome.com/extensions/messaging)

  ![Diagram Of Messaging Passing API](https://blog.logrocket.com/wp-content/uploads/2021/08/extension-messaging-passing-api.png)

  Ref of this image: https://blog.logrocket.com/creating-chrome-extension-react-typescript/

- Steps to enable content script app:

  - Edit the `craco.config.js` file to override. Add a new entry and match the entry point file. 
  - Edit the `manifest.json` to declare to add section about content_scripts，match the output files defined in the config. 
  
  


## 5. Remarks
If find any issue, or any ideas to improve the features of the project, welcome to submit an issue report!