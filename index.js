
function produceDrivingRange(range) {
  return function twentyBlockRange(a, b) {
    var distant = (parseInt(b, 10) - parseInt(a, 10)) - range
    return distant > 0 ? `${distant} blocks out of range` : `within range by ${Math.abs(distant)}`
  }
}

function produceTipCalculator(tip) {
  return function tenPercentTip(amount) {
    return amount * tip;
  }
}

function createDriver() {
  let driverId = 0;
   return class {
     constructor(name) {
       this.name = name
       this.id = ++driverId
     }
   };
}
