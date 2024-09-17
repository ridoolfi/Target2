"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Fibonacci
const readline = require('node:readline');
const Fibonacci_1 = __importDefault(require("./Fibonacci"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Insira o número que você deseja verificar na sequência Fibonacci: ", (number) => {
    rl.question("Informe quantos números da sequência você deseja que seja verificado: ", (range) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(yield (0, Fibonacci_1.default)(number, range));
        return;
    }));
    return;
});
