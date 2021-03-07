function tPoData(urCo, dy, ilf) {
    const { writeFile } = require('fs');
    const { join } = require('path');
    const { readFileSync } = require('fs');
    const dcos = readFileSync(join(__dirname, './dataSetCure.json'), 'utf8');

    var dco = JSON.parse(dcos);
    var da = JSON.parse(dy);

    var npc = ilf.nam
    var ppc = ilf.tp
    var ibpc = ilf.ip
    var idpc = ilf.id

    var xSimp = ['#', '$', '!', '£']
    var xWord = ['A', 'a', 'C', 'B', 'b', 'c', 'X', 'x', 'S', 'W', 'q', 'Q', 'I', 'Z', 'z', 'L', 'l', 'J', 'H', 'F', 'f', 'E', 'R', 'r', 'T', 'E', 'p', 'P', 'D']
    function runSWar(x) {
        return Math.floor(Math.random() * x);
    }
    function crCok() {
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
    var tcrCok = crCok()

    // START PROCSESS ****

    if (urCo == true) { /* فحص اذا كان الجيسون الاساسي يحتوي على  القيمة المراد تحديثها*/
        if (tcrCok.length > 8) {
            // Create a new one
            dco[tcrCok] = { "ip": ibpc, "id": idpc, "us": npc, "nu": ppc }
            writeFile(join(__dirname, './dataSetCure.json'), JSON.stringify(dco), function (err) {
                if (err) {
                    return false
                }
            });
            da[npc].coLog = tcrCok
            writeFile(join(__dirname, './jsonDataUsersX.json'), JSON.stringify(da), function (err) {
                if (err) {
                    return false
                }
            });
            return true

        } else {
            return false
        }
    } else {
        if (tcrCok.length > 8) {
            // update
            if (urCo in dco) {
                // delete old one
                dco = delete dco["'"+urCo+"'"]
                dco[tcrCok] = { "ip": ibpc, "id": idpc, "us": npc, "nu": ppc }
            } else {
                // is new
                dco[tcrCok] = { "ip": ibpc, "id": idpc, "us": npc, "nu": ppc }
            }
            writeFile(join(__dirname, './dataSetCure.json'), JSON.stringify(dco), function (err) {
                if (err) {
                    return false
                }
            });
            da[npc].coLog = tcrCok
            writeFile(join(__dirname, './jsonDataUsersX.json'), JSON.stringify(da), function (err) {
                if (err) {
                    return false
                }
            });
            return true

        } else {
            return false
        }

    }
}

module.exports = {
    tPoData
}