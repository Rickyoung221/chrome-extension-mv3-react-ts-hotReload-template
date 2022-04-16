# Chrome Extension

This project was bootstrapped with [Create React App], it is based on the Chrome Extension Manifest V3.



## 1. What's included

- React with Typescript
- Hot Reload
- Popup with basic layout (header, body, footer)
- `content_scripts` config (interact directly with current page's Document)
- Ts-loader, webpack config



## 2. The main dependencies


```
  "dependencies": {
    "@craco/craco": "^6.4.3",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "@types/chrome": "^0.0.181",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.7.13",
    "@types/react": "^17.0.20",
    "@types/react-dom": "^18.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "5.0.0",
    "typescript": "^4.4.2",
    "web-vitals": "^2.1.0"
  },
```


## 2. Installation

Use `yarn build` to build the project above
Go to chrome://extensions in Google Chrome

![Screen Shot 2022-04-14 at 08.57.31](https://tva1.sinaimg.cn/large/e6c9d24egy1h19oxmphn0j20fq05kweo.jpg)

Click the Developer mode checkbox

Then click Load unpacked extension... and select the /build folder that produced from this repo.


## 3. Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
