let numbers = [10, -3, 5, -7, 0, 8, -1, 4];


let positiveNumbers = numbers.filter(function(num) {
    return num > 0;
});


let sumOfPositive = positiveNumbers.reduce(function(total, current) {
    return total + current;
}, 0);

console.log("Ֆիլտրված զանգվածը:", positiveNumbers); 
console.log("Դրական թվերի գումարը:", sumOfPositive); 
