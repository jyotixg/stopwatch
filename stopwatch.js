var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
var count = 0;
var ans = document.getElementById('para');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

function start() {
    stoptime = false;
    count++;
    if(count==1){
        timer();
        btn1.style.display = "none";
        btn2.style.display = "flex";
        btn3.style.display = "none";
    }
}

function stop(){
    btn1.style.display = "flex";
    btn2.style.display = "none";
    btn3.style.display = "flex";
    stoptime = true;
    count = 0;
}

function reset() {
    ans.innerHTML = `00 : 00 : 00`;
    stoptime = true;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    btn3.style.display = "none";
}

function timer() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec++;

        if (sec == 60) {
            min++;
            sec = 0;
        }

        if (min == 60) {
            hr++;
            min = 0;
            sec = 0;
        }

        if (hr < 10) {
            hr = "0" + hr;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }

        ans.innerHTML = `${hr} : ${min} : ${sec}`;
        setTimeout("timer()", 1000);
    }
}
