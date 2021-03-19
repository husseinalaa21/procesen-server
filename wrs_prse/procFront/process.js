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