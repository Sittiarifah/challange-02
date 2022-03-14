function checkTypeNumber  (givenNumber) {
    if (givenNumber == undefined) {
        return 'ERROR: Bro where is the parameter?'
    } else if (typeof (givenNumber) !== 'number') {
        return ('Error: Invalid data type')
    } else if (givenNumber % 2 == 0) {
        return ('bilangan genap')
    } else {
        return ('bilangan ganjil')
    }
}


console.log(checkTypeNumber(30))

console.log(checkTypeNumber(3))

console.log(checkTypeNumber("3"))

console.log(checkTypeNumber({}))

console.log(checkTypeNumber([]))

console.log(checkTypeNumber())