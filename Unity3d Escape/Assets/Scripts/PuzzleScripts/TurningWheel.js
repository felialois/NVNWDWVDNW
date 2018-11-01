var currentNumber:float=0;
var turnSpeed:float;

function Activate () {
	GetComponent.<AudioSource>().Play();
	if(currentNumber<9){
		currentNumber++;
	}else{
		currentNumber=0;
	}
}
function Update(){
	transform.localRotation=Quaternion.RotateTowards(transform.localRotation,Quaternion.Euler(0,0,currentNumber*-36),turnSpeed*Time.deltaTime);
}