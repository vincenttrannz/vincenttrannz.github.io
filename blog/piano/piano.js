console.log("Here is the Piano");


const whiteKeys = ['a','s','d','f','g','h','j'];
const blackKeys = ['q','w','r','t','y'];

const keys = document.querySelectorAll(".Key");
const whiteNotes = document.querySelectorAll(".white.Key");
const blackNotes = document.querySelectorAll(".black.Key");

keys.forEach(key =>{
    key.addEventListener('click', ()=> playNote(key))
})

document.addEventListener('keydown', (event)=>{
    if(event.repeat) return
    const key = event.key
    const whiteKeysIndex = whiteKeys.indexOf(key)
    const blackKeysIndex = blackKeys.indexOf(key)
    // greater than negative 1, because the array start counting at 0. If somehow it is smaller than 0, it's broken
    if(whiteKeysIndex > -1) playNote(whiteNotes[whiteKeysIndex])
    if(blackKeysIndex > -1) playNote(blackNotes[blackKeysIndex])
})

function playNote(key){
    let keyAudio = document.getElementById(key.dataset.key)
    keyAudio.currentTime = 0;
    key.classList.toggle("press")
    keyAudio.addEventListener('ended', ()=>{
        key.classList.remove("press");
    })
    keyAudio.play()
}
