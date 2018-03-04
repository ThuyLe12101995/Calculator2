class Division {

    run (firstNumber, secondNumber){
        if ( secondNumber === 0 )
            throw " DivideByZero " ;
        return firstNumber / secondNumber;
    }
}

module.exports = Division;
