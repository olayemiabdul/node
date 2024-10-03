import express from "express";
import bodyParser from "body-parser";
import e from "express";
import pg from "pg";

const app = express();
const port = 3000;
const db=new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "nadrah",
  password: "123456",
  port: 5433,
});
db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {

  res.render("login.ejs");
  
});

app.get("/register", (req, res) => {
  
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  console.log(email);
  console.log(password);
  const email = req.body.username
  const password = req.body.password;
  const result=await db.query(
    "INSERT INTO users (email, password) VALUES ($1, $2)",
    [email, password]
  );
  console.log(result);
  res.render("secrets.ejs")

  app.console(email);
  app.console(password)
});

app.post("/login", async (req, res) => {
  const email = req.body.username
  const password = req.body.password;

  app.console(email);
  app.console(password)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
