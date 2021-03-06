var arr = [line0, line1, line2, line3, line4, line5];

function colorRandom() {
  return Math.round(Math.random()*3 );
}

function setColor() {
  var tmp,
      color;
  tmp = colorRandom();
  switch (tmp) {
    case(0): color = COLOR_ONE; break;
    case(1): color = COLOR_TWO; break;
    case(2): color = COLOR_THREE; break;
    default: color = COLOR_FOUR;
  }
  return color;
}

function setBackGround(elem, color) {
  elem.style.backgroundColor = color;
}


function reset() {
  var k = 5;
  while (k >= 0) {
      for (var i = 0; i < arr[k].length; i++) {
          setBackGround(arr[k][i], setColor());
      }
      k--;
  }
}

function saveGame() {
  var objSave = {};
  var allSpan = document.getElementsByClassName("column");
  for (var i = 0; i < allSpan.length; i++) {
    objSave[allSpan[i].getAttribute("id")] =  allSpan[i].style.backgroundColor;
  }
  var str = JSON.stringify(objSave);
  localStorage.removeItem("obj");
  localStorage.setItem('obj', str);
}

function loadGame() {
  var objSave = JSON.parse(localStorage.getItem('obj'));
  if (objSave === null || objSave.length === 0) {
    return alert("Нет сохраненной игры.");
  }
  var allSpan = document.getElementsByClassName("column");
  for (var key in objSave) {
    if (objSave.hasOwnProperty(key)) {
      document.getElementById("" + key).style.backgroundColor = objSave[key];
    }
  }
}
