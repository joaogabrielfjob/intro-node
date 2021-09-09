import { Router } from 'express'
import UserController from './controllers/UserController';

const routes = Router()

routes.get('/', UserController.index)
routes.get('/mail', UserController.create)

export default routes;