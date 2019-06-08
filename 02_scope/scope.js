// global scope
const total = 10; 

function nested() { // function scope
  return total;
}

console.log(nested());