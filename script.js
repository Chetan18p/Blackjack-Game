
let sum = 0;
let s = document.getElementById("sum");
s.textContent = "Sum :"+sum; 
let cards = [];
let isAlive = false;

let player = {
    name:"Chetan",
    chips:100
}

let bal = document.getElementById("balance")
bal.textContent = player.name +" :$"+player.chips;

function renderGame() {
    if(player.chips >= 10){
        if(!isAlive){
            let firstCard = getRandom() ;
            let seconCard = getRandom();
            cards.push(firstCard);
            cards.push(seconCard);
            sum = firstCard+seconCard;
            player.chips -= 10 ;
        }
        isAlive = true;
        let me = "";
        let c = document.getElementById("card");
        c.textContent = "Card :";
        for(let i = 0 ; i < cards.length ; i++){
            c.textContent += cards[i]+" ";
        }
        s.textContent = "Sum :"+sum;

        if(sum > 21){
            me = "You Lose??";
            isAlive = false;
            sum = 0 ;
            cards.length = 0;
        }
        else if(sum == 21){
            me = "You Win!!!";
            isAlive = false;
            sum = 0 ;
            cards.length = 0;
            player.chips += 100 ;
        }
        else{
            me = "Draw New Card";
        }
        document.getElementById("message").textContent = me;
        document.getElementById("balance").textContent = player.name +" :$"+player.chips;
    }
}

function newCard() {
    if(isAlive){
        let ne = getRandom();
        cards.push(ne);
        sum += ne;
        renderGame();
    }
}

function getRandom(){
    let val = Math.floor(Math.random()*13)+1;
    if(val == 1){
        return 11;
    }
    else if(val == 11 || val == 12 || val ==13){
        return 10;
    }
    else{
        return val;
    }
}