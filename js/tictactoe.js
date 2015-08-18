var Tictactoe = {

    PlayerOne: 0,
    PlayerTwo: 0,

    //Xs and Os are inserted here.
    tictactoeBoard: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],

    //locations from tictactoeNumbers are added here.
    playerOnePoints: [],
    playerTwoPoints: [],

    tictactoeNumbers: [
        [11, 12, 13],
        [21, 22, 23],
        [31, 32, 33]
    ],

    //Possible winning combinations.
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
    //Whos turn.
    turnX: true,

    //Resets the board.
    resetBoard: function(x) {
        //resets Board array
        for (var i = 0; i < Tictactoe.tictactoeBoard.length; i++) {

            for (var j = 0; j < Tictactoe.tictactoeBoard[i].length; j++) {
                Tictactoe.tictactoeBoard[i][j] = null;
                console.log(Tictactoe.tictactoeBoard[i][j])

            }
        }
        //set player choices to none.
        Tictactoe.playerOnePoints = [];
        Tictactoe.playerTwoPoints = [];


        //Clears Board
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

    chooseSquare: function(id, turn) {
        //Gets ID and splits it to array.            
        var splitId = id.split('');
        //Set Row and Colum to numbers.
        var row = parseInt(splitId[0]) - 1;
        var colum = parseInt(splitId[1]) - 1;

        //If square used
        if (Tictactoe.tictactoeBoard[row][colum] === 'X' || Tictactoe.tictactoeBoard[row][colum] === 'O') {
            return console.log('please choose again, square is already taken');
        }

        //sets player to X or O
        var player = (Tictactoe.turnX === true) ? 'X' : 'O';

        Tictactoe.tictactoeBoard[row][colum] = player;

        //Get which player and pushes value to it.
        var tttPlayerPoints = (player === "X") ? Tictactoe.playerOnePoints : Tictactoe.playerTwoPoints
        tttPlayerPoints.push(Tictactoe.tictactoeNumbers[row][colum]);

        //Places player of html
        $('#' + id).text(player);

        //winner?
        Tictactoe.checkForWinner();

        //Sets player for next turn.
        Tictactoe.turnX = (player === 'X') ? false : true;
        $('#message').text((Tictactoe.turnX === true) ? 'X' : 'O');


        console.log('Turn Status : ', Tictactoe.turnX, 'TEST');
        console.log('Player: ', player, ' ID: ', id, 'Position: ', row, colum, 'Points Collected: ', Tictactoe.playerOnePoints);
        //Check if draw.
        if( Tictactoe.playerOnePoints.length + Tictactoe.playerTwoPoints.length === 9) {alert('ITS A DRAW!')}



    },
    // CHECK FOR WINNER
    checkForWinner: function() {

        var playerOne = Tictactoe.playerOnePoints;
        var playerTwo = Tictactoe.playerTwoPoints;




        var currentPlayer = (Tictactoe.turnX === true) ? Tictactoe.playerOnePoints : Tictactoe.playerTwoPoints;
        var player = Tictactoe.turnX = (Tictactoe.turnX === true) ? 'X' : 'O';



        for (var i = 0; i < Tictactoe.winningCombo.length; i++) {

            $winningCombo = $(Tictactoe.winningCombo[i]);
            var diff = $winningCombo.not(currentPlayer).get();
            //console.log(playerOne, 'Diff', diff.length);

            if (diff.length === 0) {

                console.log(player, ' wins!', 'Diff', diff.length, Tictactoe.turnX, currentPlayer.length);
                Tictactoe.addToScore(Tictactoe.turnX);
                
                alert(player + ' Wins!');
                Tictactoe.resetBoard();

            }

        }

    },

    addToScore: function(x) {

        if (x === "X") {
            Tictactoe.PlayerOne += 1
            $('#playerone').text(Tictactoe.PlayerOne);
            //console.log(Tictactoe.turnX);
        } else {
            Tictactoe.PlayerTwo += 1;
            $('#playertwo').text(Tictactoe.PlayerTwo);
            //console.log(Tictactoe.turnX);
        }

    },

    //AI
    computerAI: function() {
        var board = Tictactoe.tictactoeBoard;
        var turn = Tictactoe.turnX;
        var numbers = Tictactoe.tictactoeNumbers

        if (turn === true) {

            console.log('It is Xs turn to go');

        } else {

            for (var i = 0; i < Tictactoe.playerOnePoints.length; i++) {

                $winningCombo = $(Tictactoe.winningCombo[i]);
                var diff = $winningCombo.not(Tictactoe.playerOnePoints).get();
                console.log(Tictactoe.playerOnePoints, 'Diff', diff.length, diff);

                if (diff.length >= 2) {
                    var id = diff[0];

                    if ( Math.round(Math.random()) % 2 === 0){
                        Tictactoe.chooseSquare(diff[0].toString(), false);

                    } else {
                        Tictactoe.chooseSquare(diff[1].toString(), false);
                    }

                }

          }
    
        }

    },

    //click functions
    init: function() {

        $('td').hover(function() {
                $(this).attr('class', 'squareRed')
            },
            function() {
                $(this).attr('class', 'square')
            });

        //RESETS BOARD
        $('#reset').on('click', Tictactoe.resetBoard);

        //COMPUTER PLAY
        $('#computer').on('click', Tictactoe.computerAI);

        //Button Function to choose box
        $('div.board').on('click', function(e) {

            console.log('TEST OUTPUT', 'Event:', e, e.target.id);

            Tictactoe.chooseSquare(e.target.id, Tictactoe.turnX);

        });

    }
};

// The only thing waiting for the DOM is .init();
$(document).ready(function() {
    Tictactoe.init();
    console.log('Game Loaded');
    $('#message').text((Tictactoe.turnX === true) ? 'X' : 'O');

});