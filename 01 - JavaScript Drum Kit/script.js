window.addEventListener(
    "keydown",
    (e) => {
        
        const audio = document.querySelector(`audio[data-key = "${e.code}"]`);
        const key = document.querySelector(`.key[data-key = "${e.code}"]`)
        if (!audio) return; //stops the function all together
        audio.currentTime = 0; //rewidns it to the start
        audio.play();

        key.classList.toggle('playing');


});

function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skipt it if it's not a transform
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//Under does more or less the same, but with less steps and with de keyup event

/*
window.addEventListener('keyup', function(e) {
    const key = document.querySelector(`.key[data-key = "${e.code}"]`);
    key.classList.remove('playing');
});
*/