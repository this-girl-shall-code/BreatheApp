const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const modeBtn = document.getElementById("mode-btn");
const breatheCircle = document.getElementById("breathe-circle");
const circleContent = document.getElementById("circle-contents");
const breatheIn = document.getElementById("breathe-in");
const count = document.getElementById("count");
const breatheOut = document.getElementById("breathe-out");
const continueBtn = document.getElementById("continue-btn");
const returnBtn = document.getElementById("return-btn");
const startScreen = document.getElementById("start-screen");
const mainScreen = document.getElementById("main-screen");
const endScreen = document.getElementById("end-screen");

continueBtn.addEventListener ('click', function(){
  startScreen.style.display = "none";
  mainScreen.style.display = "contents";
  
  const width = window.innerWidth;
  let screenTest = document.getElementById("test");
  screenTest.innerHTML = width + "px";
});

document.body.style.backgroundImage = "url(Images/mountains.JPG)";

let modeClicked = true;

modeBtn.addEventListener ('click', function (){
  if(modeClicked){ // change background image & buttons to dark version
  document.body.style.backgroundImage = "url(Images/lake.jpg)";
  breatheCircle.style.border = "10px solid #153659";
  breatheCircle.style.boxShadow = "-4px -4px 10px rgba(230,163,255,0.2), 4px 4px 10px rgba(230,163,255,0.3)";
  startButton.style.backgroundColor = "#153659";
  stopButton.style.backgroundColor = "#153659";
  modeBtn.style.backgroundColor = "#153659";
  modeBtn.textContent = "light mode";
  document.getElementById("end-title").style.color = "#92acfc";
  modeClicked = false;    
  } else{
    if(!modeClicked) // change background image & buttons to light version
    document.body.style.backgroundImage = "url(Images/mountains.JPG)";
    breatheCircle.style.border = "10px solid #e0a896";
    breatheCircle.style.boxShadow = "-4px -4px 10px rgba(67,67,67,0.2), inset 4px 4px 10px rgba(0,0,0,0.2), inset -4px -4px 10px rgba(67,67,67,0.2), 4px 4px 10px rgba(0,0,0,0.3)";
    startButton.style.backgroundColor = "";
    stopButton.style.backgroundColor = "";
    modeBtn.style.backgroundColor = "";
    modeBtn.textContent = "dark mode";
    document.getElementById("end-title").style.color = "#033a60";
    modeClicked = true;
  }
});

let stopped = false; //when the stop button is pressed - this becomes true and will stop the keepCounting function

//function to start using the CSS animations when the start button is clicked
startButton.addEventListener('click', function (){
  stopped = false;
  console.log(stopped);
  breatheCircle.style.animation = "10s infinite breathe1";
  breatheIn.style.animation = "10s infinite textFadeIn";
  breatheOut.style.animation = "10s infinite textFadeOut";
  circleContent.style.animation = "10s infinite circleContent";
  circleContent.style.backgroundColor = "rgba(0,0,0,0.3)";
  count.style.opacity = "1";
  keepCounting()
});

//function to stop using the CSS animations when the stop button is clicked
stopButton.addEventListener('click', function (){
  stopped = true;
  console.log(stopped);
  breatheCircle.style.animation = "";
  breatheIn.style.animation = "";
  breatheOut.style.animation = "";
  circleContent.style.animation = "";
  circleContent.style.backgroundColor = "";
  count.style.opacity = "0";
  endScreen.style.display = "flex";
  mainScreen.style.display = "none";
});


let counter = 0;
let breatheUp = true;

function keepCounting(){
  if (breatheUp && !stopped){
    counter++;
    console.log(counter);
    count.textContent = counter;
      if(counter === 4 ){
        breatheUp = false;
        counter = 0;
    }
  } else if (!breatheUp && !stopped){
      counter++;
      console.log(counter);
      count.textContent = counter;
      if (counter === 4){
        breatheUp = true;
        counter = 0;
      }
    } else {
      if (stopped){ 
        return counter = 0;   
        console.log(stopped);
      }
    } setTimeout(keepCounting, 1250);
}

returnBtn.addEventListener ('click', function(){
  endScreen.style.display = "none";
  mainScreen.style.display = "contents";
});

document.addEventListener('keydown', function(event){
  if(event.key === "Enter"){
    if ((startScreen.style.display = "flex") || (endScreen.style.display = "flex")){
      startScreen.style.display = "none";
      endScreen.style.display = "none";
      mainScreen.style.display = "contents";
    }
  } 
});
