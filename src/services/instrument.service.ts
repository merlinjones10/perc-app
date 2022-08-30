import { User } from '../database/entity/User';
import { Categories, Instrument } from '../database/entity/Instrument';
import { AppDataSource } from '../data-source';
// import { createQueryBuilder } from 'typeorm';

export class InstrumentService {
  private instrumentRepository;
  private userRepository;

  constructor() {
    this.instrumentRepository = AppDataSource.getRepository(Instrument);
    this.userRepository = AppDataSource.getRepository(User);
  }

  public index = async () => {
    const instruments = await this.instrumentRepository.findAndCount();
    return instruments;
  };

  public indexByOwner = async (uid: number) => {
    // const allStuff = await this.userRepository
    //   .createQueryBuilder('user')
    //   .leftJoinAndSelect('user.instruments', 'instrument')
    //   .where('user.id = :id', { id: 16 })
    //   .getOne();
    // console.log(allStuff);

    const usersInstruments = await this.instrumentRepository.findAndCount({
      where: {
        user: { id: uid }
      }
    });
    return usersInstruments;
  };

  public create = async (body: any) => {
    const { userId, value, location, name, category, size } = body;
    const owner = await this.userRepository.findOneBy({ id: userId });
    // get enum from string
    try {
      const newInstrument = new Instrument();
      newInstrument.value = value;
      newInstrument.location = location;
      newInstrument.name = name;
      newInstrument.category = Categories.CYMBAL;
      newInstrument.notes = 'needs repair';
      newInstrument.size = size;
      newInstrument.user = owner!;

      await this.instrumentRepository.save(newInstrument);
    } catch (e) {
      console.log('err:', e);
    }
  };

  public delete = async (uuid: string) => {
    try {
      const instrument = await this.instrumentRepository.findOneBy({
        id: uuid
      });
      if (instrument) {
        this.instrumentRepository.remove(instrument);
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

// TODO later: update instrument
