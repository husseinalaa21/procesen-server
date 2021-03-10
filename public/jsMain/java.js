var socket = io('https://procsent-console-git-main-husseinalaa.vercel.app/')
socket.emit('processAr' , 'ok')
socket.on('processAr-re',e=>{
    alert('ses ! its done and thanks to god !')
})
var _omfa, _resu, _ssp, _itmuos_toForm;

_resu = document.getElementById("_opu_r1_2use")
_ssp = document.getElementById("_ssop_o34i_wpass")
_itmuos_toForm = document.getElementById("_itmuos_toForm")
_omfa = document.getElementById("alKhForIntr_omfa")

_omfa.addEventListener('submit', e => {
    if(_resu.value.length > 0 && _ssp.value.length > 0){
        _omfa.action = '/doLogin';
        _omfa.method = 'GET';
        _omfa.submit();
    } else {
        e.preventDefault()
    }
})

function xshhpa(x) {
    var xpa = document.getElementById("_ssop_o34i_wpass");
    var eyshh = document.getElementById('eyhsh')
    if (xpa.type === "password") {
      xpa.type = "text";
      eyshh.innerHTML = '<img src="./styleMain/eye-slash-solid.svg" width="17px" class="eyesPPass"/>'
    } else {
      xpa.type = "password";
      eyshh.innerHTML = '<img src="./styleMain/eye-solid.svg" width="17px" class="eyesPPass"/>'
    }
}
function hshWar(x) {
    location.href = '/'
}