

let fetchId = document.getElementById("clockBox");
let session = "PM"


function display() {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();


    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
    }

    if (hour <= 9) {
        hour =  "0" + hour;
    }
    if (min <= 9) {
        min = "0" + min;
    }
    if (sec <= 9) {
        sec = "0" + sec;
    }
    

    let res = hour + ":" + min + ":" + sec + " " + session;
    fetchId.innerHTML = res; 

    
   

    setTimeout(display, 1000);
    


}
display();