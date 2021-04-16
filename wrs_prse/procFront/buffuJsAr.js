// JUST TO SEND DATA TO USERS
var buff = require('../process/buffar.js')
var buffD = buff.bofpof(true)
function buffuJs(x, y) {
    if (x === true) {
        // SEND DUFULT DATA TO BROWSER 
        var nu = []
        buffD.forEach(num => {
            if (num.exdz !== false) {
                nu.push(num)
            } else {
                nu.push({ exdz: false, nam: num.nam, ex: num.ex })
            }
        })
        return nu
    } else {
        // SEND DATA A (FROM SYSTEM [NORMAL]) OR B ( FROM SYSTEM AND CLINT [PLUS] )
        if (y === true) {
            // MEAN (A)
            var basArr = []
            buffD.forEach(num => {
                if (num.exdz !== false) {
                    basArr.push(num)
                }
            })
            return basArr
        } else {
            // MEAN (B)
            var edArr = []
            buffD.forEach(num => {
                if (num.exdz === false) {
                    edArr.push({ ex: num.ex, eo: num.eo , xvy : true })
                }
            })
            return edArr
        }
    }
}

module.exports = {
    buffuJs
}