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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const User_1 = require("../database/entity/User");
const data_source_1 = require("../data-source");
class PostService {
    constructor() {
        this.index = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepository.find();
            return users;
        });
        this.create = () => __awaiter(this, void 0, void 0, function* () {
            return 'Create from service';
        });
        this.update = () => __awaiter(this, void 0, void 0, function* () {
            return 'Update from service';
        });
        this.delete = () => __awaiter(this, void 0, void 0, function* () {
            return 'Delete from service';
        });
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
}
exports.PostService = PostService;
