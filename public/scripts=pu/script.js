var errLen = " الرجاء ادخال  جميع القيم . "
var errRes = " wrong "
var addSec = "Added successfully"
var nam = document.getElementById("namReq").innerText
var id = document.getElementById("idReq").innerText
var ur = 'http://localhost:4200/bc/'

document.getElementById('sub-ad').addEventListener('click', e => {
    let xworld = document.getElementById("x-adsWorld").value
    let nworld = document.getElementById("n-adsWorld").value
    let lan = document.getElementById("lan-adsWorld").value
    var tyKe = document.getElementById("adsWorldSc").value
    if (xworld.length > 0 && nworld.length > 0 && lan.length > 0 && tyKe !== "null") {
        fetch(ur +tyKe+ '/?ty=ad&xwor=' + xworld + '&nwor=' + nworld + '&lan=' + lan + '&na=' + nam + '&isdW=' + id)
            .then(response => response.text())
            .then(response => {
                document.getElementById('mesAdsWorld').innerHTML = response
                clenUp('mesAdsWorld')
            })
            .catch((error) => {
                document.getElementById('mesAdsWorld').innerHTML = errRes
                clenUp('mesAdsWorld')
            });
    } else {
        document.getElementById('mesAdsWorld').innerHTML = errLen
        clenUp('mesAdsWorld')
    }
})
document.getElementById('sub-de').addEventListener('click', e => {
    let xworld = document.getElementById("x-adsWorld-de").value
    let lan = document.getElementById("lan-adsWorld-de").value

    if (xworld.length > 0 && lan.length > 0 && tyKe !== "null") {
        var tyKe = document.getElementById("adsWorldSc-de").value
        fetch(ur +tyKe+ '/?ty=de&xwor=' + xworld + '&nwor=' + ' ' + '&lan=' + lan + '&na=' + nam + '&isdW=' + id)
            .then(response => response.text())
            .then(response => {
                document.getElementById('mesAdsWorld-de').innerHTML = response
                clenUp('mesAdsWorld-de')
            })
            .catch((error) => {
                document.getElementById('mesAdsWorld-de').innerHTML = errRes
                clenUp('mesAdsWorld-de')
            });
    } else {
        document.getElementById('mesAdsWorld-de').innerHTML = errLen
        clenUp('mesAdsWorld-de')
    }
})
document.getElementById('sub-up').addEventListener('click', e => {
    let xworld = document.getElementById("x-adsWorld-up").value
    let nworld = document.getElementById("n-adsWorld-up").value
    let lan = document.getElementById("lan-adsWorld-up").value

    if (xworld.length > 0 && nworld.length > 0 && lan.length > 0 && tyKe !== "null") {
        var tyKe = document.getElementById("adsWorldSc-up").value
        fetch(ur +tyKe+ '/?ty=up&xwor=' + xworld + '&nwor=' + nworld + '&lan=' + lan + '&na=' + nam + '&isdW=' + id)
            .then(response => response.text())
            .then(response => {
                document.getElementById('mesAdsWorld-up').innerHTML = response
                clenUp('mesAdsWorld-up')
            })
            .catch((error) => {
                document.getElementById('mesAdsWorld-up').innerHTML = errRes
                clenUp('mesAdsWorld-up')
            });
    } else {
        document.getElementById('mesAdsWorld-up').innerHTML = errLen
        clenUp('mesAdsWorld-up')
    }
})
function clenUp(x) {
    setTimeout(() => {
        document.getElementById(x).innerHTML = ''
    }, 4000);
}