import { NextFunction, Request, Response } from 'express';

export default (error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);

  return res.status(500).json({ message: 'Internal server error' });
};
