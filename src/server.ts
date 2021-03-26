import _ from './app'
import { CommonRoutesConfig } from './common/routes.config';
import { PostsRoutes } from './routes/post.config';

const routes: Array<CommonRoutesConfig> = []
routes.push(new PostsRoutes(_.app))

const PORT = process.env.PORT || 3010;

_.app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    _.routes.forEach((route: CommonRoutesConfig) => {
        console.log(`Routes configured for ${route.getName()}`)
    })
})
