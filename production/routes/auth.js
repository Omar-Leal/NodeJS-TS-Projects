"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRoute = (0, express_1.Router)();
authRoute.get('/', (req, res) => {
    res.send('auth route created');
});
exports.default = authRoute;
//# sourceMappingURL=auth.js.map