let starttime;
let clock;
let spd;


function start() {
    starttime = new Date()
    clock = document.getElementById("timer")
    spd = document.getElementById("speed")
    document.getElementById("but").style.display = "none"
    frame()
}

function floor(x) {
    if (x < 0) {
        return Math.ceil(x);
    }
    return Math.floor(x);
}

function clocktext(min, sec){
    let sign
    if(sec < 0 || min < 0){
        sign = "-"
    }else{
        sign = "+"
    }
    return sign + Math.abs(min).toString().padStart(2, "0") + ":" + Math.abs(sec).toString().padStart(2, "0")
}


function frame() {
    let now = new Date()
    let seconds = Math.abs(now.getTime() - starttime.getTime()) / 1000;
    console.log(seconds)
    let clocktime = Math.round(seconds) - 60

    let min = floor(clocktime / 60)
    let sec = clocktime % 60

    clock.innerText = clocktext(min, sec)


    if(clocktime < 0){
        spd.innerText = "Warm-up"
    }else{
        spd.innerText = (6 + Math.floor(clocktime/30) * 0.3).toFixed(1) + " km/h"
    }

    requestAnimationFrame(frame)
}
