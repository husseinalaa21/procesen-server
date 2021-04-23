var _bData = [
    { "exdz": '[0-9]', "nam": ' Numbers ' },
    { "exdz": ' ', "nam": ' Spaces ' },
    { "exdz": '[\u0600-\u06FF]', "nam": 'Letters Arabic' },
    { "exdz": '[a-zA-Z]', "nam": ' Letters English ' },
    { "exdz": `[@|#|$|%|=|&|*|(|)|{|}|:|/|\\>|\<]`, "nam": ' Breaks and symbols ' },
    { "exdz": `[.]`, "nam": ' Dot Break ' },
    { "exdz": `[?]`, "nam": ' A question mark ' },
    { "exdz": `[']`, "nam": " Quotation marks [ ' ]" },
    { "exdz": `["]`, "nam": ' Quotation marks [ " ]' },
    { "exdz": '[`]', "nam": ' Quotation marks [ ` ]' },
    { "exdz": '[,]', "nam": ' Comma [ , ] ' },
    { "exdz": '[!]', "nam": ' Exclamation mark ' },
    { "exdz": '[;]', "nam": ' Semicolon [ ; ]' },
    { "exdz": '[+]', "nam": ' Plus ' },
    { "exdz": '[-]', "nam": ' Minus ' },
    { "exdz": '[\\]|\[]', "nam": ' Square brackets ' },
    { "exdz": '\n', "nam": ' Lins ' },
    { "exdz": false, "nam": ' Remove quotes ', "ex": true, "eo": '[\[+(?=0|1|2|3|4|5|6|7|8|9|٠|٩|٨|٧|٦|٥|٤|٣|٢|١)\]+]' },
    { "exdz": false, "nam": ' Word processing ( English ) ', "ex": false, "xvy": true, "eo": [['Go', 'Run'], ["Trump", "Biden"]] },
    { "exdz": false, "nam": ' Sentences processing ( English ) ', "ex": false, "xvy": true, "eo": [['hello ,', 'hi ,'], ["how old are you", "What is your age"]] }
]

function bofpof(x) {
    if (x === true) {
        // meam get data
        return _bData
    } else if (x === false) {
        // mean push data
    }
}

module.exports = {
    bofpof
}