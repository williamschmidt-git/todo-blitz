import Tasks from '../database/models/Tasks.model';
import ITasksServices, { ITasksServicesResponse, ITasksServicesResponseFailure } from "./interfaces/ITasksServices";

const errorResponse: ITasksServicesResponseFailure = {
  code: 400,
  data: {
    message: 'There isnt any tasks'
  }
}

export class TasksServices implements ITasksServices {
  private _model;

  constructor() {
    this._model = Tasks;
  }
  
  public getAll = async (): Promise<ITasksServicesResponse | ITasksServicesResponseFailure> => {
    const tasks: Tasks[] | null = await this._model.findAll();

    if(!tasks || tasks.length === 0) return errorResponse;

    return {
      code: 200,
      data: tasks,
    };
  };
}