var ntxLoadInfo,infoGet;
var socket = io('https://server.procsent.com')

ntxLoadInfo = document.getElementById('ntxLoadInfo')
infoGet = document.getElementById('infoGet')

var loPass = `
<div class="formGetinf">
    <div class="titleGetInf"> أدخل كلمة السر  </div>
    <div class="gotmXnx">
        <div class="getDataInfInput">
            <input class="inptGetData" type="password" id="passWordgetData" name="_pa_sword200getss"/>
        </div>
        <div class="btnClickGroup">
            <button class="btnsendInf" type="submit" id="_itmuos_toForm"> submit </button>
        </div>
    </div>
</div>`

infoGet.addEventListener('click',e=>{
    ntxLoadInfo.innerHTML = loPass
})