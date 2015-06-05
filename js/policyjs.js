window.onload = function(){
    var lang = location.search.split('lang=')[1] ? location.search.split('lang=')[1] : 'it';
    if(lang.indexOf("de")==0){
        document.getElementById("divit").style.display = "none";
        document.getElementById("divde").style.display = "inherit";
    }else
        if(lang.indexOf("en")==0){
            document.getElementById("divit").style.display = "none";
            document.getElementById("diven").style.display = "inherit";
        }
}
