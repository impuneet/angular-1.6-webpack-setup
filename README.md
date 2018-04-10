### Prerequisites
Node 6.x.x, Yarn

##### Package Manager
Yarn : Yarn caches every package it has downloaded, so it never needs to download the same package again. It also does almost everything concurrently to maximize resource utilization. This means even faster installs.
https://github.com/yarnpkg/yarn

### Steps to run project
1. Clone Project.
2. Do `yarn install` to install all dependencies.
3. Finally `yarn start` to run project.

### Webpack
Webpack is a build tool that puts all of your assets, including Javascript, images, fonts, and CSS, in a dependency graph.

#### Why we use webpack ??

Webpack lets you use require() in your source code to point to local files, like images, and decide how they're processed in your final Javascript bundle, like replacing the path with a URL pointing to a CDN.

#### What we have done in config in the Webconfig.
```
devServer: {
		port: 3000,
		contentBase: './src/',
		historyApiFallback: true
	}
loader: ['ng-annotate-loader', 'babel-loader']
loader: "sass-loader"
loader: 'url-loader?limit=10000',
entry: {
		'app': './src/app.module.js',
		'vendor': './src/vendor.module.js'
	},
	devtool: 'source-map',
```

#### Use Object Oriented Js of ECMA 6 with Anuglar 1.6

### Third party used :
```
"angular-cookies": "^1.6.9",
"angular-ui-router": "^1.0.3",
"bootstrap-sass": "^3.3.7",
```
### Localstorage / sessionStorage / cookieService

###### localstorage/sessionStorage : 
This locally available storage we used for saving the token that is provided after the login API call.0
23==
### Component Based Structure in whole Application

> We Hierrarchy based Project Structure here in the Application

> thoughout all the application we have used the Promises for handling Callback hell & Erro Handling

>Nav Bar change according to the Authorization

>Color Change of the Menu / Navigation will be changed according to the template selected by the user.

>Jquery Free Code

> For Consoling Logs in the whole Application we used $log for maintaining the multiple type of logs in the application

### Why I didn't implement Search in the lead page
There is the pagination that's being implemented in the Leads Page so the search will be done only for the current 5 records and other reason for that is searching should be done on the basis on what parameter is not defined and the we shound prefer the API call on search hit.So the search API wasn't provided.

```
{
   "type":"node",
   "request":"launch",
   "name":"Debug",
   "program":"${workspaceFolder}/node_modules/webpack-dev-server/bin/webpack-dev-server",
   "args":[
      "--progress",
      "--debug"
   ]
},
{
   "name":"Launch Chrome against localhost, with sourcemaps",
   "type":"chrome",
   "request":"launch",
   "url":"http://localhost:3000",
   "sourceMaps":true,
   "webRoot":"${workspaceRoot}"
}
```

After adding these tasks, you need to run first debug task and then launch chrome task.
