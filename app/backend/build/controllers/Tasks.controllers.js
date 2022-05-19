"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tasks_services_1 = require("../services/Tasks.services");
class TasksControllers {
    constructor() {
        this.getAll = async (req, res, _next) => {
            const { code, data } = await this._services.getAll();
            return res.status(code).json(data);
        };
        this._services = new Tasks_services_1.TasksServices();
    }
    ;
}
exports.default = TasksControllers;
//# sourceMappingURL=Tasks.controllers.js.map