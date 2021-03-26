import { Application, Request, Response } from 'express'
import bodyParser from "body-parser"
import cors from 'cors'
import express from 'express'
import * as dotenv from 'dotenv'
import { CommonRoutesConfig } from './common/routes.config'
import { PostsRoutes } from './routes/post.config'

class App {
    public app: Application
    public routes: Array<CommonRoutesConfig> = [];

    constructor(){
        this.app = express();
        this.setConfig()
        this.configRoutes()
    }

    private setConfig(){

        dotenv.config()

        // JSON format request
        this.app.use(bodyParser.json({limit: "50mb"}))

        // x-www-form urlencoded
        this.app.use(bodyParser.urlencoded({ extended: true, limit: "50mb"}))

        // cors
        this.app.use(cors())
    }

    public configRoutes(): void {
        this.routes.push(new PostsRoutes(this.app));
        this.app.get('/', (req: Request, res: Response) => {
            res.status(200).json({
                message: "Home route, server up and running"
            })
        })
    }

}

export default new App()