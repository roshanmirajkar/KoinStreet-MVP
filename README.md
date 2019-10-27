This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


# KoinStreet

This repo contains code about KoinStreet's MVP.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Installing

Step by step instructions on how to get the app running locally.

1. Clone repository locally by opening the command line and running `git clone https://github.com/roshanmirajkar/KoinStreet-MVP.git`

2. Install dependencies by running `npm install` in the project directory.

3. Run app locally by runinng `npm start` in the project directory.

4. Compile production version of app by running `npm run build` in the project directory. From here you can also serve a static server.

5. After running `npm run build` Run `firebase deploy' to host it on the firebae url

## Helpful Scripts

1. To avoid `has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.` problem when running the app on local host open terminal and run ` open -n -a /Applications/Google\ Chrome.app --args --user-data-dir="/tmp/someFolderName" --disable-web-security`. This opens up a new chrome window with securirty settings disabled.



## Basic Commands

1. `Git branch`- lists current branch you're on.

2. `Git commit -m "some message here"` - adds a commit with a message to current work.

3. `Git pull` - downloads the most recent updates to branch.

4. `Git push origin [branch name` - sets default branch to push with branch name you specify. Next time running `Git push` will automatically push to branch that was set before.

## Firebase

Firebase Project Name - `Koinstreet-test`

### CoinBase

Intructions about how to work with Coinbase. Coinbase Test email is kcpx@koinstreet.com.

1. When testing the Portfolio OAuth, to test it locally the permitted URI should be http://localhost:3000/portfolio

2. When testing the Portfolio OAuth, to test it on production the permitted URI should be https://koinstreet-test.firebaseapp.com/portfolio

Need to be replaced on redirect URI and on the post params with scope parameter

### WorkFlow

Run app locally using command `firebase serve`, this will serve it locally. Had to remove the `homepage` field settings in package.json so firebase searches for files in root after running `npm run build` which creates a stable production build. Changes `public` points to `build` in `firebase.json`, this enables latest changes to be hosted by running `firebase deploy`.

1. `firebase serve` - runs app locally on port 5000

2. `firebase deploy` - deploys app on firebase server at // url

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## PULL DATA

## 1. Run `git status` to check tracked/untracked files and branch status

## 1.5 If you see untracked files, add them to the commit by running `git add -A` to add tracked files and run`git add .`to add both tracked and untracked files. 

## 2. Run `git commit -m "<message name>"` to write a commit message after adding files.

## 3. If you want to discard all changes that you did on a particular file, run `git checkout <filename>`. This will basically update that particulat file to go back to the version that exists on the most recent push to the branch you're using.

## 4. Run `git pull` to update most up to date version of code. If you have more updated code and try to run `git push`and you get a message saying you are ahead of the branch, running `git pull` can sometiems help resolve changes to what is the most accurate version of the file. Then running `git push` to resolve merge changes and publish changes

## 5. While running `git push` if you get a message saying that you are unable to push because you don't have updated code then run `git stash --include-untracked` this will stash and save all your current untracked and tracked files. Then you can run `git pull` o recieve the most updated version of the code. Then you can run `git stash apply` to apply your original changes.
