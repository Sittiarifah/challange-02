function checkEmail(email) {
    var re = /\S+@\S+\.\S+/
    var rel = /\S+@\S+/

    if (re.test(email) == true) {
        return 'VALID'
    } else if (rel.test(email) == true) {
        return ('INVALID')
    } else {
        return ('ERROR')
    }
}

console.log(checkEmail('arfharifah@gmail.co.id'))

console.log(checkEmail('arfharifah@gmail.com'))

console.log(checkEmail('arifah@gmail'))

console.log(checkEmail('arifah'))

console.log(checkEmail())

console.log(checkEmail(3322))