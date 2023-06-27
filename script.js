var dinosaur=document.getElementById("dinosaur");
var cactus=document.getElementById("cactus");

function jump(){
    if(dinosaur.classList !="jump"){
        dinosaur.classList.add("jump");

        setTimeout(function(){
            dinosaur.classList.remove("jump");
        },300);
    }
}

var isAlive=setInterval(function(){
 var dinosaurtop=parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));

 var cactusleft=parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
 );
 if(cactusleft < 50 && cactusleft > 0 && dinosaurtop >= 140){
    alert("Oyun Bitti...");
 }
},10);

document.addEventListener("keydown",function(event){
    jump();
})