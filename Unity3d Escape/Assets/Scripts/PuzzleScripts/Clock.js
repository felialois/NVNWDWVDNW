var currentTime:float;//The players time in seconds

var seconds:float;
var minutes:float;
var hours:float;

var secondHand:Transform;
var minuteHand:Transform;
var hourHand:Transform;

var hasPower:boolean=false;

var theOceanMusic:OceanMusic;

var theVolume:float=0.6;

var canTick:boolean=true;//When the game is paused, this is false

InvokeRepeating("ClockChange",0,1);

function Start () {
	currentTime=Random.Range(3600,39600);
	
	seconds=currentTime%60;
	minutes=(currentTime%3600)/60.0;
	hours=(currentTime%216000)/3600.0;
		
}

function Power(){
	hasPower=true;
	
	//The hand movement
	secondHand.localRotation.eulerAngles.z=seconds*-6-90;
	minuteHand.localRotation.eulerAngles.z=minutes*-6-90;
	hourHand.localRotation.eulerAngles.z=hours*-30-90;
}
function ClockChange(){
	if(canTick){
		if(theOceanMusic.isOutside){
			GetComponent.<AudioSource>().volume=0.01;
		}else{
			GetComponent.<AudioSource>().volume=theVolume;
		}
		if(hasPower){
			//The time
			currentTime++;
			seconds=currentTime%60;
			minutes=(currentTime%3600)/60.0;
			hours=(currentTime%216000)/3600.0;
			
			//The hand movement
			secondHand.localRotation.eulerAngles.z=seconds*-6-90;
			minuteHand.localRotation.eulerAngles.z=minutes*-6-90;
			hourHand.localRotation.eulerAngles.z=hours*-30-90;
			
			//The sound
			GetComponent.<AudioSource>().Play();
		}
	}
}