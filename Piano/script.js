const note = document.querySelector('.note');
const noteOutput = document.querySelector('.note-output')


function playSound(e) {
    
    const key = document.querySelector(`button[data-key="${e.code}"]`);
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    
    if(!audio) return;
   

    audio.play();
    

    audio.currentTime = 0;
    
    key.classList.add('playing');

    if (e.code === 'KeyA') {
        noteOutput.textContent = "C"
    }
    if (e.code === 'KeyW') {
        noteOutput.innerHTML = "C♯/B♭"
    }

    if (e.code === 'KeyS') {
        noteOutput.textContent = "D"
    }

    if (e.code === 'KeyE') {
        noteOutput.textContent = "D♯/E♭"
    }

    if (e.code === 'KeyD') {
        noteOutput.textContent = "E"
    }
    if (e.code === 'KeyF') {
        noteOutput.textContent = "F"
    }
    if (e.code === 'KeyT') {
        noteOutput.textContent = "F♯/G♭"
    }
    if (e.code === 'KeyG') {
        noteOutput.textContent = "G"
    }
    if (e.code === 'KeyY') {
        noteOutput.textContent = "G♯/A♭"
    }
    if (e.code === 'KeyH') {
        noteOutput.textContent = "A"
    }
    if (e.code === 'KeyU') {
        noteOutput.textContent = "A♯/b♭"
    }
    if (e.code === 'KeyJ') {
        noteOutput.textContent = "B"
    }
  
}

const keys = Array.from(document.querySelectorAll('.keys'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}


window.addEventListener('keydown', playSound)
// note.addEventListener('keydown', playSound) 

var recordButton, stopButton, pauseButton, resumeButton, recorder, audioFile;



window.onload = function() {

    recordButton = document.getElementById('record');
    stopButton = document.getElementById('stop');
    pauseButton = document.getElementById('pause');
    resumeButton = document.getElementById('resume');
    

    navigator.mediaDevices.getUserMedia({

            audio: true

        })

        .then(function(stream) {
            recordButton.disabled = false;
            stopButton.disabled = true;
            pauseButton.disabled = true;
            resumeButton.disabled = true;
            recordButton.addEventListener('click', startRecording);
            stopButton.addEventListener('click', stopRecording);
            pauseButton.addEventListener('click', pauseRecording);
            resumeButton.addEventListener('click', resumeRecording);
            var options = {
                mimeType: 'audio/webm'

            }

            recorder = new MediaRecorder(stream, options);

            

            recorder.addEventListener('dataavailable', onRecordingReady);

        }, function() {
            recordButton.disabled = true;
            stopButton.disabled = true;
            pauseButton.disabled = true;
            resumeButton.disabled = true;
            document.querySelector("#audioMediaNotAvailable").show();

        }); 

};

function startRecording() {
    recordButton.disabled = true;
    stopButton.disabled = false;
    pauseButton.disabled = false;
    resumeButton.disabled = true;
    recorder.start();

}

function pauseRecording() {
    recordButton.disabled = true;
    stopButton.disabled = false;
    pauseButton.disabled = true;
    resumeButton.disabled = false;
    recorder.pause();

}

function resumeRecording() {
    recordButton.disabled = false;
    stopButton.disabled = false;
    pauseButton.disabled = false;
    resumeButton.disabled = true;
    recorder.resume();

}

function stopRecording() {
    recordButton.disabled = false;
    stopButton.disabled = true;
    pauseButton.disabled = false;
    resumeButton.disabled = true;
    recorder.stop();
    document.querySelector("#recording").hide();
    document.querySelector("#processing").show();

}

function onRecordingReady(e) {
    var audio = document.getElementById('audio');
    audioFile = e.data;
    audio.src = URL.createObjectURL(e.data);
    audio.play();

}