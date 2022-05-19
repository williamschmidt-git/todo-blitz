import { NextFunction, Request, Router, Response } from "express";
import TasksControllers from "../controllers/Tasks.controllers";

const router = Router();

const tasksControllers = new TasksControllers();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  await tasksControllers.getAll(req, res, next);
})

export default router;