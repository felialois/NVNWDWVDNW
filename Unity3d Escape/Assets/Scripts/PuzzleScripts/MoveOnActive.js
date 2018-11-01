var downPos:Vector3;
var downRot:Quaternion;
private var upPos:Vector3;
private var upRot:Quaternion;
var moveSpeed:float;
var rotateSpeed:float;
private var isFalse:boolean=false;

function Start(){
	upPos=transform.position;
	upRot=transform.rotation;
	//downRot=Quaternion.LookRotation(downRot2,Vector3.up);
}
function Activate () {
	isFalse=!isFalse;
	GetComponent.<AudioSource>().Play();
}

function Update () {
	if(isFalse){
		transform.position=Vector3.MoveTowards(transform.position,downPos,moveSpeed*Time.deltaTime);
		transform.rotation=Quaternion.RotateTowards(transform.rotation,downRot,rotateSpeed);
	}else{
		transform.position=Vector3.MoveTowards(transform.position,upPos,moveSpeed*Time.deltaTime);
		transform.rotation=Quaternion.RotateTowards(transform.rotation,upRot,rotateSpeed);
	}
}