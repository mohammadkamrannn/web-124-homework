var $taskCpu = document.getElementById("taskCpu");
var $taskUser = document.getElementById("taskUser");
var $countCpu = document.getElementById("countCpu");
var $countUser = document.getElementById("countUser");
var $winerLost = document.getElementById("winerLost");

var taskCpu = "";
var taskUser = "";
var winerLost = "";
var countCpu = 0;
var countUser = 0;

var $sang = 0;
var $kaghaz = 1;
var $gheychi = 2;

document.getElementById("sang").onclick = function() {
var rand = Math.floor(Math.random() * 3);    
if(countCpu == 0 && countUser == 0){
    $winerLost.innerHTML = "بازی کن";
}
switch(rand){
    case $sang:
        taskCpu = "کامپیوتر : " + "<i class='las la-fist-raised la-3x'></i>";
        taskUser = "<i class='las la-fist-raised la-3x'></i>" + " : شما";
        // winerLost = "مساوی";
    break;
    case $kaghaz:
        taskCpu = "کامپیوتر : " + "<i class='las la-hand-paper la-3x'></i>";
        taskUser = "<i class='las la-fist-raised la-3x'></i>" + " : شما";
        countCpu += 1;
        // winerLost = "باختی";
    break;
    case $gheychi:
        taskCpu = "کامپیوتر : " + "<i class='las la-hand-peace la-3x'></i>";
        taskUser = "<i class='las la-fist-raised la-3x'></i>" + " : شما";
        countUser += 1;
        // winerLost = "بردی";
    break;
}

$taskCpu.innerHTML = taskCpu;
$countCpu.innerHTML = countCpu;
$taskUser.innerHTML = taskUser;
$countUser.innerHTML = countUser;
// $winerLost.innerHTML =winerLost;
switch(5){
    case countCpu:
        $winerLost.innerHTML = "<div class='alert alert-danger' role='alert'>متاسفانه شما بازنده شدید!  <i class='las la-frown'></i></div>";
        countCpu = 0;
        countUser = 0;
    break;
    case countUser:
        $winerLost.innerHTML = "<div class='alert alert-success' role='alert'>شما برنده شدید  <i class='las la-grin'></i></div>";
        countCpu = 0;
        countUser = 0;
    break;
}

};

document.getElementById("kaghaz").onclick = function() {
var rand = Math.floor(Math.random() * 3);    
if(countCpu == 0 && countUser == 0){
    $winerLost.innerHTML = "بازی کن";
}
    
switch(rand){
    case $sang:
        taskCpu = "کامپیوتر : " + "<i class='las la-fist-raised la-3x'></i>";
        taskUser = "<i class='las la-hand-paper la-3x'></i>" + " : شما";
        // winerLost = "بردی";
        countUser += 1;
    break;
    case $kaghaz:
        taskCpu = "کامپیوتر : " + "<i class='las la-hand-paper la-3x'></i>";
        taskUser = "<i class='las la-hand-paper la-3x'></i>" + " : شما";
        // winerLost = "مساوی";
    break;
    case $gheychi:
        taskCpu = "کامپیوتر : " + "<i class='las la-hand-peace la-3x'></i>";
        countCpu += 1;
        taskUser = "<i class='las la-hand-paper la-3x'></i>" + " : شما";
        // winerLost = "باختی";
    break;
}
    
$taskCpu.innerHTML = taskCpu;
$countCpu.innerHTML = countCpu;
$taskUser.innerHTML = taskUser;
$countUser.innerHTML = countUser;
// $winerLost.innerHTML =winerLost;
switch(5){
    case countCpu:
        $winerLost.innerHTML = "<div class='alert alert-danger' role='alert'>متاسفانه شما بازنده شدید!  <i class='las la-frown'></i></div>";
        countCpu = 0;
        countUser = 0;
    break;
    case countUser:
        $winerLost.innerHTML = "<div class='alert alert-success' role='alert'>شما برنده شدید  <i class='las la-grin'></i></div>";
        countCpu = 0;
        countUser = 0;
    break;
}
};

document.getElementById("gheychi").onclick = function() {
var rand = Math.floor(Math.random() * 3);    
if(countCpu == 0 && countUser == 0){
    $winerLost.innerHTML = "بازی کن";
}
  
switch(rand){
        case $sang:
        taskCpu = "کامپیوتر : " + "<i class='las la-fist-raised la-3x'></i>";
        countCpu += 1;
        taskUser = "<i class='las la-hand-peace la-3x'></i>" + " : شما";
        // winerLost = "باختی";
    break;
    case $kaghaz:
        taskCpu = "کامپیوتر : " + "<i class='las la-hand-paper la-3x'></i>";
        taskUser = "<i class='las la-hand-peace la-3x'></i>" + " : شما";
        // winerLost = "بردی";
        countUser += 1;
    break;
    case $gheychi:
        taskCpu = "کامپیوتر : " + "<i class='las la-hand-peace la-3x'></i>";
        taskUser = "<i class='las la-hand-peace la-3x'></i>" + " : شما";
        // winerLost = "مساوی";
    break;
}
        
$taskCpu.innerHTML = taskCpu;
$countCpu.innerHTML = countCpu;
$taskUser.innerHTML = taskUser;
$countUser.innerHTML = countUser;
// $winerLost.innerHTML =winerLost;
switch(5){
    case countCpu:
        $winerLost.innerHTML = "<div class='alert alert-danger' role='alert'>متاسفانه شما بازنده شدید!  <i class='las la-frown'></i></div>";
        countCpu = 0;
        countUser = 0;
    break;
    case countUser:
        $winerLost.innerHTML = "<div class='alert alert-success' role='alert'>شما برنده شدید  <i class='las la-grin'></i></div>";
        countCpu = 0;
        countUser = 0;
    break;
}
};






