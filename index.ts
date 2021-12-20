import express from "express";

import UserController from "./controllers/userController";
import PostController from "./controllers/postController";

const app = express();
app.use(express.json());

app.get("/users", UserController.index);
app.post("/users", UserController.create);
app.put("/users/:id/edit", UserController.edit);
app.delete("/users/:id", UserController.delete);

app.get("/posts", PostController.index);
app.post("/posts", PostController.create);

app.listen(3000, () => console.log("Server running at port 3000"));