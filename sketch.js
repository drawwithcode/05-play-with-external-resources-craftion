
var mySong;
var analyser;
var img;
var offset = 0;
var easing = 0.05;


function preload(){
  // put preload code here
  mySong= loadSound('./addons/song.mp3');
  img = loadImage("./addons/o.jpg");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  analyser= new p5.Amplitude();
analyser.setInput(mySong);



}

function draw() {
  // put drawing code here


  var volume = map(windowHeight, mouseY, width, 0, 2);
   volume = constrain(volume, 0, 2);
   mySong.amp(volume);


  image(img, 0, 0);
  var dx = (mouseX-img.width/2) - offset;
  offset += dx * easing;
  tint(255, 127);
  image(img, offset, 0);

 if (mouseX<400 || mouseX>1200){
  ;
   mySong.pause();
 } else{
   if(mySong.isPlaying()== false){
   mySong.play();
   // mySong.loop(); direk tekrar oynatmak için
   }
 }
 var volume= analyser.getLevel();
 console.log(volume);
 volume = map(volume,0,1,50,width/2);

 noStroke();

 fill(26,221,225,90);
 ellipse(width/2,height/2,volume);
 fill(26,221,225,90);
 ellipse(width/2,height/2,volume*1.5);
 fill(26,221,225,90);
 ellipse(width/2,height/2,volume*2);

rectMode(CENTER);
 fill(164,233,255,90);
 rect(width/3,height/2,volume,volume);
 fill(164,233,255,70);
 rect(width/3,height/2,volume*1.5,volume*1.5);
 fill(164,233,255,50);
 rect(width/3,height/2,volume*2,volume*2);



 fill(255,253,204,90);
 rect(width/3*2,height/2,volume,volume);
 fill(255,253,204,70);
 rect(width/3*2,height/2,volume*1.5,volume*1.5);
 fill(255,253,204,50);
 rect(width/3*2,height/2,volume*2,volume*2);



 textFont('stylesheet');
 textAlign(CENTER);
 textSize(80);
 if(mouseX<400 || mouseX>1200){
   fill(255,255,255);
 } else{
 fill(255,255,255,50); }
 text('CITY LIGHTS', width/2,150);

}
