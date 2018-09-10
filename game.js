var rpsGame = {

    wins: 0,
    lose: 0,
    ties: 0,

    get allowedLetters() { return "RSP"; },

    get randomComputerChoice()
    {
        var i = Math.floor(Math.random() * 3);
        return this.allowedLetters[i];
    },
    
    init: function()
    {
        this.wins = 0;
        this.ties = 0;
        this.lose = 0;
        this.printAllOnScreen();
        //console.log("Game started")
    },
    
    printOnScreen: function(id, value) 
    {
        var obj = document.getElementById(id);
        obj.innerText = value;
    },

    printAllOnScreen: function()
    {
        this.printOnScreen("wins", this.wins);
        this.printOnScreen("ties", this.lose);
        this.printOnScreen("lose", this.lose);
        //console.log("All printed");
    },
    
    play: function(input) 
    {
        var userChoice = input.key.toUpperCase();
        var computerChoice = this.randomComputerChoice;

        //console.log(userChoice + " vs " + computerChoice);

        if(userChoice === computerChoice)
        {
            this.ties ++;
            this.printOnScreen("ties", this.ties);
        }
        else 
        {
            var youWin1 = userChoice === "R" && computerChoice === "S";
            var youWin2 = userChoice === "P" && computerChoice === "R"; 
            var youWin3 = userChoice === "S" && computerChoice === "P";

            if(youWin1 || youWin2 || youWin3)
            {
                this.wins ++;
                this.printOnScreen("wins", this.wins);
            }
            else
            {
                this.lose ++;
                this.printOnScreen("lose", this.lose);
            }
        }
    }

}