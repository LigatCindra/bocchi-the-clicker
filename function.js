var score = 0;
var clickingPower = 1;

var fansPrice = 15;
var fans = 0;

var guitarPickPrice = 30;
var guitarPick = 0;
function buyFans(){
            if (score >= fansPrice){
                score = score - fansPrice;
                fans = fans + 1;
                fansPrice = Math.round(fansPrice * 1.15);

                document.getElementById("score").innerHTML = score;
                document.getElementById("fansPrice").innerHTML = fansPrice;
                document.getElementById("fans").innerHTML = fans;
            }

        }

function buyGuitarPick(){
            if (score >= guitarPickPrice){
                score = score - guitarPickPrice;
                guitarPick = guitarPick + 1;
                guitarPickPrice = Math.round(guitarPickPrice * 2.25);
                clickingPower = clickingPower + guitarPick;

                document.getElementById("score").innerHTML = score;
                document.getElementById("guitarPickPrice").innerHTML = guitarPickPrice;  
                document.getElementById("guitarPick").innerHTML = guitarPick;
                    
            }

        }

function addToScore(amount){
                score = score + amount;
                document.getElementById("score").innerHTML = score;
            }

setInterval(function() {
                score = score + fans;
                document.getElementById("score").innerHTML = score;
            }, 1000);