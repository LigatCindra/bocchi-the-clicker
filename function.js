var score = 0;
var clickingPower = 1;

var fansPrice = 15;
var fans = 0;

var AdSensPrice = 50
var AdSens = 0

var guitarPickPrice = 200;
var guitarPick = 0;

function buyFans(){
            if (score >= fansPrice){
                score = score - fansPrice;
                fans = fans + 1;
                fansPrice = Math.round(fansPrice * 1.15);

                document.getElementById("score").innerHTML = score;
                document.getElementById("fansPrice").innerHTML = fansPrice;
                document.getElementById("fans").innerHTML = fans;
                updateScorePerSecond();
            }else{
                alert("Not enough score. Go farm more.");
            }

        }

function buyAdSens(){
            if (score >= AdSensPrice){
                score = score - AdSensPrice;
                AdSens = AdSens + 1;
                AdSensPrice = Math.round(AdSensPrice * 1.75);

                document.getElementById("score").innerHTML = score;
                document.getElementById("AdSensPrice").innerHTML = AdSensPrice;
                document.getElementById("AdSens").innerHTML = AdSens;
                updateScorePerSecond();
            }else{
                alert("Not enough score. Go farm more.");
            }

        }


function buyGuitarPick(){
            if (score >= guitarPickPrice){
                score = score - guitarPickPrice;
                guitarPick = guitarPick + 1;
                guitarPickPrice = Math.round(guitarPickPrice * 2.55);
                clickingPower = clickingPower + guitarPick;

                document.getElementById("score").innerHTML = score;
                document.getElementById("guitarPickPrice").innerHTML = guitarPickPrice;  
                document.getElementById("guitarpick").innerHTML = guitarPick;                    
                updateClickPower();
            }else{
                alert("Not enough score. Go farm more.");
            }

        }

function updateClickPower(){
    ClickPower = clickingPower
    document.getElementById("clickdensity").innerHTML = ClickPower;
}

function updateScorePerSecond(){
    scorePerSecond = fans + AdSens * 5;
    document.getElementById("moneypersecond").innerHTML = scorePerSecond;   

}

function addToScore(amount){
                score = score + amount;
                document.getElementById("score").innerHTML = score;
            }

setInterval(function() {
                score = score + fans;
                score = score + AdSens * 5;
                document.getElementById("score").innerHTML = score;
                document.title = score + " Money - Bocchi the Clicker";
            }, 1000);

let eventBox = document.getElementById("event");
let eventTimer = null;

function handleEventClick() {
  addToScore(25); 
  eventBox.style.display = "none"; 
}

function showEvent() {
  eventBox.style.display = "block";
  const maxHeight = 400;
  const maxWidth = 700;
  eventBox.style.top = Math.floor(Math.random() * (window.innerHeight - eventBox.offsetHeight)) + "px";
  eventBox.style.left = Math.floor(Math.random() * (window.innerWidth - eventBox.offsetWidth)) + "px";
//   if (Math.random() < 0.75) {
//         const maxLeft = window.innerWidth - maxWidth;
//     eventBox.style.left = Math.floor(Math.random() * maxLeft) + "px";
//   }
  eventBox.addEventListener("click", handleEventClick);
  eventTimer = setTimeout(function() {
    eventBox.style.display = "none";
    eventBox.removeEventListener("click", handleEventClick);
    showEvent();
  }, 5000);
}

showEvent();
