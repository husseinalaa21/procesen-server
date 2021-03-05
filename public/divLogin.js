function tBody(x) {
    var xDt =
        `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styleMain/main.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet">
        <!-- FontAwesome -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>Login Procsent</title>
    </head>
    
    <body>
        <div class="backBody shMain">
            <div class="procs_logo">
                <div class="procs_logoText">Procsent</div> <img src="styleMain/icon.png" height="45px" />
            </div>
        </div>
        <div class="backBodyFix"></div>
    
        <div class="pageLogin shMain">
            <div class="titlepageLogin">
                LOGIN
            </div>
            `+x+`
            <form class="form-inline" id="alKhForIntr_omfa">
                <div class="form-group">
                    <div class="iptn-group">
                        <label class="sr-only" for="inlineFormInputGroup">Username</label>
                        <div class="iptnX">
                            <div class="inptnTextIcon">
                                <div class="input-group-text">@</div>
                            </div>
                            <input type="text" class="iptn-put" id="_opu_r1_2use" placeholder="Username" name="username">
                        </div>
                    </div>
                    <div class="iptn-group">
                        <label class="sr-only" for="inlineFormInputGroup">Username</label>
                        <div class="iptnX">
                            <div class="inptnTextIcon">
                                <div class="input-group-text" onclick="xshhpa()">
                                    <div id="eyhsh"><img src="./styleMain/eye-solid.svg" width="17px" class="eyesPPass" />
                                    </div>
                                </div>
                            </div>
                            <input type="password" id="_ssop_o34i_wpass" class="iptn-pass"
                                aria-describedby="passwordHelpBlock" name="pass">
                        </div>
                    </div>
                    <div class="buttonClickGroup">
                        <button class="buttonClick btnLogIn" type="submit" id="_itmuos_toForm"> Login </button>
                    </div>
                </div>
            </form>
        </div>
        <div class="endPage">
            <div class="endOne">
                <div class="endOne_one">
                    <div> <a>Call us</a> </div>
                    <div> <a> Procsent en </a> </div>
                </div>
                <div class="endOne_two">
                    <div> <a> Info </a> </div>
                    <div> <a> Procsent ar </a> </div>
                </div>
            </div>
            <div class="endTow"> Procsent © 2020 - 2021 </div>
        </div>
    </body>
    <script type="text/javascript" src="jsMain/java.js"></script>
    
    </html>`
    return xDt
}

module.exports = {
    tBody
}