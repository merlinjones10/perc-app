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

  public indexOne = async (uid: number) => {
    return await this.userRepository.findOne({ where: { id: uid } });
  };

  public create = async (user: any) => {
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

  public delete = async (uid: number) => {
    try {
      const user = await this.userRepository.findOneBy({ id: uid });
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
