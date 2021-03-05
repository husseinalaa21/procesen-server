function c_pT(n, x, y, realIp, u) {
    var zaw = JSON.parse(u);
    try {
        if (zaw[n].idReq == y) {
            if (realIp == undefined || realIp == null || realIp == "") {
                return false
            } else {
                var d = new Date();
                var dat = d.getFullYear() +'_'+ d.getMonth() +'_'+ d.getDay() +'_'+ d.getHours()
                const { writeFile } = require('fs');
                const { join } = require('path');
                zaw[n].idReq = x
                zaw[n].da = dat
                zaw[n].iib = realIp
                writeFile(join(__dirname, './jsonDataUsersX.json'), JSON.stringify(zaw), function (err) {
                    if (err) {
                        return false
                    }
                });
                return true
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