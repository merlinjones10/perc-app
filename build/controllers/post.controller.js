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
        this.indexAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.postService.index().then((users) => {
                res.status(200).json({ users: users });
            });
        });
        this.indexOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('h1');
            res.end();
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.postService.create(req.body);
            res.status(201).json({ success: 'created user' });
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send('Update');
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.postService.delete(req.params.id);
            res.status(200).json({ action: 'deleted' });
        });
        this.postService = new post_service_1.PostService();
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', this.indexAll);
        this.router.get('/:id', this.indexOne);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}
exports.PostController = PostController;
