function outer() {
  const outsideScopeVar = 'Get out!';

  function inner() {
    debugger;
    return outsideScopeVar;
  }

  return inner; 
}

const closure = outer(); /*?*/
console.log(closure());