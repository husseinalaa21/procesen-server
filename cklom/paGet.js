function c_pT(n, x, y, realIp) {
    const { readFileSync } = require('fs');
    const { join } = require('path');
    const dhs = readFileSync(join(__dirname, './jsonDataUsersX.json'), 'utf8');
    var zaw = JSON.parse(dhs);

    try {
        if (zaw[n].idReq == y) {
            if (realIp == undefined || realIp == null || realIp == "") {
                return false
            } else {
                var d = new Date();
                var dat = d.getFullYear() + '_' + d.getMonth() + '_' + d.getDay() + '_' + d.getHours()
                const { writeFile } = require('fs');
                const { join } = require('path');
                zaw[n].idReq = x
                zaw[n].da = dat
                zaw[n].iib = realIp
                var tpass = zaw[n].pa
                writeFile(join(__dirname, './jsonDataUsersX.json'), JSON.stringify(zaw), function (err) {
                    if (err) {
                        return false
                    }
                });
                var obj = zaw[n]
                if (obj.hasOwnProperty('coLog') == true) {
                    var cUrl = zaw[n].coLog
                    return [true, cUrl, { ip: realIp, nam: n, tp: tpass } , zaw]
                } else {
                    return [true, true, { ip: realIp, nam: n, tp: tpass } , zaw]
                }
            }
        } else {
            return false
        }
    } catch (err) {
        return false
    }

}

module.exports = {
    c_pT
}