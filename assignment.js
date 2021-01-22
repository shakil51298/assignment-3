// https://github.com/shakil51298/assignment-3


//----------------------------------------------------------- Problem No :1

function kilometerToMeter(Km) {
    var M = Km * 1000;
    return M;
}
var resulFor2 = kilometerToMeter(2);
console.log(resulFor2);
var resultFor10 = kilometerToMeter(10);
console.log(resultFor10);

// --------------------------------------------------------------Problem NO : 2
function budgetCalculator(clock, phone, laptop) {
    var result = clock * 50 + phone * 100 + laptop * 500;
    return result;
}
var totalBudgetNeed = budgetCalculator(5, 5, 5);
console.log(totalBudgetNeed);

// ---------------------------------------------------------Problem No: 3 hotelCost
function hotelCost(days) {
    if (days <= 10) {
        return days * 100;
    }
    else if (days <= 20) {
        var for10Days = 10 * 100;
        var left = days - 10;
        var for10To20Days = left * 80;
        total = for10Days + for10To20Days;
        return total;
    }
    else {
        var for10Days = 10 * 100;
        var for10To20Days = 10 * 80;
        var left = days - 20;
        var forMoreThen20Days = left * 50;
        total = for10Days + for10To20Days + forMoreThen20Days;
        return total;
    }
}
var totalCost = hotelCost(71);
console.log(totalCost);



//-----------------------------------------------------problem no: 04 megaFriend

function megaFriend() {
    var friends = arguments[0];
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i].length > friends.length) {
            friends = arguments[i];
        }
    }
    return friends;
}
var result = megaFriend('Md shakil', 'Md azad', 'Md raklib', 'Thuhin', 'iqbal');
console.log(result);