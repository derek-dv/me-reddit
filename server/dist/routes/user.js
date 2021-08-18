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
const argon2_1 = __importDefault(require("argon2"));
const express_1 = __importDefault(require("express"));
const user_1 = require("../entities/user");
const userRouter = express_1.default.Router();
const db = core_1.MikroORM.init();
userRouter.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orm = yield db;
    const exists = yield orm.em.findOne(user_1.User, { id: req.body.id });
    if (!exists) {
        try {
            if (req.body.password === req.body.password2) {
                const hashPassword = yield argon2_1.default.hash(req.body.password);
                const user = orm.em.create(user_1.User, {
                    email: req.body.email,
                    isAdmin: false,
                    password: hashPassword,
                    username: req.body.username,
                });
                yield orm.em.persistAndFlush(user);
                res.status(201).json(Object.assign({}, user));
            }
            else {
                res.status(401).json({
                    msg: {
                        type: "error",
                        text: "passwords do not match",
                        field: "password",
                    },
                });
            }
        }
        catch (err) {
            console.log(err.message);
            res.status(500).send("server error");
        }
    }
    else {
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
}));
userRouter.get('/all', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { em } = yield db;
    try {
        const users = yield em.find(user_1.User, {});
        res.status(200).json(users);
    }
    catch (err) {
        res.send('error');
    }
}));
exports.default = userRouter;
//# sourceMappingURL=user.js.map