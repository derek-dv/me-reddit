import { Post } from "./entities/post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/user";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: false,
  },
  dbName: "redditclone",
  entities: [Post, User],
  type: "postgresql",
  user: "derek", 
  password: "derek",
  debug: !false,
} as Parameters<typeof MikroORM.init>[0];
