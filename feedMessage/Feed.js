var feedCommint = []
var feedCallUs = []
var sections = ["القسم الاول","القسم الثاني","القسم الثالث","القسم الرابع","القسم الخامس","القسم السادس"]
function getFeed(x){
    if(x.formNum === "5100"){
        var nam = x.username
        var email = x.email
        var mess = x.mess
        var con = {"name" : nam , "email" : email , "mess" : mess}
        feedCallUs.push(con)
    } else if(x.formNum === "2911"){
        var nam = x.username
        var email = x.email
        var mess = x.mess
        var secNum = x.secNum
        try {
            var namSec = sections[secNum-1]
        } catch {
            var namSec = "Unknown"
        }
        var con = {"name" : nam , "email" : email , "mess" : mess , "sec" : namSec}
        feedCommint.push(con)
    }
}

module.exports = {
    getFeed
}