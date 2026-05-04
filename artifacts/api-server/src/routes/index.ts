import { Router, type IRouter } from "express";
import healthRouter from "./health";
import internshipRouter from "./internship";
import contactRouter from "./contact";
import hireRouter from "./hire";

const router: IRouter = Router();

router.use(healthRouter);
router.use(internshipRouter);
router.use(contactRouter);
router.use(hireRouter);

export default router;
