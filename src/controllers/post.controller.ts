import express, {Router, Request, Response} from 'express';
import { User } from '../database/entity/User';
import { PostService } from '../services/post.service';
import { AppDataSource } from '../data-source';


export class PostController {
    public router: Router;
    private postService: PostService;

    constructor() {
        this.postService = new PostService();
        this.router = express.Router();
        this.routes();
    }

    public index = async (req: Request, res: Response) => {
        console.log('1. HERE');
        await this.postService.index().then(users => {console.log('3 HERE', users);
        })
        res.send('Check the logs, idiota. ');

    }

    public create = async (req: Request, res: Response) => {
        const user = req['body'] as User;
        // const newUser = await this.postService.create(user);
        res.send('Create');
    }

    public update = async (req: Request, res: Response) => {
        res.send('Update');
    }

    public delete = async (req: Request, res: Response) => {
        res.send('Delete');
    }


    public routes() {
        this.router.get('/', this.index);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}