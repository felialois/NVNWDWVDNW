var inventoryScript:Inventory;
var theDoor:Transform;
var isOpen:boolean=false;
private var startRot:Quaternion;
var endRot:Quaternion;
var rotateSpeed:float=10;
var lockObj:GameObject;

function Start(){
	startRot=theDoor.rotation;
}
function Activate(){
	if(inventoryScript.items[0]==1){//We have the key
		isOpen=!isOpen;
		GetComponent.<AudioSource>().Play();
	}else{
		lockObj.GetComponent.<AudioSource>().Play();
	}
	
}

function Update () {
	if(isOpen){
		theDoor.rotation=Quaternion.RotateTowards(theDoor.rotation,endRot,rotateSpeed);
	}else{
		theDoor.rotation=Quaternion.RotateTowards(theDoor.rotation,startRot,rotateSpeed);
	}
}