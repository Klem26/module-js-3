
function addOverNum(value,...args) {
  let total = 0;

  for (const arg of args) {
    if( arg > value)
    total += arg;
  }

  return total;

}
console.log(addOverNum(50, 15, 27))
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))