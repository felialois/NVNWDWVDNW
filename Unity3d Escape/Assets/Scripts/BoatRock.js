var frequency:float=5;
var amount:float=5;
private var theRot:float=0;
var adder:float=0;

function Update () {
	theRot=amount*Mathf.Sin(frequency*Time.time);
	transform.localRotation.eulerAngles.y=theRot+adder;
}