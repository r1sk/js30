const btns = document.querySelectorAll('.btn');
let i = 0;
document.addEventListener('keypress' , ()=>{
    const key = event.key;
    let path = "music/" + key +".wav";
    switch(key){
        case "a":
        play_audio(path);
        break;

        case "s":
        play_audio(path);
        break;
 
        case "d":
        play_audio(path);
        break;

        case "f":
        play_audio(path);
        break;

        case "g":
            play_audio(path);
            break;

        case "h":
            play_audio(path);
            break;

        case "j":
            play_audio(path);
            break;
        
        case "k":
            play_audio(path);
            break;
    }
});


/* WITH CLICK EVENT THIS CAN BE DONE */
/* btns.forEach(element => {
    const tune_name = element.classList[1];

    element.addEventListener('click' , ()=>{   
        const path = "music/"+ tune_name +".wav";
        play_audio(path);
    });
}); 
*/
function play_audio(path){
    const audioObj = new Audio(path);
    audioObj.play();
}  