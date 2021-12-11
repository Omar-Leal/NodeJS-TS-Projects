"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
//*** Setting server (ports) */
app.set('port', 4000);
/** routes to app */
app.use(auth_1.default);
//** middleware  */
app.use((0, morgan_1.default)('dev'));
exports.default = app;
//# sourceMappingURL=app.js.map