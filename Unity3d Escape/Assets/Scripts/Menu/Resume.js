private var rend: Renderer;
var hoverColor:Color;
var isHovering:boolean=false;
var player:GameObject;

function Start() {
	rend = GetComponent.<Renderer>();
}

function OnMouseEnter () {
	rend.material.color = hoverColor;
	//GetComponent.<AudioSource>().Play();
	isHovering=true;
}

function OnMouseExit () {
	rend.material.color = Color.white;
	isHovering=false;
}

function Update(){
	if(Input.GetMouseButtonDown(0)&&isHovering){
		player.SendMessage("unPause");
	}
}