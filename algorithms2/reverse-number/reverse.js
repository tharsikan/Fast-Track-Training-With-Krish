let number = 124530;
let reverse = 0;
do {
    reverse = reverse*10 + number%10;
    number = Math.floor(number/ 10);
}while(number > 0);
console.log(reverse);