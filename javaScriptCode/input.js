var sx = -1 , sy = -1;
var src = 0 , des = 0;
function InputSource(){
    if(Obstacle == 1) offObstacle();
    if(des == 1) offDes();
    src = 1;
    var arr = document.getElementsByClassName("grid-item");
    for(var i = 0; i < 792; i++){
        arr[i].onclick = function(){
            if(this.style.backgroundColor == "black" || this.style.backgroundColor == "red") {
                //nothing to do
            }
            else if(this.style.backgroundColor == "yellow"){
                this.style.backgroundColor = "rgba(64, 238, 215, 0.993)";
            }else {
                for(var j = 0; j < 792; j++){
                    if(arr[j].style.backgroundColor == "yellow"){
                        arr[j].style.backgroundColor = "rgba(64, 238, 215, 0.993)";
                        break;
                    }
                }
                this.style.backgroundColor = "yellow";
            }
        };
    }
}
function offSrc(){
    src = 0;
    var arr = document.getElementsByClassName("grid-item");
    for(var i = 0; i < 792; i++){
        arr[i].onclick = function(){
        };
    }
}
function offDes(){
    des = 0;
    var arr = document.getElementsByClassName("grid-item");
    for(var i = 0; i < 792; i++){
        arr[i].onclick = function(){
        };
    }
}
function InputDes(){
    if(Obstacle == 1) offObstacle();
    if(src == 1) offSrc();
    des = 1;
    var arr = document.getElementsByClassName("grid-item");
    for(var i = 0; i < 792; i++){
        arr[i].onclick = function(){
            if(this.style.backgroundColor == "black" || this.style.backgroundColor == "yellow") {
                //nothing to do
            }
            else if(this.style.backgroundColor == "red"){

                this.style.backgroundColor = "rgba(64, 238, 215, 0.993)";
            }else {
                this.style.backgroundColor = "red";
            }
        };
    }
}