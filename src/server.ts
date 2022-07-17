import express, { Request, Response } from 'express';
import "reflect-metadata"
import { PostController } from '../controllers/post.controller';
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"



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

    await AppDataSource.initialize()

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Band"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)



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