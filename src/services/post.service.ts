import {User} from '../database/entity/User';
import {AppDataSource} from '../data-source';

export class PostService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    public index = async () => {
        const users = await this.userRepository.find();
        return users;
    };

    public create = async (user: any) => {
        const newUser = new User();
        // MJ Do I want to keep casing, not convert?
        newUser.first_name = user.first_name.toLowerCase();
        newUser.last_name = user.last_name.toLowerCase();
        await this.userRepository.save(newUser);
    };

    public delete = async (userId: string) => {
        try {
            const user = await this.userRepository.findOneBy({id: userId})
            if (user) {
                this.userRepository.remove(user)
            }
        } catch (e) {
            console.log('user not found')
        }
    };

    public update = async () => {
        return 'Update from service';
    };
}

//TODO change route name to USERS or something
// Create get for individual user, using req param not body
// CHANGE naming of controllers?