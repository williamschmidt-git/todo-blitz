import { TasksServices } from '../services/Tasks.services';
import { NextFunction, Request, Response } from "express";
import ITaskController from "./interfaces/ITaskController";

export default class TasksControllers implements ITaskController {
  private _services: TasksServices;

  constructor() {
    this._services = new TasksServices();
  };
  
  public getAll = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const { code, data } = await this._services.getAll();
    return res.status(code).json(data);
  }
}