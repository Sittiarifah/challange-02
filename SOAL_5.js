function getSplitName(personName) {

    if (typeof (personName) == 'string') {
        const fullNameSplit = personName.split(" ");
        const nama = {
            firstName: fullNameSplit[0],
        }

        if (fullNameSplit.length === 1) {
            dataName = {
                middleName: null,
                lastName: null,
            }

        }

        else if (fullNameSplit.length === 2) {
            dataName = {
                middleName: null,
                lastName: fullNameSplit[1],
            }

        }

        else if (fullNameSplit.length === 3) {
            dataName = {
                firstName: fullNameSplit[0],
                middleName: fullNameSplit[1],
                lastName: fullNameSplit[2],
            }
        }

        else {
            return console.log('ERROR: This function is only for 3 characters name')
        }

        fullName = {
            ...nama,
            ...dataName
        }
        return console.log(fullName)
    }

    else {
        return console.log('ERROR: (Teman-teman jelasin ini eror kenapa)')
    }
}

console.log(getSplitName('Aldi Denial Pranata'))

console.log(getSplitName('Sitti Arifah'))

console.log(getSplitName('Aurora'))

console.log(getSplitName('Aurora Aureliya Sukma Darma'))

console.log(getSplitName(0))
