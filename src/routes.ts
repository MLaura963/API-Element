import { Router } from "express";
import { getElement } from "./controllers/elements-controller";


const router = Router();

router.get("/elements", getElement);

export default router;