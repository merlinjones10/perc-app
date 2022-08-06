import { User } from '../database/entity/User';
import { AppDataSource } from '../data-source';

export class UserService {
  private userRepository;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  public index = async () => {
    const users = await this.userRepository.find();
    return users;
  };

  public indexOne = async (uuid: string) => {
    return await this.userRepository.findOne({ where: { id: uuid } });
  };

  public create = async (user: any) => {
    console.log(user);
    try {
      const newUser = await this.userRepository.create({
        first_name: user.first_name,
        last_name: user.last_name
      });
      await this.userRepository.save(newUser);
    } catch (e) {
      console.log('err:', e);
    }
  };

  public delete = async (userId: string) => {
    try {
      const user = await this.userRepository.findOneBy({ id: userId });
      if (user) {
        this.userRepository.remove(user);
        return true;
      }
    } catch (e) {
      return false;
    }
  };

  public update = async () => {
    return 'Update from service';
  };
}

// TODO later: update user
