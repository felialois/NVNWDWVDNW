var speed:float=10;
function Update(){
	transform.rotation.eulerAngles.y+=speed*Time.deltaTime;
}