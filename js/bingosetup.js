var conferenceName;
var boardImage = "./images/dingwiggle.gif";
var boardExists = false;

function newbingo() {
  var e = document.getElementById("conference");
  conferenceName = e.options[e.selectedIndex].value;
  var shortname = conferenceName.split(' ').join('');
  var bingoList = 'bingoList' + shortname;

  Generic();
  VRChat();
  Jackbox();
  FNAF();
  Horror();

  if (boardExists === false){
    initBoard();
    boardExists = true;
  }

  srl.bingo(window[bingoList], 5, conferenceName);

  switch (conferenceName) {
    case "VRchat":
      $('#FreeSpace').attr('src',"./images/dingpepega.png");
      break;
    case "Jackbox":
      $('#FreeSpace').attr('src',"./images/dingbonk.png");
      break;
    case "FNAF":
      $('#FreeSpace').attr('src',"./images/dingcult.png");
      break;
    case "Horror":
      $('#FreeSpace').attr('src',"./images/dinggun.png");
      break;
    default:
      $('#FreeSpace').attr('src',"./images/dingwiggle.gif");
      break;
  }
}

