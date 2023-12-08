"use strict";
var elementNum1 = document.getElementById('num1');
var elementNum2 = document.getElementById('num2');
var btnElement = document.querySelector('button');
const numResult = [];
const stringResult = [];
function add(n1, n2) {
    return n1 + n2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
btnElement === null || btnElement === void 0 ? void 0 : btnElement.addEventListener('click', () => {
    var n1 = elementNum1.value;
    var n2 = elementNum2.value;
    var result1 = add(+n1, +n2);
    numResult.push(result1);
    var result2 = add(n1, n2);
    stringResult.push(result2);
    console.log(result1);
    console.log(result2);
    printResult({ val: result1, timestamp: new Date() });
    console.log(numResult, stringResult);
});
