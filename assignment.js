//---------------------------------------- Problem No :1

function kilometerToMeter(Km) {
    var M = Km * 1000;
    return M;
}
var resulFor2 = kilometerToMeter(2);
console.log(resulFor2);
var resultFor10 = kilometerToMeter(10);
console.log(resultFor10);

// -------------------------------------Problem NO : 2
// function budgetCalculator(clock , phone, laptop){
//     var result = clock * 50 + phone*100 +laptop*500 ;
//     return result;
// }
// var totalBudgetNeed = budgetCalculator(5,5,5);
// console.log(totalBudgetNeed);



// function factorial(n) {
//     if (n ==
//          0) {
//         return 1;
//     } 
//     else {
//         return n * factorial(n - 1);
//     }
// }
// var result = factorial(5);
// console.log(result);



function fibonacci(n) {
    if (n <=10) {
        return n*100;
    }
    else if (n <=20) {
        return n*100/20;
    } else {
        return n*50;
    }
}
var result = fibonacci(21);
console.log(result);