import express, {json, Request, Response} from "express";
import { getElement } from "./controllers/elements-controller";
import router from "./routes";

function createApp() {
    const app = express();

app.use(json());

app.use("/api", router);

    return app;
}


export default createApp;