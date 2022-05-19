import { NextFunction, Request, Response } from "express";

export default interface ITaskController {
  getAll: (req: Request, res: Response, next: NextFunction) => Promise<Response>
}

export interface IBodyRequest {
  task: string,
  taskStatus: string,
}