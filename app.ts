var elementNum1 = document.getElementById('num1') as HTMLInputElement;
var elementNum2 = document.getElementById('num2') as HTMLInputElement;
var btnElement = document.querySelector('button');

const numResult: number[] = [];
const stringResult: string[] = [];

function add(n1:any,n2:any){
    return n1 + n2
}

function printResult(resultObj:{val: number, timestamp:Date}){
    console.log(resultObj.val)
}

btnElement?.addEventListener('click', () =>{
    var n1 = elementNum1.value;
    var n2 = elementNum2.value;
    var result1 = add(+n1,+n2);
    numResult.push(result1 as number)
    var result2 = add(n1,n2);
    stringResult.push(result2 as string)
    console.log(result1) 
    //console.log(result2)
    printResult({val: result1 as number, timestamp: new Date()});
    console.log(numResult,stringResult)

})