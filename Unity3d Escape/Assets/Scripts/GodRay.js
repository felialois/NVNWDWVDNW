var thePlayer:Transform;
var distance:float;
var distanceDecrease:float=5;//How much the change in distance affects the color
var opactiy:float;
var rend: Renderer;
var startColor:Color;

function Start() {
	rend = GetComponent.<Renderer>();
	startColor=rend.material.GetColor("_TintColor");
}

function Update () {
	distance=Vector2.Distance(Vector2(thePlayer.position.x,thePlayer.position.z),Vector2(transform.position.x,transform.position.z));
	opacity=distance/distanceDecrease;
	rend.material.SetColor("_TintColor",Color(startColor.r,startColor.g,startColor.b,opacity));
}