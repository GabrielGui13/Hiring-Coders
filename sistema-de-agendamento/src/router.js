import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CollaboratorController from './app/controllers/CollaboratorController';
import AppointmentController from './app/controllers/AppointmentController';
import './database';
import authMiddleware from './app/middlewares/auth';


const routes = new Router();
const upload = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

// Rotas authenticadas
routes.use(authMiddleware)
routes.put('/users', UserController.update)

// Rota de agendamento
routes.post('/appointments', AppointmentController.store)

// Lista todos os colaboradores
routes.get('/collaborator', CollaboratorController.index)

// Upload de arquivos
routes.post('/files', upload.single('file'), FileController.store)


export default routes;