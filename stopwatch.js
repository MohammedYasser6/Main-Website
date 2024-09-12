
const start = document.querySelector(".mian-box .Start");
const pause = document.querySelector(".mian-box .Pause");
const reset = document.querySelector(".mian-box .Reset");


const milliescendsElement = document.getElementById("smilliescends");
const secElement = document.getElementById("sseconds");
const minElement = document.getElementById("sminutes");
const hrElement = document.getElementById("shours");
const digits=document.querySelector(".digits")

function updateDisplay() {
  milliescendsElement.innerHTML = formatTimeUnit(milliescends, 3);
  secElement.innerHTML = formatTimeUnit(sec);
  minElement.innerHTML = formatTimeUnit(min);
  hrElement.innerHTML = formatTimeUnit(hr);
}

let hr = 0;
let min = 0;
let sec = 0;
let milliescends = 0;
let intervalId = null;


start.addEventListener("click", () => {
  if (intervalId) return;

  intervalId = setInterval(() => {
      milliescends += 11;
      if (milliescends >= 1000) {
        sec++;
        milliescends = 0;
        if (sec === 60) {
          min++;
          sec = 0;
          if (min === 60) {
            hr++;
            min = 0;
          }
        }
      }
     milliescends < 100 ? milliescendsElement.innerHTML = `0${milliescends}`: milliescendsElement.innerHTML = milliescends;
     sec < 10 ? secElement.innerHTML = `0${sec}`: secElement.innerHTML = sec;
     min < 10 ? minElement.innerHTML = `0${min}`: minElement.innerHTML = min;
     hr < 10 ? hrElement.innerHTML = `0${hr}`: hrElement.innerHTML = hr;
    }, 11);
  })

  pause.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null; // Clear intervalId to prevent unintended behavior
  });
  
  // Reset button event listener
  reset.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    sec=0
    min=0
    hr=0
    milliescends=0
    milliescendsElement.innerHTML = `000`;
    secElement.innerHTML = `00`;
    minElement.innerHTML = `00`;
    hrElement.innerHTML = `00`;
    // Reset the time values
   
  }); 