function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function share1(){

    var shareData={

        title:document.title,
        text:'https://game30.netlify.app/',
        url:document.location.href
    }
    if(navigator.canShare(shareData)){
        navigator.share(shareData);
    }
}


function share2(){

    var shareData={

        title:document.title,
        text:'https://wallpaper7.netlify.app/',
        url:document.location.href
    }
    if(navigator.canShare(shareData)){
        navigator.share(shareData);
    }
}



function share31(){

    var shareData={

        title:document.title,
        text:' not found web',
        url:document.location.href
    }
    if(navigator.canShare(shareData)){
        navigator.share(shareData);
    }
}

function ios() {
  // Tab to edit
  document.getElementById("mySidenav").style.width = "0";
}
