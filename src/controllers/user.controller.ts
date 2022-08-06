import express, { Router, Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { User } from '../database/entity/User';
import { AppDataSource } from '../data-source';

export class UserController {
  public router: Router;
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
    this.router = express.Router();
    this.routes();
  }

  public indexAll = async (req: Request, res: Response) => {
    await this.userService.index().then((users: any) => {
      res.status(200).json({ users: users });
    });
  };

  public indexOne = async (req: Request, res: Response) => {
    const user = await this.userService.indexOne(req.params.id);
    res.status(200).json({ user });
  };
  public create = async (req: Request, res: Response) => {
    await this.userService.create(req.body);
    res.status(201).json({ success: 'created user' });
  };

  public update = async (req: Request, res: Response) => {
    res.send('Update');
  };

  public delete = async (req: Request, res: Response) => {
    const deleted = await this.userService.delete(req.params.id);
    if (deleted) return res.status(200).json({ action: 'deleted' });
    return res.status(500).json({ error: 'user not found' });
  };

  public routes() {
    this.router.get('/', this.indexAll);
    this.router.get('/:id', this.indexOne);
    this.router.post('/', this.create);
    this.router.put('/:id', this.update);
    this.router.delete('/:id', this.delete);
  }
}
