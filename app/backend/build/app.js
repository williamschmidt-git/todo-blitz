"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const error_1 = __importDefault(require("./middlewares/error"));
const app = (0, express_1.default)();
app.use('/', index_routes_1.default);
app.use(error_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map