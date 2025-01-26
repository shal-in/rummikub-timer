// Timer settings
const timerSettings = document.querySelector(".timer-settings");
const minusBtnEl = timerSettings.querySelector(".minus");
const plusBtnEl = timerSettings.querySelector(".plus");
const timeEl = timerSettings.querySelector(".time");
const timerDiv = document.querySelector(".timer p");

let time = parseInt(localStorage.getItem("time"));
if (!time) {
    time = parseInt(timeEl.innerHTML);
} else {
    timerDiv.textContent = time;
    timeEl.textContent = time;
}

function updateTime(time, action) {
    if (action === "plus") {
        time += 15;
    } else if (action === "minus") {
        time -= 15;
    }

    if (time > 180) {
        time = 180;
    } else if (time < 15) {
        time = 15;
    }

    timeEl.textContent = time;
    if (!intervalId) {
        timerDiv.textContent = time;
    }

    return time;
}

minusBtnEl.addEventListener("click", () => {
    time = updateTime(time, "minus");
    minusBtnEl.blur();
});

plusBtnEl.addEventListener("click", () => {
    time = updateTime(time, "plus");
    plusBtnEl.blur();
});

// Timer
let intervalId;

function startTimer(time) {
    if (intervalId) {
        clearInterval(intervalId);

    }
    document.documentElement.style.setProperty("--background", `var(--start-${paintIndex})`);
    setTimeout(() => {
        document.documentElement.style.setProperty("--background", `var(--background-${paintIndex})`);
    }, 400)

    localStorage.setItem("time", time);

    // Start the countdown immediately
    timerDiv.textContent = time;
    time--;

    intervalId = setInterval(() => {
        if (time <= 0) {
            document.documentElement.style.setProperty("--background", `var(--end-${paintIndex})`);

            timerDiv.textContent = time;
            clearInterval(intervalId);
            intervalId = null;
        } else {
            document.documentElement.style.setProperty("--background", `var(--background-${paintIndex})`);
            timerDiv.textContent = time;
            time--;
        }
    }, 1000);
}

function timerFunction(time) {
    startTimer(time);
}

timerDiv.addEventListener("click", () => {
    timerFunction(time);
});

document.addEventListener("keyup", (e) => {
    if (e.key === " ") {
        timerFunction(time);
    }
});


// paint

const paintBtnEl = document.querySelector(".paint")
let paintIndex = localStorage.getItem("paintIndex")
if (!paintIndex){
    paintIndex = 0
}


function changePaint(){
    paintIndex += 1
    if(paintIndex > 2){
        paintIndex = 0
    }

    document.documentElement.style.setProperty("--background", `var(--background-${paintIndex})`);
    document.documentElement.style.setProperty("--start", `var(--start-${paintIndex})`);
    document.documentElement.style.setProperty("--end", `var(--end-${paintIndex})`);
    document.documentElement.style.setProperty("--text", `var(--text-${paintIndex})`);
}



paintBtnEl.addEventListener("click", () => {
    changePaint();

    paintBtnEl.blur();
})

// portfolio

const linkEl = document.querySelector(".header h2 span")
linkEl.addEventListener("click", () => {
    let url = "https://byshalin.com"
    window.open(url, "_blank");
})