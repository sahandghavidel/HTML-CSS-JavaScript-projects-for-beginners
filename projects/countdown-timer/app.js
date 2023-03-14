var button = document.getElementById("button");
const input = document.querySelectorAll(".select");

button.addEventListener('click', ()=> {
    var enterDate = document.getElementById("enterDate").value;
    var enterTime = document.getElementById("enterTime").value; 
    
    const last = enterDate + " " + enterTime;
    const end = new Date(last);

    calculate(end);

    const myInterval = setInterval(
        () => {
            calculate(end);
        },
        1000
    )

    var stop = document.getElementById("stop");
    stop.addEventListener('click', () => {
        clearInterval(myInterval);
    })
})

const calculate = (end) => {
    const now = new Date();
    
    if(end > now)
    {
        const diff = (end - now)/1000;

        // convert into day
        var day = Math.floor(diff / (3600 * 24));
        input[0].value = day;

        // convert into hour
        var hour = Math.floor((diff / 3600) % 24);
        input[1].value = hour;

        // convert into min
        var min = Math.floor((diff / 60) % 60);
        input[2].value = min;

        //convert into sec
        var sec = Math.floor(diff % 60);
        input[3].value = sec;
    }
    else
    {
        input[0].value = 0;
        input[1].value = 0;
        input[2].value = 0;
        input[3].value = 0;
    }
}

var reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    window.location.reload();
})