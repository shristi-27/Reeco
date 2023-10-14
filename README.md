# Reeco Orders App

An order app built in React using Context API, Emotion CSS and Typescript.
User can perform the following actions - 
 - View their order details
 - Go through the list of products in the order
 - Approve any product
 - Mark product as Missing or Missing-urgent
 - Product status can be updated until the order is Approved or the shipping date has not arrived

Note - To test out different cases, feel free to update the dummy data in `data/order.ts` file
## Directory structure

### Components 
Contains all the shared components that can be reused across the app
 - Navbar
 - Status chip

### Constants
Contains the color library used in the app, in future can hold more such constants

### Contexts
Contains all the contexts, currently only has Order context
 - Order Context

### Data
Contains the dummy data being used in the app, data can be modified from here to test different use cases

### Images
Contains image assets being used in the app

### Models
Contains all typescript classes, interfaces and enums that are being used in the app

### Views
Contains all the big page specific components and containers

## External Libraries used
 - emotion/styled - for styled components
 - react-icons - for sourcing the icons used
 - react-modal - for quickly setting up an easy way to open modals


## Bugs / Limitations
* Order can't be approved in the UI
* Product can't be edited in the UI
* Certain UI / UX yet to be polished for pixel perfect (dimensions & colors)

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).