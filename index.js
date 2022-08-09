function reversenumber(n)
{
 n = n + "";
 return n.split("").reverse().join("");
}

const n= prompt('enter a number');
const i = reversenumber(n);
console.log(i);