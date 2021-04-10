function sen(tee) {
    var tezx = tee.xs,
        ttezx = tee.xs,
        arA = tee.arA,
        arB = tee.arB,
        arBNew = tee.arBNew,
        isTrs = tee.trs;
    //colorix = tee.colo;
    // FROME SYSTEM
    var sysA = tee.sysDatA,
        basB = tee.sysDatB;
    // End
    if (arBNew.length > 0) {
        arBNew.forEach(b => {
            basB.push(b)
        })
    }
    // CHECKS SECURITE ARRAY *A + *B
    if (sysA.length !== arA && basB.length !== arB.length) {
        return false
    }
    // START PROCESSING (A*1)
    for (var a = 0; a < arA.length; a++) {
        const na = a
        if (arA[na] === true) {
            let vdv = new RegExp(sysA[na].exdz, 'g');
            tezx = tezx.replace(vdv, "")
            ttezx = ttezx.replace(vdv, "")
        }
    }
    // IF USER WANT DELETED ELSE
    if (isTrs === true) {
        var newSwp = []
        for (var eo = 0; eo < tezx.length; eo++) {
            let isExs = false
            sysA.forEach(tb => {
                if (isExs === false) {
                    let asw = new RegExp(tb.exdz, 'g');
                    if (asw.test(tezx[eo])) {
                        newSwp.push(tezx[eo])
                        isExs = true
                    }
                }
            })
        }
        tezx = newSwp.join('');
        ttezx = newSwp.join('');
    }
    // START PROCESSING (B*2)
    for (var s = 0; s < arB.length; s++) {
        const rn = s
        if (basB[rn].ex === true && arB[rn] === true) {
            let reLe = new RegExp(basB[rn].eo, 'g')
            tezx = tezx.replace(reLe, "")
            ttezx = ttezx.replace(reLe, "")
            // class="deWor"
        } else if (basB[rn].ex === false && arB[rn] === true) {
            for (var wd = 0; wd < basB[rn].eo.length; wd++) {
                const wr = wd
                let wx = basB[rn].eo[wr]
                let relle = new RegExp(wx[0], 'g')
                if ((relle.test(wx[0])) === true) {
                    tezx = tezx.replace(relle, wx[1])
                    ttezx = ttezx.replace(relle, wx[1])
                    // class="olWor" 
                    // class="oneWor"
                }
            }
        }
    }
    
    ttezx = ttezx.replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;")
    /*let cw_wo = new RegExp('-11EN--TO29-','g')
    let to29 = new RegExp('-TO29-','g')
    let en11 = new RegExp('-11EN-','g')
    let text_wo = ttezx.replace(cw_wo,"")
    ttezx = text_wo.replace(to29,'<span class="deWor">').replace(en11,'</span>')*/
    // PREPERED DATA TO SEND
    return [tezx, ttezx]
}
module.exports = {
    sen
}