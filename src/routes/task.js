import {Router} from 'express';

let router = Router();

router.get('/', (req, res) => {
    return res.send("task")
});

export default router;
