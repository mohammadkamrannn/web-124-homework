var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
var suits = ['♠', '♥', '♦', '♣'];
var cards = [];

var $playerNum1 = document.getElementById('playerNum1');
var $playerNum2 = document.getElementById('playerNum2');
var $playerNum3 = document.getElementById('playerNum3');
var $playerNum4 = document.getElementById('playerNum4');

function makeCards() {
    for(var i = 0; i < suits.length; i++) {
        for(var j = 0; j < numbers.length; j++) {
            cards.push(numbers[j] + suits[i]);
        }
    }
    return cards;
};

function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

document.getElementById('twoPlayer').onclick = function() {
    cards = [];
    cards = shuffle(makeCards());
    $playerNum1.innerHTML = '<h3 class="text-center">بازیکن شماره 1</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[0] + '</p>' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[1] + '</p>' + '</div>';
    $playerNum2.innerHTML = '<h3 class="text-center">بازیکن شماره 2</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[2] + '</p>' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[3] + '</p>' + '</div>';
    $playerNum3.innerHTML = "";
    $playerNum4.innerHTML = "";
};

document.getElementById('threePlayer').onclick = function() {
    cards = [];
    cards = shuffle(makeCards());
    $playerNum1.innerHTML = '<h3 class="text-center">بازیکن شماره 1</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[0] + '</p>' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[1] + '</p>' + '</div>';
    $playerNum2.innerHTML = '<h3 class="text-center">بازیکن شماره 2</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[2] + '</p>' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[3] + '</p>' + '</div>';
    $playerNum3.innerHTML = '<h3 class="text-center">بازیکن شماره 3</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[4] + '</p>' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[5] + '</p>' + '</div>';
    $playerNum4.innerHTML = "";
};

document.getElementById('fourPlayer').onclick = function() {
    cards = [];
    cards = shuffle(makeCards());
    $playerNum1.innerHTML = '<h3 class="text-center">بازیکن شماره 1</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[0] + '</p>' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[1] + '</p>' + '</div>';
    $playerNum2.innerHTML = '<h3 class="text-center">بازیکن شماره 2</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[2] + '</p>' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[3] + '</p>' + '</div>';
    $playerNum3.innerHTML = '<h3 class="text-center">بازیکن شماره 3</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[4] + '</p>' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[5] + '</p>' + '</div>';
    $playerNum4.innerHTML = '<h3 class="text-center">بازیکن شماره 4</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[6] + '</p>' + '<p class="display-4 bg-white rounded w-120-px py-5 m-1 text-center">' + cards[7] + '</p>' + '</div>';
};