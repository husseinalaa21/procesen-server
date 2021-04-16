var errLen = " الرجاء ادخال  جميع القيم . "
var errRes = " wrong "
var addSec = "Added successfully"
var nam = document.getElementById("namReq").innerText
var id = document.getElementById("idReq").innerText
var ur = 'http://localhost:4200/bc/'
setTimeout(() => {
    getArewSecion()
}, 100);
document.getElementById('sub-this').addEventListener('click', e => {
    var teety = document.getElementById("teeType").value
    let xworld = document.getElementById("x-adsWorld").value
    let nworld = document.getElementById("n-adsWorld").value
    let lan = document.getElementById("lan-adsWorld").value
    var tyKe = document.getElementById("adsWorldSc").value
    var xs = false
    if (teety === 'ad' || teety === 'up') {
        if (nworld.length > 0) {
            xs = true
        } else {
            xs = false
        }
    } else if (teety === 'de') {
        xs = true
    } else {
        xs = false
    }
    if (xworld.length > 0 && xs === true && lan !== "null" && tyKe !== "null" && teety !== "null") {
        fetch(ur + tyKe + '/?ty=' + teety + '&xwor=' + xworld + '&nwor=' + nworld + '&lan=' + lan + '&na=' + nam + '&isdW=' + id)
            .then(response => response.text())
            .then(response => {
                document.getElementById('mesAdsWorld').innerHTML = response
                clenUp('mesAdsWorld')
                getArewSecion()
            })
            .catch((error) => {
                document.getElementById('mesAdsWorld').innerHTML = errRes
                clenUp('mesAdsWorld')
                getArewSecion()
            });
    } else {
        document.getElementById('mesAdsWorld').innerHTML = errLen
        clenUp('mesAdsWorld')
    }
})
function getArewSecion() {
    document.getElementById('sectionSre').innerHTML = ""
    fetch(ur + 'reSendwe' + '?na=' + nam + '&isdW=' + id)
        .then(res => res.json())
        .then(res => {
            for(var e =0;e < res.length; e ++){
                const re = e
                setItm(res[re].nam , res[re].con)
            }
            function setItm(x,y) {
                var m = document.createElement("div");
                m.className = "itwe"
                m.innerHTML = '<div class="secTi">'+x+'</div>'+'<div class"secCon">'+y.toString()+'</div>';
                document.getElementById('sectionSre').append(m)
            }
        })
        .catch((error) => {
            document.getElementById('sectionSre').innerHTML = error
        });
}
function clenUp(x) {
    setTimeout(() => {
        document.getElementById(x).innerHTML = ''
    }, 4000);
}