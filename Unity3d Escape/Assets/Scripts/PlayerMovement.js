var maxWalkSpeed:float=20;
var jumpForce:float=10;
var walkAcceleration:float=1;
var walkDeacceleration:float=5;
var footPos:Transform;
private var horizontalMovement:Vector2;
var grounded:boolean=false;
private var rb: Rigidbody;
private var deAccX:float;//Necissary for smooth deacceleration
private var deAccZ:float;//Necissary for smooth deacceleration
function Start() {
	rb = GetComponent.<Rigidbody>();
}

function FixedUpdate() {

	//Max movement affecter
	horizontalMovement=Vector2(rb.velocity.x,rb.velocity.z);
	if(horizontalMovement.magnitude>maxWalkSpeed){
		horizontalMovement=horizontalMovement.normalized;
		horizontalMovement*=maxWalkSpeed;
	}
	rb.velocity.x=horizontalMovement.x;
	rb.velocity.z=horizontalMovement.y;
	
	//Deacceleration
	if(Input.GetAxisRaw("Horizontal")==0&&Input.GetAxisRaw("Vertical")==0){
		rb.velocity.x=Mathf.SmoothDamp(rb.velocity.x,0,deAccX,walkDeacceleration);
		rb.velocity.z=Mathf.SmoothDamp(rb.velocity.z,0,deAccZ,walkDeacceleration);
	}
	
	//Movement
	rb.AddRelativeForce(Input.GetAxis("Horizontal")*walkAcceleration,0,Input.GetAxis("Vertical")*walkAcceleration);
}

function Update(){
	//Ground Detection
	var hit:RaycastHit;
	if(Physics.Raycast(footPos.position,Vector3.up*-1,hit,0.1)){
		grounded=true;
	}else{
		grounded=false;
	}
	
	//Jumping
	if(Input.GetButtonDown("Jump")&&grounded){
		rb.velocity.y=0;
		rb.AddForce(0,jumpForce,0);
		grounded=false;//Just to be safe
		gameObject.SendMessage("Jumped");
	}
}