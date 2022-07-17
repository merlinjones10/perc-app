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
exports.PostController = void 0;
const express_1 = __importDefault(require("express"));
const post_service_1 = require("../services/post.service");
class PostController {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.postService.index().then((users) => {
                console.log('3 HERE', users);
            });
            res.send('Check the logs, idiota.');
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            console.log('user:', user);
            yield this.postService.create(user).then((res) => {
                console.log('created?', res);
            });
            res.send('Created');
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send('Update');
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send('Delete');
        });
        this.postService = new post_service_1.PostService();
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', this.index);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}
exports.PostController = PostController;
