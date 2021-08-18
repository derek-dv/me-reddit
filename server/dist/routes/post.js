"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const express_1 = __importDefault(require("express"));
const post_1 = require("../entities/post");
const postRouter = express_1.default.Router();
const db = core_1.MikroORM.init();
postRouter.get("/", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("done");
    const orm = yield db;
    const data = yield orm.em.find(post_1.Post, {});
    res.json(data);
}));
postRouter.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orm = yield db;
    const post = orm.em.create(post_1.Post, {
        authorId: req.body.author,
        content: req.body.content,
        createdAt: new Date(),
        title: req.body.title,
        votes: req.body.votes ? req.body.votes : 0,
    });
    try {
        yield orm.em.persistAndFlush(post);
        res.status(201).json(post);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "server error" });
    }
}));
postRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orm = yield db;
    const id = req.params.id;
    if (id) {
        const post = yield orm.em.findOne(post_1.Post, { id: Number(id) });
        res.json(post);
    }
    else {
        res.status(404).json({ error: "post not found" });
    }
}));
exports.default = postRouter;
//# sourceMappingURL=post.js.map