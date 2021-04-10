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
    //var tusDus = [];
    // START PROCESSING (B*2)
    for (var s = 0; s < arB.length; s++) {
        const rn = s
        if (basB[rn].ex === true && arB[rn] === true) {
            let reLe = new RegExp(basB[rn].eo, 'g')
            tezx = tezx.replace(reLe, "")
            // COLOR TO FONT 
            ttezx = ttezx.replace(reLe, '')
            //tusDus.push({ n: 'ID!291'+s+'!S', v: '<span class="deWor">' + basB[rn].eo + '</span>' })
            //colorix ? ttezx = ttezx.replace(reLe, 'ID!291'+s+'!S') : ttezx = ttezx.replace(reLe, '')
        } else if (basB[rn].ex === false && arB[rn] === true) {
            for (var wd = 0; wd < basB[rn].eo.length; wd++) {
                const wr = wd
                let wx = basB[rn].eo[wr]
                let relle = new RegExp(wx[0], 'g')
                if ((relle.test(wx[0])) === true) {
                    tezx = tezx.replace(relle, wx[1])
                    // COLOR TO FONT 
                    ttezx = ttezx.replace(relle, wx[1])
                    //tusDus.push({ n: 'ID!291'+s+'!S', v: '<span class="olWor">' + wx[0] + '</span> <span class="oneWor">' + wx[1] + '</span>' })
                    //colorix ? ttezx = ttezx.replace(relle, 'ID!291'+s+'!S') : ttezx = ttezx.replace(relle, wx[1])
                }
            }
        }
    }
    // PREPERED DATA TO SEND
    ttezx = ttezx.replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;")
    // COLOR TO FONT 
    /*
    if (colorix === true && tusDus.length > 0) {
        for(var itm = 0; itm < tusDus.length; itm ++){
            const nt = itm
            let relle = new RegExp(tusDus[nt].n,'g')
            ttezx = ttezx.replace(relle, tusDus[nt].v)
        }
    }*/
    return [tezx, ttezx]
}
module.exports = {
    sen
}