var thePaper:GameObject;
var theWord:GameObject;
var theMat:Material;
var isActive:boolean=false;
var canClose:boolean=true;//Just for pausing

function Activate () {
	theWord.GetComponent.<Renderer>().material=theMat;
	thePaper.SetActive(true);
	isActive=true;
	GetComponent.<AudioSource>().Play();
}

function Update(){
	if(isActive&&(Input.GetKeyDown(KeyCode.E)||Input.GetMouseButtonDown(0))){//If we click or press e, close the book
		Deactivate();
	}
}

function Deactivate(){
	if(canClose){
		yield WaitForSeconds(0.05);
		thePaper.SetActive(false);
		isActive=false;
		GetComponent.<AudioSource>().Play();
	}
}