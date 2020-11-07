//making draggable logo
dragElement(document.getElementById("logo"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function overkill() {
  window.open('./pages/overkill.html', '_self');
}

function open_mission() {
  var text = '“I believe story is the most important and compelling thing in the world. It inspires us, mobilizes us, connects us, moves us, reminds us that life is more significant than what’s right in front of us, calls us to be a part of something bigger than ourselves, and it is our very mechanism of which we share meaning. Without it, we are an empty home, and we are heads with no hearts. Story is a part of us, and I believe it is the most important part. Story is in everything we do, from Spark, the new platform we are creating to better tell and connect through stories, down to the DOPE or NOPE card game where we pitch stories to each-other. This new mission allows us to be flexible and nimble but focuses us to remain vigilant on finding the best storytellers, and letting them tell their best story.”';
  var mission = document.getElementById('mission');
  var mission_txt = document.getElementById('mission-text');
  var mission_lnk = document.getElementById('mission-link');

  mission_txt.innerHTML = ' ';
  mission_lnk.innerHTML = ' ';
  mission.innerHTML = '<center><img src="./assets/images/pic1.jpg" width="500px"><br><br><h4>' + text + '<br><br>- Matthias</h4></center>';
}

function log() {
  const fs = require('fs')
  const visit = 1;
  const jsonString = JSON.stringify(visit);
  
  fs.writeFile('./visits.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err);
    } else {
        console.log('Successfully wrote file');
    }
  });
}