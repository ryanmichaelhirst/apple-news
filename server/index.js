const mysql = require('mysql');
const path = require("path");
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require(path.join(__dirname, "../webpack.config.js"));
const compiler = webpack(config);
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(webpackDevMiddleware(compiler, config.devServer));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, '../build')));

function executeQuery(query, res) {
    db.query(query, (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
}

const db = mysql.createConnection({
    host: "applenews.ckez4f2x1qxs.us-east-1.rds.amazonaws.com",
    port: 3306,
    database: "applenews",
    user: 'admin',
    password: "admninpassword"
});
db.connect();

app.get('/actions/getSavedArticles', (req, res) => {
    const sql = 'SELECT * FROM Saved';
    executeQuery(sql, res);
});

app.post('/actions/saveArticle/:title/:url', (req, res) => {
    const sql = `INSERT INTO Saved (title, url) VALUES ('${req.body.title}', '${req.body.url}')`;
    executeQuery(sql, res);
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(4000);