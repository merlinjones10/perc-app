import express, { Request, Response } from 'express';
import "reflect-metadata"
import { PostController } from '../controllers/post.controller';

class Server {
    private app: express.Application;
    private postController: PostController;

    constructor() {
        this.app = express()
        this.configuration();
        this.postController = new PostController();
        this.routes();
    }

    public configuration(){
        this.app.set('port', process.env.PORT || 3000);
    }

    public async routes(){
        await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'merlinjones',
        })


        this.app.use('/api/posts', this.postController.router);
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Hello Worlddd');
        })
    }

    public start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        }
        )
    }
}

const server = new Server();
server.start();