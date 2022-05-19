"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_model_1 = __importDefault(require("../models/index.model"));
class Tasks extends sequelize_1.Model {
}
exports.default = Tasks;
;
Tasks.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    task: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    taskStatus: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    sequelize: index_model_1.default,
    underscored: true,
    modelName: 'Tasks',
    timestamps: true,
});
//# sourceMappingURL=Tasks.model.js.map