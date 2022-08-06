import express, {Request, Response} from 'express';
import 'reflect-metadata';
import 'dotenv/config'
import {PostController} from './controllers/post.controller';
import {AppDataSource} from './data-source';
import {User} from './database/entity/User';


class Server {
    private app: express.Application;
    private postController: PostController;

    constructor() {
        this.app = express();
        this.configuration();
        this.postController = new PostController();
        this.routes();
    }

    public configuration() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.json());
    }

    public async routes() {
        await AppDataSource.initialize();

        this.app.use('/api/posts', this.postController.router);

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
