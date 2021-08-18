import { MikroORM } from "@mikro-orm/core";
import express from "express";
import { Post } from "../entities/post";

const postRouter = express.Router();
const db = MikroORM.init();

postRouter.get("/", async (_, res) => {
  console.log("done");
  const orm = await db;
  const data = await orm.em.find(Post, {});
  res.json(data);
});

postRouter.post("/create", async (req, res) => {
  const orm = await db;
  const post = orm.em.create(Post, {
    authorId: req.body.author,
    content: req.body.content,
    createdAt: new Date(),
    title: req.body.title,
    votes: req.body.votes ? req.body.votes : 0,
  });
  try {
    await orm.em.persistAndFlush(post);
    res.status(201).json(post);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "server error" });
  }
});

postRouter.get("/:id", async (req, res) => {
  const orm = await db;
  const id = req.params.id;
  if (id) {
    const post = await orm.em.findOne(Post, { id: Number(id) });
    res.json(post);
  } else {
    res.status(404).json({ error: "post not found" });
  }
});

export default postRouter;
