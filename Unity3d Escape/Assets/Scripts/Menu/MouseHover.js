private var rend: Renderer;
var hoverColor:Color;
var isHovering:boolean=false;
var levelNumber:int=1;//Load this level on click. 0 is quit, 1 is load level, 2 is options
var optionsBox:GameObject;
var startText:GameObject;
var quitText:GameObject;
var optionsUp:boolean=false;

function Start() {
	rend = GetComponent.<Renderer>();
	UnityEngine.Cursor.visible = true;
}

function OnMouseEnter () {
	rend.material.color = hoverColor;
	GetComponent.<AudioSource>().Play();
	isHovering=true;
}

function OnMouseExit () {
	rend.material.color = Color.white;
	isHovering=false;
	if(optionsUp){
		rend.material.color=Color(0,0,0,0);
	}
}

function Update(){
	if((Input.GetMouseButtonDown(0)||Input.GetKeyDown(KeyCode.E))&&optionsUp){
		optionsUp=false;
		startText.SetActive(true);
		quitText.SetActive(true);
		rend.material.color=Color.white;
		optionsBox.SetActive(false);
	}else if(Input.GetMouseButtonDown(0)&&isHovering){
		if(levelNumber==1){
			Application.LoadLevel(levelNumber);
		}else if(levelNumber==2){//Pop up the options box
			startText.SetActive(false);
			quitText.SetActive(false);
			rend.material.color=Color(0,0,0,0);
			optionsBox.SetActive(true);
			optionsUp=true;
		}else if(levelNumber==0){//Quit the game
			Application.Quit();
		}
	}
}