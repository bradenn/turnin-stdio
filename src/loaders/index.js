import expressLoader from './express.js';
import routeLoader from './router.js';

export default async app => {
    await expressLoader(app);
    await routeLoader(app);
}
