"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksServices = void 0;
const Tasks_model_1 = __importDefault(require("../database/models/Tasks.model"));
const errorResponse = {
    code: 400,
    data: {
        message: 'There isnt any tasks'
    }
};
class TasksServices {
    constructor() {
        this.getAll = async () => {
            const tasks = await this._model.findAll();
            if (!tasks || tasks.length === 0)
                return errorResponse;
            return {
                code: 200,
                data: tasks,
            };
        };
        this._model = Tasks_model_1.default;
    }
}
exports.TasksServices = TasksServices;
//# sourceMappingURL=Tasks.services.js.map