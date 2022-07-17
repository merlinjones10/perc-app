import express, {Router, Request, Response} from 'express';

export class PostController {
    router: Router;

    constructor() {
        this.router = express.Router();
        this.routes();
    }

    public index = async (req: Request, res: Response) => {
        res.send('Index');
    }

    public create = async (req: Request, res: Response) => {
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
