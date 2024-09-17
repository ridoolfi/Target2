import readline from "node:readline";
import checker from "./checker";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Insira a string a ser analisada: ", str => {
    let result: {
        status: boolean,
        string: string,
        quantidade: number} = checker(str)
    if(result.status === false){
        console.log(`A string ${result.string} não possui letra A em nenhuma posição`);
    }else{
        console.log(`A string ${result.string} possui ${result.quantidade} letra/s "A"`);
    }
});