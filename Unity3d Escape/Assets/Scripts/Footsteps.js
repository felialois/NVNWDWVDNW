var stepTimePause:float=0.5;
private var groundVelocity:float;//The squared velocity on the ground 
private var timer:float=0.5;
var footsteps:AudioClip[];
var grassFootsteps:AudioClip[];
var jumpSound:AudioClip;
var grassJumpSound:AudioClip;
var player:PlayerMovement;
var onGrass:boolean=false;
private var isGrounded:boolean=false;//Just for landing sound effect
private var yVel:float=0;
private var rb: Rigidbody;

function Start() {
	rb = GetComponent.<Rigidbody>();
}
function Update(){

	//Check for the type of ground we are on
	var ray:RaycastHit;
	if(Physics.Raycast(transform.position,transform.up*-1,ray)){
		if(ray.transform.gameObject.tag=="Terrain"){
			onGrass=true;
		}else{
			onGrass=false;
		}
	}
	
	
	//Do the sound mechanics
	groundVelocity=Vector2(rb.velocity.x,rb.velocity.z).magnitude;
	if(groundVelocity>0.5&&(Input.GetAxisRaw("Horizontal")||Input.GetAxisRaw("Vertical"))&&player.grounded){//We are moving fast enough to produce footsteps
		timer-=1*Time.deltaTime;
		if(timer<=0){
			if(!onGrass){
				GetComponent.<AudioSource>().clip=footsteps[Random.Range(0,footsteps.Length)];
			}else{
				GetComponent.<AudioSource>().clip=grassFootsteps[Random.Range(0,grassFootsteps.Length)];
			}
			GetComponent.<AudioSource>().Play();
			timer=stepTimePause;
		}
	}else{
		timer=0.1;
	}
	if(!isGrounded&&player.grounded&&yVel<0.2){
		if(!onGrass){
			GetComponent.<AudioSource>().clip=jumpSound;
		}else{
			GetComponent.<AudioSource>().clip=grassJumpSound;
		}
		GetComponent.<AudioSource>().Play();
		timer=stepTimePause;
		
	}
	isGrounded=player.grounded;
	yVel=rb.velocity.y;
	
}
function Jumped(){
	if(!onGrass){
		GetComponent.<AudioSource>().clip=jumpSound;
	}else{
		GetComponent.<AudioSource>().clip=grassJumpSound;
	}
	GetComponent.<AudioSource>().Play();
}