document.getElementById("btn").onclick = function() {
    var time = prompt("Please enter your time...");
    document.getElementById("btn").innerText = "ReEnter Time";
    var taskId = document.getElementById("task");

    taskId.innerText = "";

    if(time > 24 || time < 1 ){
        taskId.innerText = "Please enter a time between 1 and 24";
    } else if(time < 8 || time == null || time > 22){
        taskId.innerText = "You should be sleeping";
    } else if(time < 10){
        taskId.innerText = "Wake up";
    } else if(time < 12){
        taskId.innerText = "Go to work";
    } else if(time < 13){
        taskId.innerText = "Lunch";
    } else if(time < 17){
        taskId.innerText = "Go to work";
    } else if(time < 19){
        taskId.innerText = "Gym";
    } else if(time < 20){
        taskId.innerText = "Dinner Time";
    } else if(time < 22){
        taskId.innerText = "Watch TV";
    } else if(time = 22){
        taskId.innerText = "Time to go to sleeeeep";
    }
}



