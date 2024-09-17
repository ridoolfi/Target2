"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checker;
function checker(str) {
    let hasA = false;
    let qtd = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "A") {
            hasA = true;
            qtd++;
        }
        ;
    }
    ;
    return {
        string: str,
        possuiA: hasA,
        quantidade: qtd
    };
}
;
