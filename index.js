
function playSound(key){
    switch(key){
        case 'q':
            audio = new Audio("sounds/piano-mp3_C4.mp3");
            audio.play();
            break;
        case 'w':
            audio = new Audio("sounds/piano-mp3_D4.mp3");
            audio.play();
            break;
        case 'e':
            audio = new Audio("sounds/piano-mp3_E4.mp3");
            audio.play();
            break;
        case 'r':
            audio = new Audio("sounds/piano-mp3_F4.mp3");
            audio.play();
            break;
        case 't':
            audio = new Audio("sounds/piano-mp3_G4.mp3");
            audio.play();
            break;
        case 'y':
            audio = new Audio("sounds/piano-mp3_A4.mp3");
            audio.play();
            break;
        case 'u':
            audio = new Audio("sounds/piano-mp3_B4.mp3");
            audio.play();
            break;
        case 'i':
            audio = new Audio("sounds/piano-mp3_C5.mp3");
            audio.play();
            break;
        case 'o':
            audio = new Audio("sounds/piano-mp3_D5.mp3");
            audio.play();
            break;
        case 'p':
            audio = new Audio("sounds/piano-mp3_E5.mp3");
            audio.play();
            break;
        case 'x':
            audio = new Audio("sounds/piano-mp3_F5.mp3");
            audio.play();
            break;
        case 'c':
            audio = new Audio("sounds/piano-mp3_G5.mp3");
            audio.play();
            break;
        case 'v':
            audio = new Audio("sounds/piano-mp3_A5.mp3");
            audio.play();
            break;
        case 'b':
            audio = new Audio("sounds/piano-mp3_B5.mp3");
            audio.play();
            break;
        case 'n':
            audio = new Audio("sounds/piano-mp3_C6.mp3");
            audio.play();
            break;
        case 'm':
            audio = new Audio("sounds/piano-mp3_D6.mp3");
            audio.play();
            break;     
    }

}

var len = document.querySelectorAll('.key').length;
for(let i=0; i<len; i++){
    // console.log("Hello" + i);
    let but = document.querySelectorAll('.key')[i];

    but.addEventListener('mousedown', function(event){
        but.classList.add('pressed');
        let key = but.classList[0];
        playSound(key);
    })

    but.addEventListener('mouseup', function(){
        but.classList.remove('pressed');
    })

    but.addEventListener('mouseout', function(){
        but.classList.remove('pressed');
    })
}

document.addEventListener('keydown', function(event){
    document.querySelector("."  + event.key).classList.add('pressed');
    playSound(event.key);
})

document.addEventListener('keyup', function(event){
    document.querySelector("."  + event.key).classList.remove('pressed');
})