const local = require("./welcomeModule")
const local2 = require('./calculationModule')

// console.log(local.seyHello())
// console.log(local.curTime)
// console.log(local.companyName)

console.log(local2.age());
console.log(local2.sum());

let ans = local2.mul(4, 8);
console.log(ans);

