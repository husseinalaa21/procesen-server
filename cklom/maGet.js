function c_cT(x,y , dy , vn){
    
    var xSimp = ['£!','#','!$','$','%','&','$@','%#' , '%&' , '#$','!#','&£']
    var xnum = vn + 9000
    var xy = JSON.parse(dy);

    var letBt = x.split("");
    var lotBt = letBt.reverse();
    var lctBt = lotBt.join("");
    try {
        if(xy[lctBt]){
            var xNum = Math.floor(Math.random() * (xnum - vn)) + vn;
            var zcz =()=>{
               return Math.floor(Math.random() * 500);
            }
            var zxver = () => {
                var rz = []
                for(var i = 0; i < 6; i++){
                    var xz = Math.floor(Math.random() * 10);
                    var nzuz = zcz()
                    rz.push(nzuz+xSimp[xz])
                }
                var wSim = ['#','','','','']
                var xz = Math.floor(Math.random() * 5);
                var tSim = wSim[xz]
                var fc = tSim+rz.join("") + xNum
                return fc
            }
        
            if(xy[lctBt].pa == y){
                var iiy = xy[lctBt].idReq
                return [true , lctBt , zxver(),iiy]
            } else {
                return false
            }
        } else {
            return false
        }
    } catch(err) {
        return false
    }
}

module.exports = {
    c_cT
}