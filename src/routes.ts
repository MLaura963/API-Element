import { Router } from "express";
import { getElement, getElementsById } from "./controllers/elements-controller";


const router = Router();

router.get("/elements", getElement);
router.get("/elements/:id", getElementsById);

export default router;