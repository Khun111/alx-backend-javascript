#!/usr/bin/node
function calculateNumber(a, b) {
 const sum = Math.round(a) + Math.round(b) 
 console.log(sum)
 return sum
}

calculateNumber(-3.9, 4.5)

module.exports = calculateNumber;
