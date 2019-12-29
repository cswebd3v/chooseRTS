'use strict';

let games = ['Warcraft III', 'StarCraft II', 'Age of Empires II', 'StarCraft Remastered'];


function watchClick() {
    $('.go').click(function(event) {
        let choice = games[Math.floor(Math.random()*games.length)];
        clearChoice();
        printChoice(choice);
    });
}

function clearChoice() {
  $('#displayResults').empty();
}

function printChoice(choice) {
    $('#displayResults').append(
        `<h3>${choice}</h3>`
    );
}

$(watchClick());