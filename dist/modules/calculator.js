"use strict";
var Calculator;
(function (Calculator) {
    class BasicCalculator {
        add(a, b) {
            return a + b;
        }
    }
    Calculator.BasicCalculator = BasicCalculator;
})(Calculator || (Calculator = {}));
