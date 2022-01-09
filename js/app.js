document.getElementById("btn").onclick = function() {
    
    var time = prompt("Please enter your time...");

    document.getElementById("btn").innerText = "ReEnter Time";

    var taskId = document.getElementById("task");

    task = "";

    if(time > 24 || time < 1 ){
        task = "Please enter a time between 1 and 24";
    } else if(time < 8 || time == null || time > 22){
        task = "You should be sleeping";
    } else if(time < 10){
        task = "Wake up";
    } else if(time < 12){
        task = "Go to work";
    } else if(time < 13){
        task = "Lunch";
    } else if(time < 17){
        task = "Go to work";
    } else if(time < 19){
        task = "Gym";
    } else if(time < 20){
        task = "Dinner Time";
    } else if(time < 22){
        task = "Watch TV";
    } else if(time = 22){
        task = "Time to go to sleeeeep";
    }

    taskId.innerText = task;

}



