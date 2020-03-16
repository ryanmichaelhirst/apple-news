# Apple News
Clone of Apple News app for iOS using React and the news api. Powered by https://newsapi.org/.

## Installation
```
npm install
```

## Usage
```
npm run build
npm run dev
```

## Approach
I started with my own webpack starter repo I created a while ago when teaching myself how to use webpack / babel. <br /> 
It is basically a minimalist copy of create-react-app. <br /> 

I've done multiple full-stack projects in the past so I decided to use the stack that I'm already familiar with. This stack is all 
Javascript with Express.js for the back-end and React.js for the front-end. <br /> 

For the database I used AWS's RDS service to create a mysql database with 1 table that has the following fields: <br />
```
id - auto-incremented primary key for each article entry
title - title of article
url - url to article
```

I used the NewsAPI provided to retrieve the articles and the axios library to make all http requests.
I know that fetch is now built into Javascript but axios is a simple wrapper that automatically converts the response to json. <br />

I started off by looking at the NewsAPI documentation and saw that they let you request articles based on category.
So I created a menu bar that allows you to browse articles by category. 
From there I took a look at a couple of news websites to come up with a bare bones design for the app (CNN, Apple News, and Fox).
I know that this wasn't required by I also created a page that lets you view all saved articles. <br />

I knew that I was going to need page navigation in order for users to be able to navigate to particular articles and see their saved articles,
so I used the react-router library. <br />

Next I saw that the functionality of the app was pretty straight forward and divided my work into the following: <br />
- A container component to perform dynamic api requests and retrieve a list of articles.
- A list component to render a collection of item components for each article.
- An item component to present an article and it's relevant information.
- A save button to save articles to the database.
- A menu bar to filter articles by category.
- A page to display lists of articles based on whatever category is chosen in the menu bar.
- A page for a specific article that would display it's relevant information.
- And a page to show saved articles (just title, link, image, and how long ago it was published). <br />

For the structure of my front-end source code I categorized them into pages, containers, components, and data structures. <br />
```
Pages - top-level parent components that provide the layout for all the content on the current page.
Containers - 2nd level parent components that perform general api requests and pass data to presentational components.
Components - bottom-level child components that are primarily used as presentational components. Some include api requests like SaveBtn.jsx.
Data - folder to create a data structure that contains the api endpoints for different requests.
```

# Technology Used

## Frameworks
Github WebpackStarter - my own github repo i made as a starting point for all web based projects. <br /> 
Create react app is also a good option but comes prepackaged with a lot of code that is often overkill. <br />
I created a React.js + Webpack build that is much smaller, simpler, and easier to extend. <br />
https://github.com/rmbh4211995/webpack-starter <br />
Express - Node.js web app framework, used to create the server / api endpoints <br />
React - JS library for building user interfaces, used to create the client <br />
React Router - Routing library for react that allows for pseudo page navigation for react applications <br />

## Tools
Mysql.js - Node.js client for interacting with a mysql database <br />
AWS RDS - Amazon's relational database service, used to create the database <br />
Webpack - JS bundler for reading / generating web assets <br />
Babel - JS transpiler for converting next generation JS into plain vanilla JS <br />
Nodemon - JS utility library that enables hot reloading for server side code <br />
Axios - Promise based http client for the browser / Node.js, used for making api requests <br />
EJS - JS templating language for generating HTML markup <br />

## API
Powered by NewsAPI.org <br />
Articles are returned in the following format: <br />

```
source: object,
author: string,
title: string,
description: string,
url: string
urlToImage: string,
publishedAt: string,
content: string
```

## API Key
```
4a611c6bf48c4b04a539faa5b8a90a1b
```

## Amazon MySQL DB
```
host: applenews.ckez4f2x1qxs.us-east-1.rds.amazonaws.com
port: 3306
database: applenews
username: admin
password: admninpassword
```