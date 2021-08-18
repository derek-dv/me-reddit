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
const express_1 = __importDefault(require("express"));
const core_1 = require("@mikro-orm/core");
const post_1 = __importDefault(require("./routes/post"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_1 = __importDefault(require("./routes/user"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const app = express_1.default();
        const orm = yield core_1.MikroORM.init();
        yield orm.getMigrator().up();
        app.use(body_parser_1.default.urlencoded({ extended: false }));
        app.use(body_parser_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use("/posts", post_1.default);
        app.use("/user", user_1.default);
        app.get("/", (_, res) => {
            res.send("Good");
        });
        app.listen(5000, () => {
            console.log("Listening at port 5000");
        });
    }
    catch (err) {
        console.error(err.message);
    }
});
main();
//# sourceMappingURL=index.js.map