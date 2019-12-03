var type = [];
var index = [];
var arr = [];
var path = [];
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
function bfs(totalDes) {
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
  let countDes = 0;
  arr = document.getElementsByClassName("grid-item");
  while (!qx.isEmpty()) {
    if (countDes == totalDes) break;

    let x = qx.peek();
    let y = qy.peek();
    qx.dequeue();
    qy.dequeue();

    let idx = parseInt(parseInt(x * 33) + y);
    if (
      arr[idx].style.backgroundColor != srcColor &&
      arr[idx].style.backgroundColor != desColor
    ) {
      // arr[idx].style.backgroundColor = currStateColor;
      type.push("2");
      index.push(idx);
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
            } else {
              //arr[idx].style.backgroundColor = nextStateColor;
              type.push("1");
              index.push(idx);
            }
          }
        }
      }
    }
  }
  for (let i = 0; i < destinationX.length; i++) {
    let p = destinationX[i],
      q = destinationY[i];
    //console.log(p + " " + q);
    while (prvx[p][q] != p || prvy[p][q] != q) {
      var px = prvx[p][q],
        py = prvy[p][q];
      idx = parseInt(parseInt(px * 33) + py);
      path.push(idx);
      //arr[idx].style.backgroundColor = pathColor;
      (p = px), (q = py);
    }
    path.pop();
  }
  //console.log(type.length);
  for (let i = 0; i < type.length; i++) {
    visualizeGraph(i);
  }
  for (let i = 0; i < path.length; i++) {
    visualizePath(i);
  }
  //console.log("OK");
}
function visualizePath(i) {
  setTimeout(function() {
    arr[path[i]].style.backgroundColor = pathColor;
  }, Time * (type.length + i));
}
function visualizeGraph(i) {
  setTimeout(function() {
    //console.log(i);
    if (type[i] == "2") {
      arr[parseInt(index[i])].style.backgroundColor = currStateColor;
    } else {
      arr[parseInt(index[i])].style.backgroundColor = nextStateColor;
    }
  }, Time * i);
}
