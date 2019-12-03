var runningAlgo = 0;
var pathColor = "pink";
var sourceX = [];
var destinationX = [];
var sourceY = [];
var destinationY = [];
var dx = [1, -1, 0, 0];
var dy = [0, 0, 1, -1];
var gridRow = 24,
  gridCol = 33;
var Time = 10;
function Handler() {
  if (src == 1) offSrc();
  if (des == 1) offDes();
  if (Obstacle == 1) offObstacle();
  clearPath();
  runningAlgo = 1;
  // console.log(obstacle);
  index = [];
  type = [];
  sourceX = [];
  sourceY = [];
  destinationX = [];
  destinationY = [];
  path = [];
  var arr = document.getElementsByClassName("grid-item");
  let cntS = 0,
    cntD = 0;

  for (var i = 0; i < totalGrid; i++) {
    if (arr[i].style.backgroundColor == srcColor) {
      cntS++;
      var x = parseInt(i / 33);
      var y = parseInt(i % 33);
      sourceX.push(x);
      sourceY.push(y);
    } else if (arr[i].style.backgroundColor == desColor) {
      cntD++;
      var x = parseInt(i / 33);
      var y = parseInt(i % 33);
      destinationX.push(x);
      destinationY.push(y);
    }
  }
  if (SelectedAlgo == "Breadth First Search") {
    if (cntS < 1 || cntD < 1) {
      alert("You have to select source and destination");
    } else {
      bfs(cntD);
    }
  } else if (SelectedAlgo == "Bidirectional Search") {
    if (cntS != 1 || cntD != 1) {
      alert("you have to select exactly one source and one destination");
    } else {
      bidirection();
    }
  } else if (SelectedAlgo == "Flood Fill Algorithm") {
    if (cntS < 1 || cntD < 1) {
      alert("You have to select source and destination");
    } else {
      flood(cntD);
    }
  }
  HoldingVisualization();
}
function HoldingVisualization() {
  setTimeout(function() {
    runningAlgo = 0;
    let ar = document.getElementsByClassName("buttoncol");
    ar[0].style.backgroundColor = "#007bff";
  }, Time * (type.length + path.length));
}
