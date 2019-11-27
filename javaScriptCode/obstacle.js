var SelectedAlgo = "BFS";
var Obstacle = 0;
function obstacle() {
  if(src == 1) offSrc();
  if(des == 1) offDes();
  Obstacle = 1;
  var arr = document.getElementsByClassName("grid-item");
  //console.log(arr.length);
  var ob = 0;
  for (var i = 0; i < 792; i++) {
    arr[i].onmousedown = function() {
      ob = 1;
      if(this.style.backgroundColor == "red" || this.style.backgroundColor == "yellow"){
        // nothing change
      }
      else if(this.style.backgroundColor == "black") {
        this.style.backgroundColor = "rgba(64, 238, 215, 0.993)";
      }
      else this.style.backgroundColor = "black";
    };
  }
  for (var i = 0; i < 792; i++) {
    arr[i].onmouseup = function() {
      ob = 0;
      
    };
  }
  for (var i = 0; i < 792; i++) {
    arr[i].onmouseenter = function() {
      if (ob == 1) {
        if(this.style.backgroundColor == "red" || this.style.backgroundColor == "yellow"){
          // nothing change
        }
        else if(this.style.backgroundColor == "black") {
          this.style.backgroundColor = "rgba(64, 238, 215, 0.993)";
        }
        else this.style.backgroundColor = "black";
      }
    };
  }
}

function clearGrid(){
  if(Obstacle == 1) offObstacle();
  var arr = document.getElementsByClassName("grid-item");
  for (var i = 0; i < 792; i++) {
    arr[i].style.backgroundColor = "rgba(64, 238, 215, 0.993)";
  }
}
function offObstacle(){
  //console.log("Entering");
  Obstacle = 0;
  var arr = document.getElementsByClassName("grid-item");
  for (var i = 0; i < 792; i++) {
    arr[i].onmousedown = function() {
      // do nothing
    };
  }
  for (var i = 0; i < 792; i++) {
    arr[i].onmouseup = function() {
      // do nothing
    };
  }
  for (var i = 0; i < 792; i++) {
    arr[i].onmouseenter = function() {
      // do nothing
    };
  }
}