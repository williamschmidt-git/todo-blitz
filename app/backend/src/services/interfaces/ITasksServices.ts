import Tasks from "@models/Tasks.model"
import { Pool } from "mysql2"

export default interface ITasksServices {
  getAll: () => Promise<ITasksServicesResponse | ITasksServicesResponseFailure>
}

export interface ITasksServicesResponse {
  code: number,
  data: Tasks[]
}

export interface ITasksServicesResponseFailure {
  code: number,
  data: {
    message: string,
  },
}
