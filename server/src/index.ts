import express from "express";
import { MikroORM } from "@mikro-orm/core";
//import mikroOrmConfig from "./mikro-orm.config";
import postRouter from "./routes/post";
import bodyParser from "body-parser";
import userRouter from "./routes/user";

const main = async () => {
  try {
    const app = express();
    const orm = await MikroORM.init();
    await orm.getMigrator().up();

    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());

    app.use(express.urlencoded({ extended: true }));
    app.use("/posts", postRouter);
    app.use("/user", userRouter);

    app.get("/", (_, res) => {
      res.send("Good");
    });
    app.listen(5000, () => {
      console.log("Listening at port 5000");
    });
  } catch (err) {
    console.error(err.message);
  }
};

main();
