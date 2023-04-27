let batteryProgress = document.querySelector(".battery-progress");
let batteryProgressLevel = document.querySelector(".battery-percent");
let chargingState = document.querySelector(".charge-state");

navigator.getBattery().then(res => {
    let batteryLevel = res.level * 100 + "%";
    batteryProgressLevel.innerHTML = batteryLevel;

    batteryProgress.style.width = batteryLevel;

    if ((res.level *100) < 10) {
        batteryProgress.style.backgroundColor = "red";
    } else if ((res.level *100) > 10 && (res.level *100) < 35) {
        batteryProgress.style.backgroundColor = "orange";
    } else if ((res.level *100) > 35 && (res.level *100) < 75) {
        batteryProgress.style.backgroundColor = "orangered";
    } else if ((res.level *100) > 75 && (res.level *100) < 101) {
        batteryProgress.style.backgroundColor = "green";
    }

    if (res.charging) {
        chargingState.innerHTML = "(Charging)"
    }
})

