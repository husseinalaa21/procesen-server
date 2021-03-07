function execuateJs(koc) {
    const { join } = require('path');
    const { readFileSync } = require('fs');
    const zcip = readFileSync(join(__dirname, '../cklom/jsonDataUsersX.json'), 'utf8');
    var zcp = JSON.parse(zcip);
    const zxip = readFileSync(join(__dirname, '../cklom/dataSetCure.json'), 'utf8');
    var zxp = JSON.parse(zxip);

    if (koc in zxp) {
        var __idc = zxp[koc].us
        var __ipc = zxp[koc].nu
        var __cv = zxp[koc].ip
        if (__idc in zcp) {
            if (zcp[__idc].pa === __ipc) {
                if (zcp[__idc].iib === __cv) {
                    return [true, zcp[__idc].idReq, zcp[__idc].nuy]
                } else {
                    return false
                }
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}

module.exports = {
    execuateJs
}