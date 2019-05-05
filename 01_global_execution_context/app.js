const temp = 10; // global context
var old = 5; // global context
function first() { 
  console.log('Start first!');
  
  function second() {
    console.log('Start second!');
  }

  second(); // second functional context
}
first(); // first functional context

