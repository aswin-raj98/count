const decBtn= document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
const incBtn = document.getElementById("incBtn");
const num = document.getElementById("num");
let count = 0;
incBtn.onclick = function(){
    count++;
    num.textContent=count;
}
decBtn.onclick = function(){
    count--;
    num.textContent=count;
}
resetBtn.onclick = function(){
    count = 0;
    num.textContent=count;
}