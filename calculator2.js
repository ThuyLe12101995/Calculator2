const operators= require("./operators");


class Calculator {

    constructor() {
        this.operators = {
            "+":new operators.Add(),
            '-':new operators.Sub(),
            '*':new operators.Mul(),
            '/':new operators.Div()
        };
    }

    calculate (operator, firstNumber, secondNumber) {
        return this.operators[operator].run(firstNumber, secondNumber);
    }
}

module.exports = Calculator;
