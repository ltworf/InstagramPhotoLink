function getimglink(i) {
    d=document.getElementById("pImage_"+i);
    
    if (d==null) return false;

    var link = document.createElement("a");
    link.href=d.src;
    link.innerHTML='<p>Link&nbsp;</p>';

    divo=d.parentNode.parentNode.parentNode.parentNode;
    divo.appendChild(link);
    
    return true;
}

function linkthemall() {
    i = 0;
    
    while(getimglink(i)) i++;   
}

linkthemall();
