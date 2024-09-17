"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_readline_1 = __importDefault(require("node:readline"));
const checker_1 = __importDefault(require("./checker"));
const rl = node_readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Insira a string a ser analisada", str => {
    (0, checker_1.default)(str);
});
