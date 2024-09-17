export default function checker(str: string){
    console.log("aqui")
    let hasA: boolean = false
    let qtd: number = 0
    for(let i: number = 0; i < str.length; i++){
        if(str[i] === "a" || str[i] === "A"){
            hasA = true;
            qtd++;
        };
        
    };
    return {
        status: hasA,
        string: str,
        quantidade: qtd
    };
};