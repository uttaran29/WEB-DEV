function faultyCalculator(num1, num2, operand){
    let result;
    if(Math.random() < 0.1){
        if(operand === "+"){
            result = num1 - num2;
        }
        else if(operand === "-"){
            result = num1 / num2;
        }
        else if(operand === "*"){
            result = num1 + num2;
        }
        else if(operand ===  "/"){
            result = num1 ** num2;
        }
        else if(operand === "**"){
            result = num1 * num2;
        }
        else{
            console.log("Invalid Operand");
        }
    }
    else{
        if(operand === "+"){
            result = num1 + num2;
        }
        else if(operand === "-"){
            result = num1 - num2;
        }
        else if(operand === "*"){
            result = num1 * num2;
        }
        else if(operand ===  "/"){
            result = num1 / num2;
        }
        else if(operand === "**"){
            result = num1 ** num2;
        }
        else{
            console.log("Invalid Operand");
        }
    }

    return result;
}

console.log(faultyCalculator(2,5,'+'));