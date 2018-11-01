var isOutside:float=0;//0 is false, 1 is true
var maxVolume:float=1;
var volumeChangeSpeed:float=1;
var theAudio:AudioSource;
function Start () {
	theAudio=GetComponent.<AudioSource>();
}

function OnTriggerExit(col:Collider) {
	if(col.gameObject.tag=="Player"){//The player is now outside
		isOutside=1;	
	}
}

function OnTriggerEnter(col:Collider) {
	if(col.gameObject.tag=="Player"){//The player is now outside
		isOutside=0;	
	}
}

function Update(){
	theAudio.volume=Mathf.MoveTowards(theAudio.volume,isOutside*maxVolume+0.15,volumeChangeSpeed*Time.deltaTime);
}