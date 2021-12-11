"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./utils/logger"));
const app_1 = __importDefault(require("./app"));
require("./databse");
const port = app_1.default.get('port');
const listen = app_1.default.listen(port, () => {
    logger_1.default.info(` Server version logs...`);
});
function initServer() {
    listen;
    console.log(`>>>> Server running on port ${port}! <<<<`);
}
initServer();
//# sourceMappingURL=index.js.map