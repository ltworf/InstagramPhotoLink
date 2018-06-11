function getimglink() {
    d = document.getElementsByClassName('FFVAD');
    if (d.length == 0) return false;

    d = d[0];

    var link = document.createElement("a");
    link.href = d.src;
    link.innerHTML='<p>Link&nbsp;</p>';

    d.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(link);

    return true;
}

getimglink();
