function DisplayTime  () {
    let time = new Date();
    let hrs  = time.getHours();
    let min  = time.getMinutes();
    let sec  = time.getSeconds();
    document.getElementById("Hours").innerHTML = hrs;
    document.getElementById("Minutes").innerHTML = min;
    document.getElementById("Seconds").innerHTML = sec;
    let AMPM = document.getElementById("AMPM");
    if(AMPM >= 12){
        AMPM.innerText = "PM"
    }
    else {
        AMPM.innerText = "AM"
    }
}
setInterval(DisplayTime,1000);
 