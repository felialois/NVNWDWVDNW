var player:GameObject;
var playerCamera:GameObject;
var moveToPos:boolean=false;//Move the camera to the right spot
var moveSpeed:float=5;
var turnSpeed:float=5;
var cameraSpot:Transform;

var timer:float=10;
var theCredits:GameObject;

function Activate () {
	
	//Make the camera independant and motionless
	playerCamera.GetComponent.<MouseLook>().enabled=false;
	playerCamera.GetComponent.<MouseLookBoat>().enabled=true;
	playerCamera.transform.parent=null;//Make the camera independant
	player.SetActive(false);
	
	moveToPos=true;
	
	//Make the boat unselectable
	transform.tag="Untagged";
	transform.Find("SelectGUI").gameObject.SetActive(false);
	
	//Play the leaving animation
	GetComponent.<Animation>().Play();
	GetComponent.<AudioSource>().Play();
}

function Update(){
	if(moveToPos){
		playerCamera.transform.position=Vector3.Lerp(playerCamera.transform.position,cameraSpot.position,Time.deltaTime*moveSpeed);
		playerCamera.transform.rotation=Quaternion.Lerp(playerCamera.transform.rotation,cameraSpot.rotation,Time.deltaTime*turnSpeed);
		timer-=Time.deltaTime;//Count down
	}
	if(timer<0){//Display the credits
		theCredits.SendMessage("Activate");
		playerCamera.GetComponent.<MouseLookBoat>().enabled=false;
	}
}