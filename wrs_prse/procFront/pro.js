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
                var stro = []
                const wr = wd
                let wx = basB[rn].eo[wr]
                let relle = new RegExp(wx[0], 'g')
                let rella = new RegExp(wx[1], 'g')
                if ((relle.test(tezx)) === true) {
                    tezx = tezx.replace(relle, "E" + rn + wr + "D")
                    ttezx = ttezx.replace(relle, "E" + rn + wr + "D")
                    stro.push({ v: "E" + rn + wr + "D", n: wx[1], ol: wx[0] })
                    // class="olWor" 
                    // class="oneWor"
                } if ((rella.test(tezx)) === true) {
                    tezx = tezx.replace(rella, "A" + rn + wr + "D")
                    ttezx = ttezx.replace(rella, "A" + rn + wr + "D")
                    stro.push({ v: "A" + rn + wr + "D", n: wx[0], ol: wx[1] })
                }
                if (basB[rn].eo.length - 1 === wd) {
                    stro.forEach(re => {
                        let vx = new RegExp(re.v, 'g')
                        tezx = tezx.replace(vx, re.n)
                        ttezx = ttezx.replace(vx, re.n + "*#*" + re.ol + "#*#")
                    })
                }
            }
        } else if (basB[rn].ex === false && arB[rn] === true && basB[rn].xvy === false) {
            // mean just change x to y (one way)
            for (var wc = 0; wc < basB[rn].eo.length; wc++) {
                let wx = basB[rn].eo[wc]
                let relle = new RegExp(wx[0], 'g')
                if ((relle.test(tezx)) === true) {
                    tezx = tezx.replace(relle, wx[1])
                    ttezx = ttezx.replace(relle, wx[1] + "*#*" + wx[0] + "#*#")
                }
            }
        }
    }
    // PREPERED DATA TO SEND
    return [tezx, ttezx]
}

module.exports = {
    sen
}