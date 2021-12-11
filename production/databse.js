"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost/data', {})
    .then(db => console.log('Database is running on server!..'))
    .catch(error => console.log('error connecting database'));
//# sourceMappingURL=databse.js.map