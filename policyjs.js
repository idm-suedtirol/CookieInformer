window.onload = function(){
    var lan = location.search.split('lan=')[1] ? location.search.split('lan=')[1] : 'it';
    if(lan.indexOf("de")==0){
        document.getElementById("divit").style.display = "none";
        document.getElementById("divde").style.display = "inherit";
    }else
        if(lan.indexOf("en")==0){
            document.getElementById("divit").style.display = "none";
            document.getElementById("diven").style.display = "inherit";
        }
}
