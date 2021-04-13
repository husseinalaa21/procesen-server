function execuateJs(koc) {
    var jBasicMain = require('../cklom/jsUfp.js')
    var jCok = require('../cklom/dataSetCure.js')
    var zcok = jCok.coko("youVc_eCoksWSweb1000", koc)
    if (zcok === false) {
        return false
    } else {
        if (zcok.case === true) {
            var obCok = zcok.data
            var su = obCok.us
            var di = obCok.id
            var pi = obCok.ip
            var finCase = jBasicMain.cecData("_poi122#XCOK7000", {us: su, id: di, ip : pi , cv : koc})
            if(finCase === false){
                return false
            } else {
                var infor = finCase[1]
                return {case : finCase[0] ,num : infor.n,infoLog : infor.his, info : {us: su, id: di, ip : pi}}
            }
        } else {
            return false
        }
    }
}

module.exports = {
    execuateJs
}