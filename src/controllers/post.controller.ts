import express, {Router, Request, Response} from 'express';
import {User} from '../database/entity/User';
import {PostService} from '../services/post.service';
import {AppDataSource} from '../data-source';

export class PostController {
    public router: Router;
    private postService: PostService;

    constructor() {
        this.postService = new PostService();
        this.router = express.Router();
        this.routes();
    }

    public indexAll = async (req: Request, res: Response) => {
        await this.postService.index().then((users) => {
            res.status(200).json({users: users});
        });
    };

    public indexOne = async (req: Request, res: Response) => {
        console.log('h1')
        res.end()

    };
    public create = async (req: Request, res: Response) => {
        await this.postService.create(req.body)
        res.status(201).json({"success": "created user"})
    };

    public update = async (req: Request, res: Response) => {
        res.send('Update');
    };

    public delete = async (req: Request, res: Response) => {
        await this.postService.delete(req.params.id)
        res.status(200).json({"action": "deleted"})
    };

    public routes() {
        this.router.get('/', this.indexAll);
        this.router.get('/:id', this.indexOne);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}
