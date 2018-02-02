const Operators = require("./Operators");

function Calculator() {
    this.operators={
        '+': new Operators.Add(),
        '-': new Operators.Sub,
        '*': new Operators.Mul(),
        '/': new Operators.Div()
    };
    this.calculate = function (operator,firstNumber,secondNumber) {
        return this.operators[operator].run(firstNumber,secondNumber);
    }
}




module.exports=Calculator;