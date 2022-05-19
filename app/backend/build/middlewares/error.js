"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (error, _req, res, _next) => {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
};
//# sourceMappingURL=error.js.map