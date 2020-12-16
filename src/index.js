import express from 'express';
import config from './config';
import loaders from './loaders';

async function start() {
    const app = express();

    await loaders(app);

    const port = config.PORT;
    app.listen(port, () => console.log(`Server started, listening on port ${port}.`));
}

export default start();

// import Files from "./services/files";
//
// const sessionUUID = Math.random().toString(36).substring(7);
//
// Files.downloadFile("5,01d4ef4971", "test1.in", sessionUUID);
