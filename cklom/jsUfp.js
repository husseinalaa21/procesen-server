var uspr = { "aala0002119#niessuh": { "nuy": "Hussein Alaa", "pa": "2000911Hussein", "idReq": "huuusss12121fsdf#@$2312sdas", "da": "", "iib": "", "coLog": "" } }

function uofpm(x, y) {
    try {
        if (x === "reqUspr") {
            var nu = y.nu
            var ps = y.ps

            var xSimp = ['£!', '#', '!$', '$', '%', '&', '$@', '%#', '%&', '#$', '!#', '&£']

            var mxn = Math.floor(Math.random() * 20);
            var xnum = mxn + 9000

            var letBt = nu.split("");
            var lotBt = letBt.reverse();
            var lctBt = lotBt.join("");
            try {
                if (uspr[lctBt]) {
                    var xNum = Math.floor(Math.random() * (xnum - mxn)) + mxn;
                    var zcz = () => {
                        return Math.floor(Math.random() * 500);
                    }
                    var zxver = () => {
                        var rz = []
                        for (var i = 0; i < 6; i++) {
                            var xz = Math.floor(Math.random() * 10);
                            var nzuz = zcz()
                            rz.push(nzuz + xSimp[xz])
                        }
                        var wSim = ['#', '', '', '', '']
                        var xz = Math.floor(Math.random() * 5);
                        var tSim = wSim[xz]
                        var fc = tSim + rz.join("") + xNum
                        return fc
                    }
                    if (uspr[lctBt].pa == ps) {
                        var iiy = uspr[lctBt].idReq
                        return [true, lctBt, zxver(), iiy]
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            } catch (err) {
                return false
            }
        } else if (x === "iopUs") {
            var tNeId = y.tNeId
            var tLodId = y.tLodId
            var realIp = y.realIp
            var nus = y.nus
            if (uspr[nus].idReq == tLodId) {
                if (realIp == undefined || realIp == null || realIp == "") {
                    return false
                } else {
                    var d = new Date();
                    var dat = d.getFullYear() + '' + d.getMonth() + '' + d.getDay() + '' + d.getHours()
                    uspr[nus].idReq = tNeId
                    uspr[nus].da = dat
                    uspr[nus].iib = realIp
                    return [true, { ip: realIp, nam: nus }]
                }
            } else {
                return false
            }
        } else {
            return false
        }
    } catch (err) {
        return false
    }
}

function tPoData(x, y) {
    try {
        if (x === "_pos_ty12--#husUsUnIoJ") {
            var _sJsSoLi = require('./dataSetCure.js')
            var dco = _sJsSoLi.coko("_ops_jHuss_pow1M5%sd")
            var npc = y.nam
            var ibpc = uspr[npc].iib
            var urCo = uspr[npc].coLog

            var xSimp = ['#', '$', '!', '£']
            var xWord = ['A', 'a', 'C', 'B', 'b', 'c', 'X', 'x', 'S', 'W', 'q', 'Q', 'I', 'Z', 'z', 'L', 'l', 'J', 'H', 'F', 'f', 'E', 'R', 'r', 'T', 'E', 'p', 'P', 'D']
            function runSWar(x) {
                return Math.floor(Math.random() * x);
            }
            var crCok = () => {
                var xNum = Math.floor(Math.random() * (10 - 10)) + 10;
                var xNumEnd = Math.floor(Math.random() * (100 - 10000)) + 10000;
                var ursCo = []
                for (var t = 0; t < xNum; t++) {
                    var word = xWord[runSWar(26)]
                    var smp = xSimp[runSWar(3)]
                    var num = Math.floor(Math.random() * t);
                    var cou = word + smp + num
                    ursCo.push(cou)
                }
                var btc = ursCo.join("") + xNumEnd
                return btc
            }
            const tcrCok = crCok()
            if (tcrCok.length > 8) {
                if (urCo in dco) {
                    // delete old one
                    delete dco[urCo]
                    dco[tcrCok] = { "ip": ibpc, "us": npc, "da": uspr[npc].da , "id" : uspr[npc].idReq}
                } else {
                    // is new
                    dco[tcrCok] = { "ip": ibpc, "us": npc, "da": uspr[npc].da , "id" : uspr[npc].idReq}
                }
                var huCokuRs = _sJsSoLi.coko("_AStartVeer322@#433534&sdfd" , dco)
                if(huCokuRs == true){
                    uspr[npc].coLog = tcrCok
                    return [true, tcrCok]
                } else {
                    return false
                }
            } else {
            }
        } else {
            return false
        }
    } catch (err) {
        return false
    }
}

function cecData(x , y) {
    try {
        if(x === "_poi122#XCOK7000"){
            var us = y.us
            var ip = y.ip
            var da = y.da
            var id = y.id
            var cv = y.cv

            if (us in uspr) {
                if (uspr[us].coLog === cv && uspr[us].idReq === id && uspr[us].iib === ip && uspr[us].da && da) {
                    // send information this user !
                    return [true, uspr[us].nuy , "some information"]
                } else {
                    return false
                }
            } else {
                return false
            }

        } else {
            return false
        }
    } catch (err) {

    }
    console.log(uspr)
}

module.exports = {
    uofpm,
    tPoData,
    cecData
}