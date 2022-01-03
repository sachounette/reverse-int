module.exports = function reverse (n) {
n = Math.abs(n)  
let k = n
let p = n.toString()
let s = 0
for (let i = 0; i < p.length; i++) {
 k = Math.floor(n%10)
 n = n/10
 s = s+ k + ""
}
return s
}
