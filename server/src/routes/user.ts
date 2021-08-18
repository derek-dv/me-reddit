import { MikroORM } from "@mikro-orm/core";
import argon2 from "argon2";
import express from "express";
import { User } from "../entities/user";
const userRouter = express.Router();

const db = MikroORM.init();

//register user
userRouter.post("/register", async (req, res) => {
  const orm = await db;
  const exists = await orm.em.findOne(User, { id: req.body.id });
  if (!exists) {
    try {
      if (req.body.password === req.body.password2) {
        const hashPassword = await argon2.hash(req.body.password);
        const user = orm.em.create(User, {
          email: req.body.email,
          isAdmin: false,
          password: hashPassword,
          username: req.body.username,
        });
        await orm.em.persistAndFlush(user);
        res.status(201).json({ ...user });
      } else {
        res.status(401).json({
          msg: {
            type: "error",
            text: "passwords do not match",
            field: "password",
          },
        });
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  } else {
    res
      .status(400)
      .json({
        msg: {
          type: "error",
          text: "user already exists",
          field: "username",
        },
      });
  }
});


//get all users
userRouter.get('/all', async (_, res) => {
    const {em} = await db
    try{
        const users = await em.find(User,{})
        res.status(200).json(users)
    }
    catch(err){
        res.send('error')
    }
})

export default userRouter;
