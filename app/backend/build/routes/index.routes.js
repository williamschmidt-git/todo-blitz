"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Tasks_controllers_1 = __importDefault(require("../controllers/Tasks.controllers"));
const router = (0, express_1.Router)();
const tasksControllers = new Tasks_controllers_1.default();
router.get('/', async (req, res, next) => {
    await tasksControllers.getAll(req, res, next);
});
exports.default = router;
//# sourceMappingURL=index.routes.js.map