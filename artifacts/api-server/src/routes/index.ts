import { Router, type IRouter } from "express";
import healthRouter from "./health";
import internshipRouter from "./internship";

const router: IRouter = Router();

router.use(healthRouter);
router.use(internshipRouter);

export default router;
