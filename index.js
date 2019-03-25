var song = document.getElementById("song");
function playSong(){
  song.play();
}
function pauseSong(){
  song.pause();
}
var title = document.getElementById("title");
var page1 = document.getElementById("page1");

function close(id) {
    document.getElementById(id).style.display="none";
}
function stopAnim(id) {
    document.getElementById(id).style.animation="none";
}
title.addEventListener("click", function (){

    title.style.color="darkred"; 
    title.style.textShadow ="4px 3px black";
    stopAnim("title")

});

document.getElementById("title").addEventListener("click", function (){
    page1.style.display="block";
    document.getElementById("wrapper").style.display="none";
});

//for second page
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var right = document.getElementById("right");
var left = document.getElementById("left");


right.addEventListener("click", function (){
    page1.style.backgroundPosition = "right";
    left.style.display = "block"
    right.style.display = "none"
    page2.style.left = "-100%";
    page3.style.left ="0%";
});

left.addEventListener("click", function (){
    page1.style.backgroundPosition = "left";
    left .style.display = "none"
    right.style.display = "block";
    page2.style.left = "0";
    page3.style.left ="100%"; 
});

var santabag = document.getElementById("santabag");
var reindeer2 = document.getElementById("reindeer2");
var counter =  document.getElementById("factNum");
var x = 10;

function finish() {
    if(x==0){setTimeout(function() { 
        document.getElementById("fin").style.display="block";
    },2000);
    } else {false}   
}

santabag.addEventListener("mouseenter", function () {
    santabag.style.animation ="jump 2s infinite";
});

santabag.addEventListener("click", function () {
    document.getElementById("fact1").style.display = "block";
    
  var fa=0;
    fa++;
    if(fa == 1){
        counter.innerHTML = x - 1;
        x--;
        finish();
    }
});

document.getElementById("fact1C").addEventListener("click", function () {
    close("fact1");
    stopAnim("santabag")
   
});
var jinglebells = document.getElementById("jinglebells");
reindeer2.addEventListener("click", function (){
    jinglebells.play();
    document.getElementById("fact2").style.display = "block";
    reindeer2.style.top = "12%";
    reindeer2.style.transform = "rotate(-7deg)";
    
    var fb=0;
    fb++;
    if(fb == 1){
        counter.innerHTML = x - 1;
        x--;
      finish();
    
    }
});

document.getElementById("fact2C").addEventListener("click", function () {
    close("fact2");
});


var candycane = document.getElementById("candycane");
candycane.addEventListener("mouseenter", function () {
    candycane.style.animation ="wiggle 1s loop";
});


candycane.addEventListener("click", function () {
    document.getElementById("fact3").style.display="block" ;
    
    var fc=0;
    fc++;
    if(fc == 1){
        counter.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact3C").addEventListener("click", function () {
    close("fact3");
    stopAnim("candycane")
});
document.getElementById("tree").addEventListener("click", function () {
    document.getElementById("fact6").style.display="block";
    
    var ff=0;
    ff++;
    if(ff == 1){
        counter.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact6C").addEventListener("click", function () {
   close("fact6");
});

var mistletoe = document.getElementById("mistletoe");
mistletoe.addEventListener("mouseenter", function () {
    mistletoe.style.animation="rotate 3s infinite";
});

document.getElementById("russia").addEventListener("click", function () {
    document.getElementById("fact4").style.display = "block";
    
    var fd=0;
    fd++;
    if(fd == 1){
        counter.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact4C").addEventListener("click", function () {
    close("fact4");
});

var hohoho = document.getElementById("hohoho");
document.getElementById("santaclaus").addEventListener("click", function () { 
  hohoho.play();
  document.getElementById("fact5").style.display="block";
  
    var fe=0;
    fe++;
    if(fe == 1){
        counter.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact5C").addEventListener("click", function () {
    close("fact5");
});


document.getElementById("snowman").addEventListener("click", function () {
    document.getElementById("fact7").style.display = "block";
    
    var fg=0;
    fg++;
    if(fg == 1){
        counter.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact7C").addEventListener("click", function () {
   close("fact7");
});

document.getElementById("eggnog").addEventListener("click", function() {
    document.getElementById("fact8").style.display = "block";
  
    var fh=0;
    fh++;
    if(fh == 1){
        counter.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact8C").addEventListener("click", function () {
    close("fact8");
});
var milk = document.getElementById("milk");
milk.addEventListener("mouseenter", function () {
    milk.style.animation ="jump 2s loop";
});

var stocking = document.getElementById("stocking");
stocking.addEventListener("mouseenter", function () {
    stocking.style.animation ="wiggle 2s loop";
});

document.getElementById("stocking").addEventListener("click", function () {
    document.getElementById("fact9").style.display = "block";
    
    var fi=0;
    fi++;
    if(fi == 1){
        counter.innerHTML = x - 1;
        x--;
        finish();
    
    }
})

document.getElementById("fact9C").addEventListener("click", function () {
    close("fact9");
    stopAnim("stocking")
});

document.getElementById("kfc").addEventListener("click", function () {
    document.getElementById("fact10").style.display = "block";
    
    var fj=0;
    fj++;
    if(fj == 1){
        counter.innerHTML = x - 1;
        x--;
        finish();
    
    }
});

document.getElementById("fact10C").addEventListener("click", function () {
    close("fact10");
    
 
});



