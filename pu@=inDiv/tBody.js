function tBody(x) {
    var ds = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/design=pu/main.css">
        <link rel="stylesheet" href="/design=pu/nt.css">
        <link rel="stylesheet" href="/design=pu/sbp.css">
        <link rel="stylesheet" href="/design=pu/tols.css">
        <link rel="stylesheet" href="/design=pu/pro.css">
        <link rel="stylesheet" href="/design=pu/addWs.css">
        <title> Procesen | `+x.un+`</title>
    </head>
    
    <body>
        <div class="header-main">
            <div class="header shMain">
                <div class="logo_procsent">
                    <div class="logo_procsent_text"> Procesen </div>
                    <div class="logo_procsent_img"> <img src="/styleMain/logo5.png" class="icoPage" height="50px"
                            alt="icon" />
                    </div>
                </div>
                <div class="settingProcsent">
                    <img src="/design=pu/sliders-h-solid.svg" class="settingsIcon" width="22px" alt="">
                </div>
            </div>
        </div>
        <div style="display: none;" id="namReq">`+x.info.us+`</div>
        <div style="display: none;" id="idReq">`+x.info.id+`</div>
        <div class="rootBody">
            <div class="nt sec">
                <div class="ntTitle">
                    Notifications
                </div>
                <div class="ntContainer">
                    <!-- Notification One -->
                    <div class="ntf">
                        <div class="ntfs">
                            <div class="ntfTitle"> معلومات الأمان </div>
                            <div class="ntfInfTitle"> أخر عمليات تسجيل الدخول بالاضافة الى محاولات تسجيل الدخول </div>
                        </div>
                        <div class="ntx">
                            <div class="ntfxCon">
                                `+infoLog()+`
                            </div>
                        </div>
                        <div class="ntLast">
                            last update : `+datNow()+`
                        </div>
                    </div>
                    <!-- End -->
                </div>
            </div>
            <div class="tols sec">
                <div class="tolsTitle">
                    Tols
                </div>
                <div class="tolsCon">
                    <!-- TOLS SECTIOM ONE -->
                    <div class="tolsXse">
                        <div class="tolsXseTitle">
                            <div class="titleTtoo">
                                Front-End DataBesse
                            </div>
                            <div class="conTtoo">
                                Get data front-end curently from server
                            </div>
                        </div>
                        <div class="tolsXseCon">
                            <!-- Add Data here -->
                            <div class="ntxLoad" id="getDataFrontEnd">
                                <div class="infoGet" id="infogetDataFrontEnd">
                                    <img src="/design=pu/envelope-open-text-solid.svg" alt="" height="40px"
                                        class="infoLogInPassIcon">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END SECTION ONE -->
                    <!-- TOLS SECTIOM TWO -->
                    <div class="tolsXse">
                        <div class="tolsXseTitle">
                            <div class="titleTtoo">
                                Back-End DataBesse
                            </div>
                            <div class="conTtoo">
                                Get data back-end curently from server
                            </div>
                        </div>
                        <div class="tolsXseCon">
                            <!-- Add Data here -->
                            <div class="ntxLoad" id="getDataBackEnd">
                                <div class="infoGet" id="infogetDataBackEnd">
                                    <img src="/design=pu/envelope-open-text-solid.svg" alt="" height="40px"
                                        class="infoLogInPassIcon">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END SECTION  -->
                </div>
            </div>
            <div class="Proof sec">
                <div class="proofTitle">
                    Contributions
                </div>
                <div class="proofCon">
                    <!-- SETION ONE PROOF -->
                    <div class="prordeored">
                        <div class="poedTitleCon">
                            <div class="pordTitle">
                                Similar word
                            </div>
                            <div class="peodCon">
                                <div class="wordsVote">
                                    <div class="originWord wwth WedThis"> اتى </div>
                                    <div class="transEmo wwth">
                                        <img src="/design=pu/exchange-alt-solid.svg" alt="change" width="22px">
                                    </div>
                                    <div class="copyWord wwth WedThis"> جاء </div>
                                </div>
                                <div class="infoThisWorld">
                                    <div class="infoVote">
                                        Number of times voting : 300
                                    </div>
                                    <div class="powerVotes">
                                        <div class="powerPoint powerPointBlue"></div>
                                        <div class="powerPoint powerPointBlue"></div>
                                        <div class="powerPoint powerPointBlue"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="proofConContainer">
                            <!-- ADD DATA HERE -->
                            <div class="sectionsSetThis">
                                <div class="proofClick">
                                    Proof
                                </div>
                                <div class="deleteClick">
                                    Delete
                                </div>
                                <div class="editClick">
                                    Edite
                                </div>
                            </div>
                            <div class="optionsThis">
                                <div class="skipButton">
                                    Skip
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End -->
                </div>
            </div>
            <div class="addWs-ads sec">
                <div class="addEditeTitle addWs">
                    Editing of words and sentences
                </div>
                <div class="addEditCon">
                    <!-- Add and edit sectionst -->
                    <div class="sectionAds">
                        <div class="sectionAds_title"> Add New World </div>
                        <div class="mesAds" id="mesAdsWorld"> </div>
                        <div class="sectionAds-ad">
                            <div class="sec_ads_sec">
                                <div> Lan </div>
                                <input type="text" class="sectionAdsInput" id="lan-adsWorld" />
                            </div>
                            <div class="sec_ads_sec">
                                <div> x-world </div>
                                <input type="text" class="sectionAdsInput" id="x-adsWorld" />
                            </div>
                            <div class="sec_ads_sec">
                                <div> n-world </div>
                                <input type="text" class="sectionAdsInput" id="n-adsWorld" />
                            </div>
                            <div class="enterSeAds">
                                <button class="adsEnter" id="sub-ad"> Submet </button>
                            </div>
                        </div>
                    </div>
                    <div class="sectionAds">
                        <div class="sectionAds_title"> Delete World </div>
                        <div class="mesAds" id="mesAdsWorld-de"> </div>
                        <div class="sectionAds-ad">
                            <div class="sec_ads_sec">
                                <div> Lan </div>
                                <input type="text" class="sectionAdsInput" id="lan-adsWorld-de" />
                            </div>
                            <div class="sec_ads_sec">
                                <div> world </div>
                                <input type="text" class="sectionAdsInput" id="x-adsWorld-de" />
                            </div>
                            <div class="enterSeAds">
                                <button class="adsEnter" id="sub-de"> Submet </button>
                            </div>
                        </div>
                    </div>
                    <div class="sectionAds">
                        <div class="sectionAds_title"> Update World </div>
                        <div class="mesAds" id="mesAdsWorld-up"> </div>
                        <div class="sectionAds-ad">
                            <div class="sec_ads_sec">
                                <div> Lan </div>
                                <input type="text" class="sectionAdsInput" id="lan-adsWorld-up" />
                            </div>
                            <div class="sec_ads_sec">
                                <div> x-world </div>
                                <input type="text" class="sectionAdsInput" id="x-adsWorld-up" />
                            </div>
                            <div class="sec_ads_sec">
                                <div> n-world </div>
                                <input type="text" class="sectionAdsInput" id="n-adsWorld-up" />
                            </div>
                            <div class="enterSeAds">
                                <button class="adsEnter" id="sub-up"> Submet </button>
                            </div>
                        </div>
                    </div>
                    <!-- End -->
                </div>
            </div>
        </div>
        <div class="rootEnd">
            <div class="">
    
            </div>
            <div class="">
    
            </div>
        </div>
        <script type="text/javascript" src="/scripts=pu/script.js"></script>
    </body>
    
    </html>`
    function infoLog(params) {
        let ne = x.infoLog
        let secLog = []
        for(var lo = 0; lo < ne.length; lo ++){
            const loe = lo
            let item = `<div>`+loe+`.  `+ne[loe]+`</div>`
            secLog.push(item)
        }
        return `<div class="infEnter"> <div class="infoEnterTitle"> أخر عمليات تسجيل الدخول :  </div> <div class="infoEnterCon">`+secLog+`</div> </div>`
    }
    function datNow() {
        var d = new Date()
        var minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours();
        return d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear() +' | '+hours+' : '+minutes
    }
    return ds
}

module.exports = {
    tBody
}