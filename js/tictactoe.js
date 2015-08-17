var Tictactoe = {
    //Game Code
    consoleLog: function (e) {
         console.log('consoleLog function has run on BUTTON: ', e.target.id);

    },

    tictactoeStorage: [[null, null, null], [null, null, null], [null, null, null]],



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
    console.log('Game Loaded')

});