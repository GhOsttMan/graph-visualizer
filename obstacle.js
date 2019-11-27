var SelectedAlgo = "BFS";
function grid() {
  var arr = document.getElementsByClassName("grid-item");
  console.log(arr.length);
  var ob = 0;
  for (var i = 0; i < 792; i++) {
    arr[i].onmousedown = function() {
      ob = 1;
      this.style.backgroundColor = "black";
    };
  }
  for (var i = 0; i < 792; i++) {
    arr[i].onmouseup = function() {
      ob = 0;
      this.style.backgroundColor = "red";
    };
  }
  for (var i = 0; i < 792; i++) {
    arr[i].onmouseenter = function() {
      if (ob == 1) this.style.backgroundColor = "black";
    };
  }
  /*console.log(ob);
  var w = window.innerWidth;
  var h = window.innerHeight;
  var cww = $(".grid-item").width();
  var bd = $(".navbar").width();
  console.log(w + " " + h + " " + cww + " " + bd);
  //ob.style.backgroundColor = "red";*/
}
