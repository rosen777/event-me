import { Router } from 'express';
import usersRouter from './users.js';
import eventsRouter from './events.js';


const router = Router();

router.use('/users', usersRouter);
router.use('/events', eventsRouter);


export default router;
