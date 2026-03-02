function choice1() {
    document.getElementById("story-text").innerText =
        "You turn around slowly. A shadow stands behind you.";

    document.getElementById("choices").innerHTML =
        `<button onclick="choice3()">Confront it</button>
         <button onclick="choice4()">Run</button>`;
}

function choice2() {
    document.getElementById("story-text").innerText =
        "You keep walking. Footsteps follow your rhythm.";

    document.getElementById("choices").innerHTML =
        `<button onclick="choice5()">Hide behind a tree</button>
         <button onclick="choice6()">Call out</button>`;
}

function choice3() {
    document.getElementById("story-text").innerText =
        "The shadow smiles. It knows your name.";
    document.getElementById("choices").innerHTML = "";
}

function choice4() {
    document.getElementById("story-text").innerText =
        "You run. But the forest rearranges itself.";
    document.getElementById("choices").innerHTML = "";
}

function choice5() {
    document.getElementById("story-text").innerText =
        "Something whispers above you.";
    document.getElementById("choices").innerHTML = "";
}

function choice6() {
    document.getElementById("story-text").innerText =
        "Your voice echoes… but it wasn’t your voice.";
    document.getElementById("choices").innerHTML = "";
}

function revealClue() {
    document.getElementById("clue-text").classList.remove("hidden");
    document.getElementById("clue-text").innerText =
        "Hidden Clue: The demon was never outside. It was always in the narrator.";
}
let musicPlaying = false;
let musicStarted = false;
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

function toggleMusic() {
    if (musicPlaying) {
        music.pause();
        musicBtn.textContent = '🔇';
        musicPlaying = false;
    } else {
        music.volume = 0.35;
        music.play();
        musicBtn.textContent = '🔊';
        musicPlaying = true;
    }
}

// Auto-start on FIRST click only — won't interfere with story buttons
window.addEventListener('click', function startMusic() {
    if (!musicStarted) {
        musicStarted = true;
        music.volume = 0.35;
        music.play().then(() => {
            musicBtn.textContent = '🔊';
            musicPlaying = true;
        }).catch(() => {});
    }
}, true); // true = capture phase, fires before onclick handlers