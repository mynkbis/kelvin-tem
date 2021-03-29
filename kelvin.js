const kelvin = 0;   // variable storing temp in kelvin 
const celsius = kelvin-273;  // conversion of temp into celsius
let Fahrenheit = celsius * (9/5) + 32; //conversion of temp into Fahrenheit
Fahrenheit = Math.floor(Fahrenheit);
console.log(`The temperature is ${celsius} C and ${Fahrenheit} F.`);
let Newton = celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`Temp in Newton is ${Newton}`)
