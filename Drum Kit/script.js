

// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
//   }

//   function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.code}"]`);
//     const key = document.querySelector(`div[data-key="${e.code}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();

//   }

//   const keys = Array.from(document.querySelectorAll('.key'));
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener('keydown', playSound);




function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if (!audio) return;
    audio.play();

    audio.currentTime = 0;
    key.classList.add('playing')

};

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

window.addEventListener('keydown', playSound);


// use data attributes to hook up data key for keys and audio
// keyboarde.keycode is depreciated; use keyboarde.code instead ie. (e.code)


// create e listener for keydown on e
// must replace data-key with keya for example
// declare constant variables for audio data-key attribute selector for e keycode
// if bang return - stops function from running

// declare const var for keys and add event listener for transition



// on window, add listener event for keydown at function event
// declare const variables for audio and key at dataattributes for the event code
        // key is to add animation
// if its not audio, do nothing
// if it is audio, play
// rewind to start by putting currenttime to 0 or start
// add classlist of playing to key so to add animation to the transition 

// remove classlist so to do transitioned end event
    // do so by declaring const variable keys query selector all for all keys
    // for each keys, key function key.addevent listener for transitionend at removeTransition function
    // can't listen for event with keys - cant listen to every array without looping

    // make function removeTransition for event
        // if event property name does not equal transform, return
        // or else everything transofrms
        // remove classlist of playing from key via this

        // functiion playsound on e to host logic and reference it on window
