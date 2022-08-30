import express, { Router, Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { InstrumentService } from '../services/instrument.service';
import { User } from '../database/entity/User';
import { Instrument, Categories } from '../database/entity/Instrument';
import { AppDataSource } from '../data-source';

export class InstrumentController {
  public router: Router;
  private instrumentService: InstrumentService;

  constructor() {
    this.instrumentService = new InstrumentService();
    this.router = express.Router();
    this.routes();
  }

  public indexAll = async (req: Request, res: Response) => {
    await this.instrumentService.index().then((instruments: any) => {
      res.status(200).json({ instruments });
    });
    res.end();
  };

  public indexOne = async (req: Request, res: Response) => {
    const uid = parseInt(req.params.id);
    console.log('User is', uid);
    const instruments = await this.instrumentService.indexByOwner(uid);
    console.log(instruments);
    res.status(200).json({ instruments });
  };

  public create = async (req: Request, res: Response) => {
    await this.instrumentService.create(req.body);
    res.status(201).json({ success: 'created instrument' });
  };

  public update = async (req: Request, res: Response) => {
    res.send('not in use');
  };

  public delete = async (req: Request, res: Response) => {
    const deleted = await this.instrumentService.delete(req.params.id);
    if (deleted) return res.status(200).json({ action: 'deleted' });
    return res.status(500).json({ error: 'instrument not found' });
  };

  public routes() {
    this.router.get('/', this.indexAll);
    this.router.get('/:id', this.indexOne);
    this.router.post('/', this.create);
    this.router.put('/:id', this.update);
    this.router.delete('/:id', this.delete);
  }
}
