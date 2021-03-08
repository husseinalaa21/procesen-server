var numbersEn = /0|1|2|3|4|5|6|7|8|9/g
var numbersAr = /٠|١|٢|٣|٤|٥|٦|٧|٨|٩/g
var charEn = /[a]/g
var charAr = /[ar]/g

var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function removeNumbers(xs, s) {
    if (xs === "ar") {
        return s
    } else if (xs === "en") {
        return s
    } else {
        return s
    }
}

function psc(x, s) {
    try {
        var newData = s
        if (x.numAr === true) {
            newData = removeNumbers("ar", s)
        } else if (x.numEn === true) {
            newData = removeNumbers("en", s)
        }
        if (x.rspace === true) {
            if (s.includes(' ')) {
                newData = s.replace(/ /g, "")
            }
        }
        /*if (x.punctuation === true) {

        }*/
        return newData
    } catch {
        return "err"
    }
}

module.exports = {
    psc
}