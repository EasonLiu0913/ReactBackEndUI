const express = require("express"); //express
const session = require("express-session"); //session
const cors = require("cors"); //CORS
const db = require("./db_connect");
const moment = require("moment-timezone");
const date = "YYYY-MM-DD";
const time = "HH:mm:ss";

//建立webserver物件
const app = express();

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "whatever123456",
    cookie: {
      masAge: 1200000
    }
  })
);

//CORS
//記得前端設定credentials = 'include'
const whiteList = ["http://localhost:3000", undefined];
const corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  }
};
app.use(cors(corsOptions));

// get data from db
app.get("/db/:table?", (req, res) => {
  let sql = `SELECT * FROM ${req.params.table} `;
  db.queryAsync(sql).then(r => {
    r.forEach(e => {
      e.date = moment(e.created_at).format(date);
      e.time = moment(e.created_at).format(time);
    });

    return res.json(r);
  });
});

// index page
app.get("/", (req, res) => {
  res.send("hello");
});

//404
app.use((req, res) => {
  res.send("404 not found");
});

app.listen(5500, () => {
  console.log("Express server start");
});
