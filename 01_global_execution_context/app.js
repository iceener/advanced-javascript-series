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


// Global Execution Context - Creation
globalExecutionContext = {
  activationObj: {
    argumentObj : {
      length:0
    },
    temp: 'uninitialized',
    old: undefined,
    first: 'Pointer to the function definition'
  },
  scopeChain: ['global execution context variable object'],
  this: 'global object'
}

// Global Execution Context - Execution
globalExecutionContext = {
  activationObj: {
    argumentObj : {
      length:0
    },
    temp: 10,
    old: 5,
    first: 'Pointer to the function definition'
  },
  scopeChain: ['global execution context variable object'],
  this: 'global object'
}

