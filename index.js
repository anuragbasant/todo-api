const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const port = 3003;

const UserService = require("./service/userService");
const TodoService = require("./service/todoService");

app.get("/user/:userId", async (req, res) => {
  try {
    const userService = new UserService();
    const result = await userService.getUserById(req.params.userId);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

app.post("/user", async (req, res) => {
  try {
    const userService = new UserService();
    const result = await userService.createUser(req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

app.get("/todo/:todoId", async (req, res) => {
  try {
    const todoService = new TodoService();
    const result = await todoService.getTodoById(req.params.todoId);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});


app.listen(port, () => {
  console.log(`USER api app listening at http://localhost:${port}`);
});