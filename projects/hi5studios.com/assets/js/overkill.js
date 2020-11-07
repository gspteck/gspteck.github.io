function load_vid() {    
    setTimeout(() => {
        var channelID = "UCluqnG4yYHGsfRuV-_wjHNw";
        var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
        $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
        var link = data.items[0].link;
        var id = link.substr(link.indexOf("=")+1);
        $("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
        });
    }, 5000);
}

function remv_login() {
    var username = document.getElementById('name').value;
    var password = document.getElementById('passw').value;

    var wrong = document.getElementById('wrong');

    if (username == 'OVERKILL' && password == 'I.L0V3_MVRV£L') {
        var block = document.getElementById('block');
        block.innerHTML = ' ';
        load_vid();
    }
    else {
        var audio = new Audio('../assets/audio/nope.mp3');
        audio.volume = 0.05;
        audio.play();
    }    
}

function mega_bg() {
    document.body.style.background = "url('../assets/images/wallpaper.jpg')";
    var megabg = document.getElementById('mega-bg');
    megabg.outerHTML = '<button id="mega-bg" onclick="bl_bg()">normal bg</button>';
}

function bl_bg() {
    document.body.style.background = "black";
    var megabg = document.getElementById('mega-bg');
    megabg.outerHTML = '<button id="mega-bg" onclick="mega_bg()">MEGA BG</button>';
}