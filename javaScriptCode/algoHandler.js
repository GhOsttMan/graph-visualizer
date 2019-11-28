var runningAlgo = 0;
var pathColor = "purple";
var sourceX = [];
var destinationX = [];
var sourceY = [];
var destinationY = [];
var dx = [1, -1, 0, 0];
var dy = [0, 0, 1, -1];
var gridRow = 24,
  gridCol = 33;
function Handler() {
  runningAlgo = 1;
  if (src == 1) offSrc();
  if (des == 1) offDes();
  if (Obstacle == 1) offObstacle();
  clearPath();
  // console.log(obstacle);
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
      //console.log(x + " " + y);
    } else if (arr[i].style.backgroundColor == desColor) {
      cntD++;
      var x = parseInt(i / 33);
      var y = parseInt(i % 33);
      destinationX.push(x);
      destinationY.push(y);
      // console.log(x + " " + y);
    }
  }
  if (SelectedAlgo == "Breadth First Search") {
    // console.log(cntS + " " + cntD);
    if (cntS < 1 || cntD < 1) {
      alert("You have to select source and destination");
    } else {
      runBfs(cntD);
    }
  }
  runningAlgo = 0;
  let ar = document.getElementsByClassName("buttoncol");
  ar[0].style.backgroundColor = "#007bff";
  sourceX = [];
  sourceY = [];
  destinationX = [];
  destinationY = [];
}
class myQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    return this.queue.unshift(item);
  }
  dequeue() {
    return this.queue.pop();
  }
  peek() {
    return this.queue[this.length - 1];
  }
  get length() {
    return this.queue.length;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}
function runBfs(totalDes) {
  let qx = new myQueue();
  let qy = new myQueue();
  let prvx = new Array(35);
  let prvy = new Array(35);
  for (let i = 0; i < 35; i++) {
    prvx[i] = [];
    prvy[i] = [];
    for (let j = 0; j < 35; j++) {
      prvx[i][j] = i;
      prvy[i][j] = j;
    }
  }
  qx.enqueue(sourceX[0]);
  qy.enqueue(sourceY[0]);
  //console.log(sourceX[0] + " " + sourceY[0]);
  let countDes = 0;
  var arr = document.getElementsByClassName("grid-item");
  let timer = 0;
  while (!qx.isEmpty()) {
    if (countDes == totalDes) break;

    let x = qx.peek();
    let y = qy.peek();
    //console.log(x + " " + y);
    qx.dequeue();
    qy.dequeue();

    let idx = parseInt(parseInt(x * 33) + y);
    //console.log(idx);
    if (
      arr[idx].style.backgroundColor != srcColor &&
      arr[idx].style.backgroundColor != desColor
    ) {
      arr[idx].style.backgroundColor = currStateColor;
    }
    for (let i = 0; i < 4; i++) {
      let xx = parseInt(x + dx[i]);
      let yy = parseInt(y + dy[i]);
      idx = parseInt(parseInt(xx * 33) + yy);
      if (xx >= 0 && xx < gridRow && yy >= 0 && yy < gridCol) {
        if (prvx[x][y] != xx || prvy[x][y] != yy) {
          if (
            prvx[xx][yy] == xx &&
            prvy[xx][yy] == yy &&
            arr[idx].style.backgroundColor != obsColor
          ) {
            qx.enqueue(xx);
            qy.enqueue(yy);
            prvx[xx][yy] = x;
            prvy[xx][yy] = y;

            if (arr[idx].style.backgroundColor == desColor) {
              countDes++;
            } else arr[idx].style.backgroundColor = nextStateColor;
          }
        }
      }
    }
  }
  for (let i = 0; i < destinationX.length; i++) {
    let p = destinationX[i],
      q = destinationY[i];
    console.log(p + " " + q);
    while (prvx[p][q] != p || prvy[p][q] != q) {
      var px = prvx[p][q],
        py = prvy[p][q];
      idx = parseInt(parseInt(px * 33) + py);
      arr[idx].style.backgroundColor = pathColor;
      (p = px), (q = py);
    }
    px = sourceX[0];
    py = sourceY[0];
    idx = parseInt(parseInt(px * 33) + py);
    arr[idx].style.backgroundColor = srcColor;
  }
}
