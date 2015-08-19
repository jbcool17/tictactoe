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
        


        //console.log('Turn Status : ', Tictactoe.turnX, 'TEST');
        console.log('Player:', player,' ID: ', id, 'Position:', row, colum, 'Squares Collected:', playerCollect );


    },
    // CHECK FOR WINNER
    checkForWinner: function() {
        //Checks for draw.
        if( Tictactoe.playerOneCollect.length + Tictactoe.playerTwoCollect.length === 9) {
            return alert('ITS A DRAW!');
        }

        var playerOne = Tictactoe.playerOneCollect;
        var playerTwo = Tictactoe.playerTwoCollect;

        var currentPlayer = (Tictactoe.turnX === true) ? Tictactoe.playerOneCollect : Tictactoe.playerTwoCollect;
        //console.log('1', Tictactoe.turnX);
        var player = (Tictactoe.turnX === true) ? 'X' : 'O';
        //console.log('2', Tictactoe.turnX);



        for (var i = 0; i < Tictactoe.winningCombo.length; i++) {

            $winningCombo = $(Tictactoe.winningCombo[i]);
            var diff = $winningCombo.not(currentPlayer).get();
            
            console.log('Diff', diff.length, 'Diff Array: ', diff, player, currentPlayer.length);

            if (diff.length === 0) {

                console.log(player, ' wins!', 'Diff', diff.length, player, currentPlayer.length);
                Tictactoe.addToScore(player);
                
                alert(player + ' Wins!');
                //Tictactoe.resetBoard();

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
        
        if (turn === false && $('#22').is(':empty')) { //middle

            return Tictactoe.chooseSquare('22', false);

        // } else if ( turn === false && $('#11').is(':empty')) { //corners

        //     return Tictactoe.chooseSquare('11', false);

        // } else if ( turn === false && $('#13').is(':empty')) { 

        //     return Tictactoe.chooseSquare('13', false);

        // } else if ( turn === false && $('#33').is(':empty')) {

        //     return Tictactoe.chooseSquare('33', false);

        // } else if ( turn === false && $('#31').is(':empty')) {

        //    return  Tictactoe.chooseSquare('31', false);

        } else {
             var currentPlayer = (Tictactoe.turnX === true) ? Tictactoe.playerTwoCollect : Tictactoe.playerOneCollect;
            //12, 21, 32, 23

            for (var i = 0; i < Tictactoe.winningCombo.length; i++) {

                $winningCombo = $(Tictactoe.winningCombo[i]);
                var diff = $winningCombo.not(currentPlayer).get();
                
                //console.log('Diff', diff.length, 'Diff Array: ', diff, player, currentPlayer.length);

                if (diff.length <= 1 && diff[0] === 12) {
                    console.log('Diff', diff)
                    console.log(Tictactoe.chooseSquare((diff[0]).toString(), false));
                }
                if (diff.length <= 1 && diff[0] === 21) {
                    console.log('Diff', diff)
                    return Tictactoe.chooseSquare((diff[0]).toString(), false);
                }
                if (diff.length <= 1 && diff[0] === 32) {
                    console.log('Diff', diff)
                    return Tictactoe.chooseSquare((diff[0]).toString(), false);
                } else {
                    console.log('Diff', diff)
                    return Tictactoe.chooseSquare((diff[0]).toString(), false);
                }

            }
        }

        // } else if ( turn === false && $('#22').is(':empty')) {
        //     Tictactoe.chooseSquare('22', false);
        // } else if ( turn === false && $('#23').is(':empty')) {
        //     Tictactoe.chooseSquare('23', false);
        // } else if ( turn === false && $('#12').is(':empty')) {
        //     Tictactoe.chooseSquare('12', false);
        // } else if ( turn === false && $('#32').is(':empty')) {
        //     Tictactoe.chooseSquare('32', false);

        // } else {
        //     console.log('hmmm....');
        // }

        //check diff array  if 2 - 
           

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

            //console.log('TEST OUTPUT', 'Event:', e, e.target.id);
            Tictactoe.computerAI();
        });

        //Button Function to choose box
        $('div.board').on('click', function(e) {

            //console.log('TEST OUTPUT', 'Event:', e, e.target.id);

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