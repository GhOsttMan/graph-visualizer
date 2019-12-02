var SelectedAlgo = "Breadth First Search";
var Obstacle = 0;
var obsColor, srcColor, desColor;
var currStateColor, nextStateColor;
var selector = document.getElementsByClassName("nav-link button");
(obsColor = "black"), (srcColor = "yellow");
desColor = "red";
currStateColor = "blue";
nextStateColor = "orange";
var gridColor = "rgba(64, 238, 215, 0.993)";
var totalGrid = 792;
function obstacle() {
  if (runningAlgo == 1) return;
  if (src == 1) offSrc();
  if (des == 1) offDes();
  clearPath();
  selector[2].style.backgroundColor = "rgb(20, 181, 221)";
  Obstacle = 1;
  var arr = document.getElementsByClassName("grid-item");
  //console.log(arr.length);
  var ob = 0;
  for (var i = 0; i < totalGrid; i++) {
    arr[i].onmousedown = function() {
      ob = 1;
      if (
        this.style.backgroundColor == desColor ||
        this.style.backgroundColor == srcColor
      ) {
        // nothing change
      } else if (this.style.backgroundColor == obsColor) {
        this.style.backgroundColor = gridColor;
      } else this.style.backgroundColor = obsColor;
    };
  }
  for (var i = 0; i < totalGrid; i++) {
    arr[i].onmouseup = function() {
      ob = 0;
    };
  }
  for (var i = 0; i < totalGrid; i++) {
    arr[i].onmouseenter = function() {
      if (ob == 1) {
        if (
          this.style.backgroundColor == desColor ||
          this.style.backgroundColor == srcColor
        ) {
          // nothing change
        } else if (this.style.backgroundColor == obsColor) {
          this.style.backgroundColor = gridColor;
        } else this.style.backgroundColor = obsColor;
      }
    };
  }
}
function clearPath() {
  if (runningAlgo == 1) return;
  if (Obstacle == 1) offObstacle();
  if (src == 1) offSrc();
  if (des == 1) offDes();
  var arr = document.getElementsByClassName("grid-item");
  for (var i = 0; i < totalGrid; i++) {
    if (
      arr[i].style.backgroundColor == currStateColor ||
      arr[i].style.backgroundColor == nextStateColor ||
      arr[i].style.backgroundColor == pathColor
    ) {
      arr[i].style.backgroundColor = gridColor;
    }
  }
}
function clearGrid() {
  if (runningAlgo == 1) return;
  if (Obstacle == 1) offObstacle();
  if (src == 1) offSrc();
  if (des == 1) offDes();
  var arr = document.getElementsByClassName("grid-item");
  for (var i = 0; i < totalGrid; i++) {
    arr[i].style.backgroundColor = gridColor;
  }
}
function offObstacle() {
  //console.log("Entering");
  selector[2].style.backgroundColor = "white";
  Obstacle = 0;
  var arr = document.getElementsByClassName("grid-item");
  for (var i = 0; i < totalGrid; i++) {
    arr[i].onmousedown = function() {
      // do nothing
    };
  }
  for (var i = 0; i < totalGrid; i++) {
    arr[i].onmouseup = function() {
      // do nothing
    };
  }
  for (var i = 0; i < totalGrid; i++) {
    arr[i].onmouseenter = function() {
      // do nothing
    };
  }
}
