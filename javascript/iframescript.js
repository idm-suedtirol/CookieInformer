window.onload = function(){
    document.addEventListener("click", removeiframe);
    document.addEventListener("scroll", removeiframe);

    var cookiebanner = getCookie("cookiebanner");
    if(cookiebanner!=""){
        var element=document.getElementById("myiframe");
        element.style.display="none";
    }
}
function removeiframe(){
    var date= new Date();
    date.setTime(date.getTime()+(30*24*60*60*1000));
    var expires = "; expire="+date.toGMTString();
    document.cookie="cookiebanner=true; "+expires;
        
    var element=document.getElementById("myiframe");
    element.style.maxHeight= "0px";
}

function getCookie(cookiename){
    var name = cookiename+"=";
    var cookiearray = document.cookie.split(';');
    for(var i = 0; i<cookiearray.length;i++){
        var cookie = cookiearray[i];
        while(cookie.charAt(0)==' ') cookie = cookie.substring(1);
        if(cookie.indexOf(name) == 0) return cookie.substring(name.length, cookie.length);
    }
    return"";
}
