var Tictactoe = {

    PlayerOne: 0,
    PlayerTwo: 0,
    tictactoeStorage: [ [null, null, null], 
                        [null, null, null], 
                        [null, null, null]],
    playerOnePoints: [],
    playerTwoPoints: [],

    tictactoeNumbers: [ [11, 12, 13], 
                        [21, 22, 23], 
                        [31, 32, 33]
                        ],
    winningCombo: [
                    [11, 12, 13],
                    [21, 22, 23],
                    [31, 32, 33],
                    [11, 21, 31],
                    [12, 22, 32],
                    [13, 23, 33],
                    [11, 22, 33],
                    [13, 22, 31]
                    ],

    turnX: true,

    resetBoard: function () {
        for(var i = 0; i < Tictactoe.tictactoeStorage.length; i ++) {

            for (var j = 0; j < Tictactoe.tictactoeStorage[i].length; j++) {
                Tictactoe.tictactoeStorage[i][j] = null;
                console.log(Tictactoe.tictactoeStorage[i][j])

            }
        }

        Tictactoe.playerOnePoints = [];
        Tictactoe.playerTwoPoints = [];

        //Clear Board
        $('#11').text('');
        $('#12').text('');
        $('#13').text('');
        $('#21').text('');
        $('#22').text('');
        $('#23').text('');
        $('#31').text('');
        $('#32').text('');
        $('#33').text('');

    },

    //Game Code

    choose: function (id, turn) {


        if (turn === true) {
            console.log(id);
            
            var thisID = id
            var getNums = thisID.toString().split('');
            var row = parseInt(getNums[0]) - 1;
            var colum = parseInt(getNums[1]) - 1;
             if (Tictactoe.tictactoeStorage[row][colum] === 'X' || Tictactoe.tictactoeStorage[row][colum] === 'O') {
                return console.log('please choose again, already taken');
            }
            console.log('PlayerOne', id, 'Split', row, parseInt(colum));

           
             //sets button to X
             var player = (Tictactoe.turnX === true) ? 'X' : 'O';
            
            Tictactoe.tictactoeStorage[row][colum] = player;
            Tictactoe.playerOnePoints.push(Tictactoe.tictactoeNumbers[row][colum]);
             //Places X
             $('#' + id).text(player);

            //run check
            Tictactoe.turnX = false;

            //Tictactoe.checkForWinner();
            Tictactoe.newCheck();

        } else {
            console.log(id);
            
            var thisID = id
            var getNums = thisID.toString().split('');
            var row = parseInt(getNums[0]) - 1;
            var colum = parseInt(getNums[1]) - 1;
             
            if (Tictactoe.tictactoeStorage[row][colum] === 'O' || Tictactoe.tictactoeStorage[row][colum] === 'X') {
                return console.log('please choose again, already taken');
            }

            console.log('PlayerTwo', id, 'Split', row, parseInt(colum));

           // var player1 = true;
            var player = (Tictactoe.turnX === true) ? 'X' : 'O';
             //sets button to X

            Tictactoe.tictactoeStorage[row][colum] = player;
            Tictactoe.playerTwoPoints.push(Tictactoe.tictactoeNumbers[row][colum]);
             //Places Letter
             $('#' + id).text(player);
             //$('#' + id).removeAttr('id');
            
            //run check
            Tictactoe.turnX = true;

            //Tictactoe.checkForWinner();
            Tictactoe.newCheck();
        }

    },
    // CHECK FOR WINNER
    checkForWinner: function () {
        //var first_array = [1, 2, 6, 8, 9]; var second_array = [1, 4, 5];  var diff = $(first_array).not(second_array).get();
        var playerOne = Tictactoe.playerOnePoints;
        var playerTwo = Tictactoe.playerTwoPoints;

        //player one
        for (var i = 0; i < Tictactoe.winningCombo.length; i++) {
                
                var first_array = [];
                var second_array = [];
                console.log('PlayerOne', playerOne, ': ', Tictactoe.winningCombo[i]);

                //first_array = ; 
                $winningCombo = $(Tictactoe.winningCombo[i]);  
                var diff = $winningCombo.not(playerOne).get();
                console.log(playerOne, second_array, 'Diff', diff.length);
              
                if (diff.length === 0){
                    console.log('player X wins!');
                    return alert('X Wins!');
                }      
        }
       
        //player two
        for (var i = 0; i < Tictactoe.winningCombo.length; i++) {
                
                var first_array = [];
                var second_array = [];
                console.log('PlayerTwo', playerTwo, ': ', Tictactoe.winningCombo[i]);

                //first_array = ; 
                $winningCombo = $(Tictactoe.winningCombo[i]);  
                var diff = $winningCombo.not(playerTwo).get();
                console.log(playerTwo, second_array, 'Diff', diff.length);
              
                if (diff.length === 0){

                    console.log('player O wins!');
                    
                    return alert('O Wins!');
                }      
        }

    },


    

    //click functions
    init: function() {
        
        $('td').hover( function() { $(this).attr('class', 'squareRed')},
            function () {$(this).attr('class', 'square')});

        //RESETS BOARD
        $('#reset').on('click', Tictactoe.resetBoard);

        $('div.board').on('click', function(e) {

            console.log('TEST OUTPUT', 'Event:', e, e.target.id);
            
            Tictactoe.choose(e.target.id, Tictactoe.turnX);
    
        });

        
    
    }
};

// The only thing waiting for the DOM is .init();
$( document ).ready(function() {
    Tictactoe.init();
    console.log('Game Loaded');

});
