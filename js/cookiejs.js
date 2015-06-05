var lang="";

window.onload = function(){
    lang = location.search.split('lang=')[1] ? location.search.split('lang=')[1] : 'it';
    var cookiebanner = getCookie("cookiebanner");
    if(cookiebanner!=""){
        console.log(document);
        var element=document.getElementById("cookieit");
        element.style.display="none";
    }else{
        if(lang.indexOf("de")==0){
            document.getElementById("cookieit").style.display="none";
            document.getElementById("cookiede").style.display="block";
        }else
        if(lang.indexOf("en")==0){
            document.getElementById("cookieit").style.display="none";
            document.getElementById("cookieen").style.display="block";
        }
    }
}

function getCookie(cookiename){
    var name = cookiename+"=";
    var cookiearray = document.cookie.split(';');
    for(var i = 0; i<cookiearray.length;i++){
        var cookie = cookiearray[i];
        console.log(cookie);
        while(cookie.charAt(0)==' ') cookie = cookie.substring(1);
        if(cookie.indexOf(name) == 0) return cookie.substring(name.length, cookie.length);
    }
    return"";
}
