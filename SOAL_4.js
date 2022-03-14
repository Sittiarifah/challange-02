function isValidPassword(email) {
    if (email.length >= 8 && email.match(/[0-9]/g) && email.match(/[a-z]/g) && email.match(/[A-Z]/g)) {
        return 'true'
    } else if (typeof (email) !== 'string') {
        return 'ERROR'
    } else {
        return 'false'
    }
}



console.log(isValidPassword('Meong2021'))

console.log(isValidPassword('meong2021'))

console.log(isValidPassword('@eong'))

console.log(isValidPassword('Meong2'))

console.log(isValidPassword(0))

//console.log(isValidPassword())