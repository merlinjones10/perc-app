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
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            const newUser = new User_1.User();
            // MJ Do I want to keep casing, not convert?
            newUser.first_name = user.first_name.toLowerCase();
            newUser.last_name = user.last_name.toLowerCase();
            yield this.userRepository.save(newUser);
        });
        this.delete = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.findOneBy({ id: userId });
                if (user) {
                    this.userRepository.remove(user);
                }
            }
            catch (e) {
                console.log('user not found');
            }
        });
        this.update = () => __awaiter(this, void 0, void 0, function* () {
            return 'Update from service';
        });
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
}
exports.PostService = PostService;
//TODO change route name to USERS or something
// Create get for individual user, using req param not body
// CHANGE naming of controllers?
