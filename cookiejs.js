function removeMe(lan){
        var date= new Date();
        date.setTime(date.getTime()+(24*60*60*1000));
        var expires = "; expire="+date.toGMTString();
  // Für Testzwecke auskommentiert
  //      document.cookie="cookiebanner=true; "+expires;
        
        var element=document.getElementById("cookie"+lan);
        element.style.maxHeight= "0px";
}

window.onload = function(){
    var lan = "en";
    var cookiebanner = getCookie("cookiebanner");
    if(cookiebanner!=""){
        console.log(document);
        var element=document.getElementById("cookieit");
        element.style.display="none";
    }else{
        if(lan=="de"){
            document.getElementById("cookieit").style.display="none";
            document.getElementById("cookiede").style.display="block";
        }else
        if(lan=="en"){
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
