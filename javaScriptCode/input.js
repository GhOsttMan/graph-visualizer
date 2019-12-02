var sx = -1,
  sy = -1;
var src = 0,
  des = 0;
var selector = document.getElementsByClassName("nav-link button");
function InputSource() {
  if (runningAlgo == 1) return;
  if (Obstacle == 1) offObstacle();
  if (des == 1) offDes();
  clearPath();
  selector[0].style.backgroundColor = "rgb(20, 181, 221)";
  //console.log(selector[0].innerHTML);
  src = 1;
  var arr = document.getElementsByClassName("grid-item");
  for (var i = 0; i < totalGrid; i++) {
    arr[i].onclick = function() {
      if (
        this.style.backgroundColor == obsColor ||
        this.style.backgroundColor == desColor
      ) {
        //nothing to do
      } else if (this.style.backgroundColor == srcColor) {
        this.style.backgroundColor = gridColor;
      } else {
        for (var j = 0; j < totalGrid; j++) {
          if (arr[j].style.backgroundColor == srcColor) {
            arr[j].style.backgroundColor = gridColor;
            break;
          }
        }
        this.style.backgroundColor = srcColor;
      }
    };
  }
}
function offSrc() {
  src = 0;
  selector[0].style.backgroundColor = "white";
  var arr = document.getElementsByClassName("grid-item");
  for (var i = 0; i < totalGrid; i++) {
    arr[i].onclick = function() {};
  }
}
function offDes() {
  selector[1].style.backgroundColor = "white";
  des = 0;
  var arr = document.getElementsByClassName("grid-item");
  for (var i = 0; i < totalGrid; i++) {
    arr[i].onclick = function() {};
  }
}
function InputDes() {
  if (runningAlgo == 1) return;
  if (Obstacle == 1) offObstacle();
  if (src == 1) offSrc();
  clearPath();
  selector[1].style.backgroundColor = "rgb(20, 181, 221)";
  des = 1;
  var arr = document.getElementsByClassName("grid-item");
  for (var i = 0; i < totalGrid; i++) {
    arr[i].onclick = function() {
      if (
        this.style.backgroundColor == obsColor ||
        this.style.backgroundColor == srcColor
      ) {
        //nothing to do
      } else if (this.style.backgroundColor == desColor) {
        this.style.backgroundColor = gridColor;
      } else {
        this.style.backgroundColor = desColor;
      }
    };
  }
}
