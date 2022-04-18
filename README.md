# Chrome Extension

This project was bootstrapped with Create-React-App, a template which is developed based Manifest V3.

The package manager for the template is Yarn. If you have npn installed but didn't install Yarn yet, run: 
```
npm install --global yarn
```
For more details to install yarn, visit [Ref](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).

## 1. What's included
The template has been included:
- React and Typescript. (CRA 5.0.0)
- Implement Craco to override create-react-app configuration. In this way, the project does not need to be ejected if the developer wanna modify the webpack.
- Build Popup, ContentScript, BackgroundScript as isolated directories with corresponding config setting. 
- Hot Reload, improve the development efficiency. 
- Popup page with basic layout (header, body, footer).


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

```bash
chrome-extension-mv3-react-ts-hotReload-template
├── README.md
├── config		# Config files folder for Craco
│   └── craco.config.js  # Where you override the webpack config for CRA
├── package.json
├── public
│   ├── index.html
│   ├── logo192.png   # Should be replaced for your convenience, the project icon.
│   └── manifest.json
├── src
│   ├── background_script
│   │   └── index.tsx
│   ├── chromeServices
│   │   └── DOMEvaluator.tsx
│   ├── content_script
│   │   └── index.tsx
│   ├── index.css
│   ├── index.tsx  # The entry of the whole project
│   ├── popup		
│   │   ├── index.tsx
│   │   └── style.css
│   └── types
│       ├── DOMMessages.ts
│       └── index.tsx
├── tsconfig.json 	# specify the root level files and the compiler options that requires to compile a TypeScript project.
└── yarn.lock
```

Export the directory tree through the command:

```bash
tree -L 4 -I "node_modules" > READMEnew.md
```

## 4. Guide




## 5. Remarks
If find any issue, or any ideas to improve the features of the project, welcome to submit an issue report!