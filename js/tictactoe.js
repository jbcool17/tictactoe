var Tictactoe = {

    PlayerOne: 0,
    PlayerTwo: 0,

    //Xs and Os are inserted here.
    tictactoeBoard: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],

    emptySquares: [],

    //locations from tictactoeNumbers are added here.
    playerOneCollect: [],
    playerTwoCollect: [],

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
    winner: false,

    //Resets the board.
    resetBoard: function(x) {
        //resets Board array
        for (var i = 0; i < Tictactoe.tictactoeBoard.length; i++) {

            for (var j = 0; j < Tictactoe.tictactoeBoard[i].length; j++) {
                Tictactoe.tictactoeBoard[i][j] = null;
                //console.log(Tictactoe.tictactoeBoard[i][j])

            }
        }
        //set player choices to none.
        Tictactoe.playerOneCollect = [];
        Tictactoe.playerTwoCollect = [];

        Tictactoe.winner = false;

        //Clears Board
        $('td').empty();

        console.log('board reset');

    },

    chooseSquare: function(id, turn) {


        //Gets ID and splits it to array.            
        var splitId = id.split('');
        //Set Row and Colum to numbers.
        var row = parseInt(splitId[0]) - 1;
        var colum = parseInt(splitId[1]) - 1;

        //If square used
        if (Tictactoe.tictactoeBoard[row][colum] === 'X' || Tictactoe.tictactoeBoard[row][colum] === 'O') {
            return console.log('please choose again, square is already taken', row, colum);
        }

        //sets player to X or O
        var player = (Tictactoe.turnX === true) ? 'X' : 'O';

        Tictactoe.tictactoeBoard[row][colum] = player;

        //Get which player and pushes value to it.
        var tttPlayerPoints = (player === "X") ? Tictactoe.playerOneCollect : Tictactoe.playerTwoCollect
        tttPlayerPoints.push(Tictactoe.tictactoeNumbers[row][colum]);

        //Places player of html
        $('#' + id).text(player);

        //winner?
        Tictactoe.checkForWinner(); 

        //Sets player for next turn.
        Tictactoe.turnX = (player === 'X') ? false : true;
        $('#message').text((Tictactoe.turnX === true) ? 'X' : 'O');
        var playerCollect = (player === 'X') ? Tictactoe.playerOneCollect : Tictactoe.playerTwoCollect;
        


        Tictactoe.emptySquares = [];
        
        //Checks for whats empty
        for (var i = 0; i < Tictactoe.tictactoeBoard.length; i++) {
            for (var j = 0; j < Tictactoe.tictactoeBoard[i].length; j++) {

                if ( Tictactoe.tictactoeBoard[i][j] === 'X' || Tictactoe.tictactoeBoard[i][j] === 'O' ) {
                    
                } else {
                    //console.log(Tictactoe.tictactoeNumbers[i][j]);

                    Tictactoe.emptySquares.push(Tictactoe.tictactoeNumbers[i][j]);
                }

            }
            
        }

        console.log('Player:', player,' ID: ', id, 'Position:', row, colum, 'Squares Collected:', playerCollect );
        


    },
    // CHECK FOR WINNER
    checkForWinner: function() {
        //Checks for draw.
        if( Tictactoe.playerOneCollect.length + Tictactoe.playerTwoCollect.length === 9 && !(Tictactoe.winner)) {
            
            return alert('ITs A TIE!')

        }

        console.log('HELLO')
        
        var playerOne = Tictactoe.playerOneCollect;
        var playerTwo = Tictactoe.playerTwoCollect;

        var currentPlayer = (Tictactoe.turnX === true) ? Tictactoe.playerOneCollect : Tictactoe.playerTwoCollect;
        var player = (Tictactoe.turnX === true) ? 'X' : 'O';

        for (var i = 0; i < Tictactoe.winningCombo.length; i++) {

            $winningCombo = $(Tictactoe.winningCombo[i]);
            var diff = $winningCombo.not(currentPlayer).get();

            if (diff.length === 0) {

                console.log(player, ' wins!', 'Diff', diff.length, player, currentPlayer.length);
                Tictactoe.addToScore(player);
                Tictactoe.winner = true;
                
                return alert(player + ' Wins!');
                //Tictactoe.resetBoard();

            }

        }

    },

    addToScore: function(x) {

        if (x === "X") {
            Tictactoe.PlayerOne += 1
            $('#playerone').text(Tictactoe.PlayerOne);
    
        } else {
            Tictactoe.PlayerTwo += 1;
            $('#playertwo').text(Tictactoe.PlayerTwo);
            
        }

    },

    //AI
    computerAI: function() {
        var board = Tictactoe.tictactoeBoard;
        var turn = Tictactoe.turnX;
        var numbers = Tictactoe.tictactoeNumbers

            var a = $(Tictactoe.emptySquares).not(Tictactoe.winningCombo[0]).get()
            console.log($(Tictactoe.emptySquares).not(a).get());
            
            var b = Math.floor(Math.random() * Tictactoe.emptySquares.length)+1;
             
            var c = [22, 11, 13, 33, 31]
            var d = Math.floor(Math.random() * c.length)+1;
            if ( Tictactoe.emptySquares.length === 0 ) {
                Tictactoe.chooseSquare((11).toString(), false);
            } else {
                Tictactoe.chooseSquare((Tictactoe.emptySquares[(b-1)]).toString(), false);
            }

            // if (board[1][1]) {

            // }

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
        $('#computer').on('click', function (e) {

            Tictactoe.computerAI();

        });

        //Button Function to choose box
        $('div.board').on('click', function(e) {

            Tictactoe.chooseSquare(e.target.id, Tictactoe.turnX);

        });

    }
};

// The only thing waiting for the DOM is .init();
$(document).ready(function() {
    Tictactoe.init();
    console.log('Game Loaded');
    $('#message').text((Tictactoe.turnX === true) ? 'X' : 'O');
    $('td').empty();

});