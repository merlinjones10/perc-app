import { User } from '../database/entity/User';
import { AppDataSource } from '../data-source';

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
    newUser.firstName = user.firstName.toLowerCase();
    newUser.lastName = user.lastName.toLowerCase();
    newUser.age = user.age;
    await this.userRepository.save(newUser);

    return { success: true };
  };

  public update = async () => {
    return 'Update from service';
  };

  public delete = async () => {
    return 'Delete from service';
  };
}
