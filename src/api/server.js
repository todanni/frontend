import {createServer} from "miragejs";
import routes from './routes';
import models from './models';
import seeds from './seeds';


const config = environment => {
    const config = {
        environment,
        models,
        routes,
        seeds
    };
    return config;
}

export function makeServer({environment = "test"} = {}) {
    return createServer(config(environment));
}