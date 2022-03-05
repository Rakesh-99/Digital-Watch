

let fetchId = document.getElementById("clockBox");
let session = "PM"


function display() {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let res = hour + ":" + min + ":" + sec + " " + session;
    fetchId.innerHTML = res; 

   

    setTimeout(display, 1000);


}
display();