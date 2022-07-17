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
require("reflect-metadata");
const post_controller_1 = require("../controllers/post.controller");
const data_source_1 = require("./data-source");
const User_1 = require("./entity/User");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configuration();
        this.postController = new post_controller_1.PostController();
        this.routes();
    }
    configuration() {
        this.app.set('port', process.env.PORT || 3000);
    }
    routes() {
        return __awaiter(this, void 0, void 0, function* () {
            yield data_source_1.AppDataSource.initialize();
            console.log("Inserting a new user into the database...");
            const user = new User_1.User();
            user.firstName = "Band";
            user.lastName = "Saw";
            user.age = 25;
            yield data_source_1.AppDataSource.manager.save(user);
            console.log("Saved a new user with id: " + user.id);
            console.log("Loading users from the database...");
            const users = yield data_source_1.AppDataSource.manager.find(User_1.User);
            console.log("Loaded users: ", users);
            this.app.use('/api/posts', this.postController.router);
            this.app.get('/', (req, res) => {
                res.send('Hello Worlddd');
            });
        });
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
