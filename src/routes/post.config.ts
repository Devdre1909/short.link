import { Application, Request, Response } from "express";
import { CommonRoutesConfig } from "../common/routes.config";

export class PostsRoutes extends CommonRoutesConfig {
    constructor(app: Application){
        super(app, 'PostsRoutes')
    }
    configureRoutes(){
        this.app.route('/posts')
            .get((req: Request, res: Response) => {
                res.status(200).json({
                    success: true, 
                    posts: []
                })
            })
        return this.app;
    }
}