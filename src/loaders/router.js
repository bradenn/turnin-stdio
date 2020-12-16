import bodyParser from 'body-parser';
import express from 'express';
import routes from '../routes';

export default app => {

    /* Define endpoint prefix */
    app.use('/', routes);

    /* Catch all unhandled requests */
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    /* Handler all errors */
    app.use((err, req, res, next) => {
        return res.send("Not found");
    });

};
