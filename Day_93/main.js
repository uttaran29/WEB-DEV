import mongoose from "mongoose";
import express from "express";
import { Todo } from "./model/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3001

app.get('/', (req, res) => {
  const todo = new Todo({ title: "Uttaran", desc: "I am Uttaran If you know me you are GOD.", isDone: false })
  todo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})