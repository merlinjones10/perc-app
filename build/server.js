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
require("dotenv/config");
const user_controller_1 = require("./controllers/user.controller");
const data_source_1 = require("./data-source");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configuration();
        this.userController = new user_controller_1.UserController();
        this.routes();
    }
    configuration() {
        this.app.set('port', process.env.PORT || 3001);
        this.app.use(express_1.default.json());
    }
    routes() {
        return __awaiter(this, void 0, void 0, function* () {
            data_source_1.AppDataSource.initialize().catch((e) => console.log('DB uninitialized:', e));
            this.app.use('/api/users', this.userController.router);
            this.app.get('/', (req, res) => {
                res.status(200).send(`SERVER RUNNING @ ${new Date()}`);
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
//TODO setup tests,
// Add lint and tests to GH actions
// Deploy
