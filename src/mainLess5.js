// 
let car1 = 'Renault';
let car2 = 'KIA';
const quantity1 = 5;
const quantity2 = 3;
let availabilityInStock = true;

console.log('++++Addition++++++');
//srt+bool
console.log(car1 + availabilityInStock);
//str+number
console.log(car2 + quantity2);
//number+bool
console.log(quantity1 + availabilityInStock);


console.log('***** Multiplication*******');
//srt*bool
console.log(car1 * availabilityInStock);
//str*number
console.log(car2 * quantity2);
//number*bool
console.log(quantity1 * availabilityInStock);


console.log('***** Devision*******');
//srt*bool
console.log(car1 / availabilityInStock);
//str*number
console.log(car2 / quantity2);
//number*bool
console.log(quantity1 / availabilityInStock);

console.log('***** Conversion*******');
//str->number
const x = '8';
console.log(Number(x));
//number->str
console.log(String(x));
//number->bool
console.log(Boolean(x));