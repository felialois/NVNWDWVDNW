var isPaused:boolean=false;
var mouseLook:MouseLook;
var clock:Clock;
var raycaster:Raycaster;
var books:Book[];
var sound:AudioClip;
var pauseCamera:GameObject;
var crossHair:GameObject;
var movement:PlayerMovement;

private var rb: Rigidbody;

function Start() {
	rb = GetComponent.<Rigidbody>();
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)){//Either pause or unpause the game
		isPaused=!isPaused;
		GetComponent.<AudioSource>().clip=sound;
		GetComponent.<AudioSource>().Play();
		if(isPaused){
			Pause();
		}else{
			unPause();
		}
	}
}
function Pause(){
	isPaused=true;
	mouseLook.enabled=false;
	clock.canTick=false;
	raycaster.canRaycast=false;
	for(var i=0;i<books.Length;i++){
		books[i].canClose=false;
	}
	rb.constraints = RigidbodyConstraints.FreezeAll;
	pauseCamera.SetActive(true);
	movement.enabled=false;
	crossHair.SetActive(false);
}

function unPause(){
	isPaused=false;
	mouseLook.enabled=true;
	clock.canTick=true;
	raycaster.canRaycast=true;
	for(var j=0;j<books.Length;j++){
		books[j].canClose=true;
	}
	rb.constraints = RigidbodyConstraints.None;
	rb.constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezeRotationY;
	pauseCamera.SetActive(false);
	movement.enabled=true;
	crossHair.SetActive(true);
}