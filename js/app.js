var $numberOne = document.getElementById("numberOne");
var $numberTwo = document.getElementById("numberTwo");
var $result = document.getElementById("result");

document.getElementById("plus").onclick = function(a, b) {
    a = Number($numberOne.value);
    b = Number($numberTwo.value);
    $result.innerText = a + b;
}
document.getElementById("minus").onclick = function(a, b) {
    a = Number($numberOne.value);
    b = Number($numberTwo.value);
    $result.innerText = a - b;
}
document.getElementById("division").onclick = function(a, b) {
    a = Number($numberOne.value);
    b = Number($numberTwo.value);
    $result.innerText = a / b;
}
document.getElementById("multiply").onclick = function(a, b) {
    a = Number($numberOne.value);
    b = Number($numberTwo.value);
    $result.innerText = a * b;
}
document.getElementById("clear").onclick = function() {
    $result.innerText = 0;
    $numberOne.value = 0;
    $numberTwo.value = 0;
}