# procsent_server
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
    if (sysA.length !== arA.length && basB.length !== arB.length) {
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
    }
    // START PROCESSING (B*2)
    for (var s = 0; s < arB.length; s++) {
        const rn = s
        if (basB[rn].ex === true && arB[rn] === true) {
            let reLe = new RegExp(basB[rn].eo, 'g')
            // ## mean staer Or <span> and ### mean end Or </span>
            tezx = tezx.replace(reLe, "")
            ttezx = ttezx.replace(reLe, "*#*" + basB[rn].eo + "#*#")
            // class="deWor"
        } else if (basB[rn].ex === false && arB[rn] === true && basB[rn].xvy === true) {
            // mean change x to y and change y to x (tow way)
            for (var wd = 0; wd < basB[rn].eo.length; wd++) {
                const wr = wd
                let wx = basB[rn].eo[wr]
                for(var age = 0; age < wx.length ;age++){
                    // class="olWor" 
                    // class="oneWor"
                    let stro = []
                    let relle = new RegExp(wx[age], 'g')
                    tezx = tezx.replace(relle, "E" + rn + wr + "D")
                    ttezx = ttezx.replace(relle, "E" + rn + wr + "D")
                    stro.push({ v: "E" + rn + wr + "D", n: wx[age], ol: wx[0] })
                    if (wx.length - 1 === age) {
                        stro.forEach(re => {
                            let vx = new RegExp(re.v, 'g')
                            tezx = tezx.replace(vx, re.n)
                            ttezx = ttezx.replace(vx, re.n + "*#*" + re.ol + "#*#")
                        })
                    }
                }
            }
        } else if (basB[rn].ex === false && arB[rn] === true && basB[rn].xvy === false) {
            // mean just change x to y (one way)
            let wx = basB[rn].eo[0]
            let relle = new RegExp(wx[0], 'g')
            if ((relle.test(tezx)) === true) {
                tezx = tezx.replace(relle, wx[1])
                ttezx = ttezx.replace(relle, wx[1] + "*#*" + wx[0] + "#*#")
            }
        }
    }
    // PREPERED DATA TO SEND
    return [tezx, ttezx]
}

module.exports = {
    sen
}