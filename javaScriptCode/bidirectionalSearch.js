var type = [];
var index = [];
var arr = [];
var path = [];

function bidirection() {
  let qx = new myQueue();
  let qy = new myQueue();
  let prvx = new Array(35);
  let prvy = new Array(35);
  let cnt = new Array(35);
  for (let i = 0; i < 35; i++) {
    prvx[i] = [];
    prvy[i] = [];
    cnt[i] = [];
    for (let j = 0; j < 35; j++) {
      prvx[i][j] = i;
      prvy[i][j] = j;
      cnt[i][j] = 0;
    }
  }
  qx.enqueue(sourceX[0]);
  qy.enqueue(sourceY[0]);
  cnt[sourceX[0]][sourceY[0]] = 1;
  cnt[destinationX[0]][destinationY[0]] = 2;
  qx.enqueue(destinationX[0]);
  qy.enqueue(destinationY[0]);
  destinationX.pop();
  destinationY.pop();
  arr = document.getElementsByClassName("grid-item");
  let ok = 1;
  while (!qx.isEmpty() && ok == 1) {
    let x = qx.peek();
    let y = qy.peek();
    qx.dequeue();
    qy.dequeue();

    let idx = parseInt(parseInt(x * 33) + y);
    if (
      arr[idx].style.backgroundColor != srcColor &&
      arr[idx].style.backgroundColor != desColor
    ) {
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
            cnt[xx][yy] = cnt[x][y];
            if (arr[idx].style.backgroundColor == desColor) {
            } else {
              type.push("1");
              index.push(idx);
            }
          } else if (cnt[x][y] != cnt[xx][yy] && cnt[xx][yy] != 0) {
            ok = 0;

            destinationX.push(x);
            destinationY.push(y);
            destinationX.push(xx);
            destinationY.push(yy);
            break;
          }
        }
      }
    }
  }

  for (let i = 0; i < destinationX.length; i++) {
    let p = destinationX[i],
      q = destinationY[i];
    idx = parseInt(parseInt(p * 33) + q);
    path.push(idx);
    while (prvx[p][q] != p || prvy[p][q] != q) {
      var px = prvx[p][q],
        py = prvy[p][q];
      idx = parseInt(parseInt(px * 33) + py);
      path.push(idx);
      (p = px), (q = py);
    }
    path.pop();
  }
  for (let i = 0; i < type.length; i++) {
    visualizeGraph(i);
  }
  for (let i = 0; i < path.length; i++) {
    visualizePath(i);
  }
}
function visualizePath(i) {
  setTimeout(function() {
    arr[path[i]].style.backgroundColor = pathColor;
  }, Time * (type.length + i));
}
function visualizeGraph(i) {
  setTimeout(function() {
    if (type[i] == "2") {
      arr[parseInt(index[i])].style.backgroundColor = currStateColor;
    } else {
      arr[parseInt(index[i])].style.backgroundColor = nextStateColor;
    }
  }, Time * i);
}
