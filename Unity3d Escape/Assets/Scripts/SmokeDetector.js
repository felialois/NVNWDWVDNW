var theLight:GameObject;
var flashTime:float=5;
var isOn:boolean=false;
var onMat:Material;
var offMat:Material;
var upPos:Vector3;
var downPos:Vector3;
var fallSpeed:float=5;
var isUp:boolean=true;

InvokeRepeating("flash",flashTime,flashTime);

function flash () {
	if(transform.position==upPos){
		isOn=!isOn;
		if(isOn){
			theLight.GetComponent.<Renderer>().material=onMat;
		}else{
			theLight.GetComponent.<Renderer>().material=offMat;
		}
	}
}

function Activate(){
	isUp=false;
}

function Update () {
	if(isUp){//Move towards the upPos
		transform.position=Vector3.MoveTowards(transform.position,upPos,fallSpeed*Time.deltaTime);
	}else{
		transform.position=Vector3.MoveTowards(transform.position,downPos,fallSpeed*Time.deltaTime);
	}
}