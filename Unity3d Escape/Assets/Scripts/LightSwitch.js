var turnedOn:boolean=true;
var glass:GameObject;
var theLight:GameObject;
var onMat:Material;
var offMat:Material;
var theSwitch:Transform;
var heightChange:float;

function Activate () {
	turnedOn=!turnedOn;
	GetComponent.<AudioSource>().Play();
	if(turnedOn){//If we just turned the light on
		glass.GetComponent.<Renderer>().material=onMat;
		theLight.SetActive(true);
		theSwitch.transform.position.y+=heightChange;
	}else{
		glass.GetComponent.<Renderer>().material=offMat;
		theLight.SetActive(false);
		theSwitch.transform.position.y-=heightChange;
	}
}