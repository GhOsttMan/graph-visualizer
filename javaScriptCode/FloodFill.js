var type = [];
var index = [];
var arr = [];
var path = [];

function flood(totalDes) {
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
  let stx = [];
  let sty = [];
  stx.push(sourceX[0]);
  sty.push(sourceY[0]);
  let countDes = 0;
  let stSize = 1;
  arr = document.getElementsByClassName("grid-item");
  while (stx.length > 0) {
    if (countDes == totalDes) break;
    let x = stx[stSize - 1];
    let y = sty[stSize - 1];
    stx.pop();
    sty.pop();
    stSize--;
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
            stx.push(xx);
            sty.push(yy);
            prvx[xx][yy] = x;
            prvy[xx][yy] = y;
            stSize++;

            if (arr[idx].style.backgroundColor == desColor) {
              countDes++;
            } else {
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
    while (prvx[p][q] != p || prvy[p][q] != q) {
      var px = prvx[p][q],
        py = prvy[p][q];
      idx = parseInt(parseInt(px * 33) + py);
      if (arr[idx].style.backgroundColor != desColor) path.push(idx);
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
