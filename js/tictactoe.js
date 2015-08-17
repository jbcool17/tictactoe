var Tictactoe = {
    //Game Code
    consoleLog: function (e) {
        //for testing
         console.log('consoleLog function has run on BUTTON: ', e.target.id, $(e.target).parent().parent().attr('class'));
         var row = $(e.target).parent().parent().attr('class') - 1;
         var colum = e.target.id - 1;

         var player1 = true;
         var player = (player1 === true) ? 'X' : 'O';
         //sets button to X
         Tictactoe.tictactoeStorage[row][colum] = player;
         $(this).parent().text(player);


    },

    tictactoeStorage: [[null, null, null], [null, null, null], [null, null, null]],

    player1Score: 0,
    player2Score: 0,




    checkGame: function () {
        var ttt = Tictactoe.tictactoeStorage;
        console.log(ttt);
        var player1 = 'X';
        var player2 = 'O';
        
        if (ttt[0][0] === player1 && ttt[0][1] === player1 && ttt[0][2] === player1) {

            console.log('player1 wins');

        }

        if (ttt[0][0] === player2 && ttt[0][1] === player2 && ttt[0][2] === player2) {

            console.log('player2 wins');

        }

    },



    //click functions
    init: function() {

        //Deposit
        //$('#console').on('click', Tictactoe.consoleLog);
        $(":button").on('click', Tictactoe.consoleLog);  
        //$('id').on('click', Bank.depositMoney);
        
    }
};

// The only thing waiting for the DOM is .init();
$(document).ready(function() {
    Tictactoe.init();
    console.log('Game Loaded');



});




//Game Loads

//Player One choose X or O

//set PlayerOne to X and PlayerTwo to O

//start game - are you ready to start

//Switches each time - Plater will click in box