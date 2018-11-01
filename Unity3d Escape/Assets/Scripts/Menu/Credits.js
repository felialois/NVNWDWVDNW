var becomeVis:boolean=false;
var becomeVis2:boolean=false;//For the dark fade
var opactiy:float=0;
var opactiy2:float=0;
var visSpeed:float=0.5;
var rend: Renderer;
var cover:GameObject;
var rend2:Renderer;

function Start() {
	rend = GetComponent.<Renderer>();
	rend2 = cover.GetComponent.<Renderer>();
}

function Activate () {
	becomeVis=true;
	yield WaitForSeconds(5);
	becomeVis2=true;
	yield WaitForSeconds(5);
	Application.LoadLevel(0);
}

function Update () {
	if(becomeVis){
		opactiy+=visSpeed*Time.deltaTime;
		rend.material.SetColor("_Color",Color(1,1,1,opactiy));
	}
	if(becomeVis2){
		opactiy2+=visSpeed*Time.deltaTime;
		rend2.material.SetColor("_Color",Color(0,0,0,opactiy2));
	}
}