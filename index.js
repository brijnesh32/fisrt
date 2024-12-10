import express from "express";
import path from "path";
import { resolve } from "path";

const app = express();
const users = [];
app.use(express.static(path.join(resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "don" });
});
app.get("/add", (req, res) => {
  res.send("nice");
});
app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact", (req, res) => {
  users.push({ username: req.body.firstname, email: req.body.email });
  res.redirect("/success");
});
app.get("/user", (req, res) => {
  res.json({
    users,
  });
});
app.listen(5000, () => {
  console.log("server is starting");
});
