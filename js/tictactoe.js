var Tictactoe = {

    PlayerOne: 0,
    PlayerTwo: 0,
    tictactoeStorage: [[null, null, null], [null, null, null], [null, null, null]],

    turnX: true,

    resetBoard: function () {
        for(var i = 0; i < Tictactoe.tictactoeStorage.length; i ++) {

            for (var j = 0; j < Tictactoe.tictactoeStorage[i].length; j++) {
                Tictactoe.tictactoeStorage[i][j] = null;
                console.log(Tictactoe.tictactoeStorage[i][j])

            }
        }

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
            // var player1 = true;
            

            
            var thisID = id
            var getNums = thisID.toString().split('');
            var row = parseInt(getNums[0]) - 1;
            var colum = parseInt(getNums[1]) - 1;
             if (Tictactoe.tictactoeStorage[row][colum] === 'X' || Tictactoe.tictactoeStorage[row][colum] === 'O') {
                return console.log('please choose again, already taken');
            }
            console.log('Target', this.id, 'Split', row, parseInt(colum));

           
             //sets button to X
             var player = (Tictactoe.turnX === true) ? 'X' : 'O';
            
            Tictactoe.tictactoeStorage[row][colum] = player;
             //Places X
             $('#' + id).text(player);
             //$('#' + id).removeAttr('id');

            //run check
            Tictactoe.turnX = false;

            Tictactoe.checkForWinner();

        } else {
            console.log(id);
            
            var thisID = id
            var getNums = thisID.toString().split('');
            var row = parseInt(getNums[0]) - 1;
            var colum = parseInt(getNums[1]) - 1;
             
            if (Tictactoe.tictactoeStorage[row][colum] === 'O' || Tictactoe.tictactoeStorage[row][colum] === 'X') {
                return console.log('please choose again, already taken');
            }

            console.log('Target', this.id, 'Split', row, parseInt(colum));

           // var player1 = true;
            var player = (Tictactoe.turnX === true) ? 'X' : 'O';
             //sets button to X


            Tictactoe.tictactoeStorage[row][colum] = player;
             //Places Letter
             $('#' + id).text(player);
             //$('#' + id).removeAttr('id');
            
            //run check
            Tictactoe.turnX = true;

            Tictactoe.checkForWinner();
        }

    },


    //CREATE CHECK

    checkForWinner: function () {
        //runs the game
        var tttS = Tictactoe.tictactoeStorage;



        //ROW1
        if (tttS[0][0] === "X" && tttS[0][1] === 'X' && tttS[0][2] === 'X' ) {
            alert('X Wins!')
            console.log('X Wins');
        }

        if (tttS[0][0] === "O" && tttS[0][1] === 'O' && tttS[0][2] === 'O' ) {
            alert('O Wins!')
            console.log('O Wins');
        }
        //ROW2
        if (tttS[1][0] === "X" && tttS[1][1] === 'X' && tttS[1][2] === 'X' ) {
            alert('X Wins!')
            console.log('X Wins');
        }

        if (tttS[1][0] === "O" && tttS[1][1] === 'O' && tttS[1][2] === 'O' ) {
            alert('O Wins!')
            console.log('O Wins');
        }
        //ROW3
        if (tttS[2][0] === "X" && tttS[2][1] === 'X' && tttS[2][2] === 'X' ) {
            alert('X Wins!')
            console.log('X Wins');
        }

        if (tttS[2][0] === "O" && tttS[2][1] === 'O' && tttS[2][2] === 'O' ) {
            alert('O Wins!')
            console.log('O Wins');
        }

        //COLUM1
        if (tttS[0][0] === "X" && tttS[1][0] === 'X' && tttS[2][0] === 'X' ) {
            alert('X Wins!')
            console.log('X Wins');
        }

        if (tttS[0][0] === "O" && tttS[1][0] === 'O' && tttS[2][0] === 'O' ) {
            alert('O Wins!')
            console.log('O Wins');
        }
        //COLUM2
        if (tttS[0][1] === "X" && tttS[1][1] === 'X' && tttS[2][1] === 'X' ) {
            alert('X Wins!')
            console.log('X Wins');
        }

        if (tttS[0][1] === "O" && tttS[1][1] === 'O' && tttS[2][1] === 'O' ) {
            alert('O Wins!')
            console.log('O Wins');
        }
        //COLUM3
        if (tttS[0][2] === "X" && tttS[1][2] === 'X' && tttS[2][2] === 'X' ) {
            alert('X Wins!')
            console.log('X Wins');
        }

        if (tttS[0][2] === "O" && tttS[1][2] === 'O' && tttS[2][2] === 'O' ) {
            alert('O Wins!')
            console.log('O Wins');
        }


        //DIANGONAL 
        if (tttS[0][0] === "X" && tttS[1][1] === 'X' && tttS[2][2] === 'X' ) {
            alert('X Wins!')
            console.log('X Wins');
        }
        if (tttS[0][0] === "O" && tttS[1][1] === 'O' && tttS[2][2] === 'O' ) {
            alert('O Wins!')
            console.log('O Wins');
        }

        if (tttS[0][2] === "X" && tttS[1][1] === 'X' && tttS[2][0] === 'X' ) {
            alert('X Wins!')
            console.log('X Wins');
        }
        if (tttS[0][2] === "O" && tttS[1][1] === 'O' && tttS[2][0] === 'O' ) {
            alert('O Wins!')
            console.log('O Wins');
        }
        
    },

    //click functions
    init: function() {
        
        $('td').hover( function() { $(this).attr('class', 'squareRed')},
            function () {$(this).attr('class', 'square')});


        $('#reset').on('click', Tictactoe.resetBoard);

        //$('td').on('click', Tictactoe.chooseX);

        //ROW1
        $('#11').on('click', function(e) {
            console.log(e.target.id);

            Tictactoe.choose(e.target.id, Tictactoe.turnX);

            
        });
        $('#12').on('click', function(e) {
            console.log(e.target.id);

            Tictactoe.choose(e.target.id, Tictactoe.turnX);
            
        });

        $('#13').on('click', function(e) {
            console.log(e.target.id);

            Tictactoe.choose(e.target.id, Tictactoe.turnX);
        
        });
        //ROW2
        $('#21').on('click', function(e) {
            console.log(e.target.id);

            Tictactoe.choose(e.target.id, Tictactoe.turnX);
            
        });

        $('#22').on('click', function(e) {
            console.log(e.target.id);

            Tictactoe.choose(e.target.id, Tictactoe.turnX);
            
        });

        $('#23').on('click', function(e) {
            console.log(e.target.id);

            Tictactoe.choose(e.target.id, Tictactoe.turnX);
            
        });
        //ROW3
        $('#31').on('click', function(e) {
            console.log(e.target.id);

            Tictactoe.choose(e.target.id, Tictactoe.turnX);
            
        });
        $('#32').on('click', function(e) {
            console.log(e.target.id);

            Tictactoe.choose(e.target.id, Tictactoe.turnX);
            
        });

        $('#33').on('click', function(e) {
            console.log(e.target.id);

            Tictactoe.choose(e.target.id, Tictactoe.turnX);
            
        });




        
    

    }
};

// The only thing waiting for the DOM is .init();
$( document ).ready(function() {
    Tictactoe.init();
    console.log('Game Loaded');
    //Tictactoe.runGame();




});




//Game Loads

//Player One choose X or O

//set PlayerOne to X and PlayerTwo to O

//start game - are you ready to start

//Switches each time - Plater will click in box

//Create Message