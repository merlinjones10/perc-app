import express, { Request, Response } from 'express';
import 'reflect-metadata';
import 'dotenv/config';
import { UserController } from './controllers/user.controller';
import { AppDataSource } from './data-source';

class Server {
  private app: express.Application;
  private userController: UserController;

  constructor() {
    this.app = express();
    this.configuration();
    this.userController = new UserController();
    this.routes();
  }

  public configuration() {
    this.app.set('port', process.env.PORT || 3001);
    this.app.use(express.json());
  }

  public async routes() {
    AppDataSource.initialize().catch((e) =>
      console.log('DB uninitialized:', e)
    );

    this.app.use('/api/users', this.userController.router);

    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).send(`SERVER RUNNING @ ${new Date()}`);
    });
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server on port', this.app.get('port'));
    });
  }
}

const server = new Server();
server.start();

//TODO setup tests,
// Add lint and tests to GH actions
// Deploy
