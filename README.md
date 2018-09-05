# react

#Add live server
yarn global add live-server or npm install -g live-server

#Running live server
live-server public

#installing babel
yarn global add babel-cli@6.24.1  or npm install -g babel-cli@6.24.1

#initlizing depedencies
yarn init

yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

#remove bable-cli and live-server
sudo npm uninstall -g live-server
sudo npm uninstall -g babel-cli


