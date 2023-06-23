// logical AND 
console.log(true && false) // all values have to be TRUE for expression to be TRUE
console.log(false && false) 

// logical "OR"
console.log(true || false) 
console.log(true || true) 
console.log(false || false) 

var ageIsMoreThanEighteen = true
var isUSCitizen = true
var eligibilityFordrivenLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('This cusomer is eligible for DL: ' + eligibilityFordrivenLicense)

var ageIsMoreThanEighteen = false
var isUSCitizen = true
var eligibilityFordrivenLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This cusomer is eligible for DL: ' + eligibilityFordrivenLicense)

// logical "NOT"

console.log(!true)
console.log(6 !== 10)

