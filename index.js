var length = document.querySelectorAll("button").length;

for (var i =0; i < length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var button = this.innerHTML;
        buttonAnimination(button);
        makesound(button);
    });
}
document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonAnimination(event.key);
})
    function makesound (key) {
        switch (key) {
            case "w":  
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            case 'a':  
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            case 's':  
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            case 'd':  
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            case 'j':  
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            case 'k':  
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            case 'l':  
            var audio = new Audio('sounds/snare.mp3');
            audio.play();  
        }
    }

    function buttonAnimination(currentKey) {
        var activeKey = document.querySelector("." + currentKey);
        activeKey.classList.add("pressed");    
        setTimeout(function(){
            activeKey.classList.remove("pressed");         
        }, 100);

    }
