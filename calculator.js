const Operators = require("./operators");

function Calculator() {
    this.operators = {
        '+': new Operators.Add(),
        '-': new Operators.Sub,
        '*': new Operators.Mul(),
        '/': new Operators.Div()
    };

    this.calculate = function (operator, firstNumber, secondNumber) {
        return this.operators[operator].run(firstNumber, secondNumber);
    }

    this.addOperator = function (operatorName, operator) {
        this.operators[operatorName] = operator;
    }
}

module.exports = Calculator;
