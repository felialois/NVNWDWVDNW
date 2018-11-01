var locks:TurningWheel[];
var clock:Clock;
var correct:boolean=false;
var safeWall:Transform;
var heightChange:float=0.5;
var moveSpeed:float=5;
private var heightInit:float;

//Time stuff
var hourTime:float;
var minuteTime:float;
var secondTime:float;

InvokeRepeating("Check",0.9,1);

function Start(){
	heightInit=safeWall.position.y;
}
function Check () {
	if(!correct){
		hourTime=10*locks[0].currentNumber+locks[1].currentNumber;
		minuteTime=10*locks[2].currentNumber+locks[3].currentNumber;
		secondTime=10*locks[4].currentNumber+locks[5].currentNumber;
		
		if(Mathf.Floor(clock.hours)==hourTime&&Mathf.Floor(clock.minutes)==minuteTime&&clock.seconds==secondTime){
			correct=true;
			GetComponent.<AudioSource>().Play();
		}
	}
}

function Update () {
	if(correct){
		safeWall.position.y=Mathf.MoveTowards(safeWall.position.y,heightInit+heightChange,moveSpeed*Time.deltaTime);
	}
}