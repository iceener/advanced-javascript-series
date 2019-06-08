var shadow = 1;
// window.shadow = 1;

function outer(arg1) {
  let shadow = 10;

  function inner(arg2) {
    console.log(arg1, arg2, shadow, window.shadow); // 1, 2, 10
  }
  
  inner(arg1 * 2);
}

outer(shadow);









