import {UserRepository} from "../repository/user.repository";
import { User } from "../database/entity/User";
import { AppDataSource } from "../data-source";


export class PostService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

public index = async () => {
    const users = await this.userRepository.find();
    return users;
}

public create = async () => {
    return 'Create from service';
}

public update = async () => {
    return 'Update from service';
}

public delete = async () => {
    return 'Delete from service';
}
}