import {Router} from 'express';

import task from './task';
import process from './process';

let router = Router();

router.use('/process', process);
router.use('/task', task);
export default router;
