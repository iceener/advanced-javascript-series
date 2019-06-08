globalExecutionContext = {
  activationObj: { // aka variable object
    argumentObj : { length:0 },
    counter: 10,
  },
  scopeChain: [
    'globalExecutionContext variable object'
  ],
  this: 'global object'
}

functionExecutionContext = {
  activationObj: { 
    argumentObj : { length:0 }, 
  },
  scopeChain: [
    'globalExecutionContext variable object', 
    'functionExecutionContext variable object'
  ],
  this: 'global object'
}
