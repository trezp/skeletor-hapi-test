import * as Hapi from "@hapi/hapi";
import routes from "./config/routes";


/*
 * Database
 */


/*
 * Application
 */
const host = "localhost";
const port = 3000;

const server: Hapi.Server = new Hapi.Server({host, port});
server.route(routes);

async function start() {
    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server running @ ${server.info.uri}`);
}

start();
