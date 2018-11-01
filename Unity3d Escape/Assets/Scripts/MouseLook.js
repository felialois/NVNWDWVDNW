var lookSpeed:float=5;
var parent:GameObject;
var smoothness:float=1;
private var HorRot:float=0;//Horizontal (y)
private var VerRot:float=0;//Vertical (x)
private var currentX:float;
private var currentY:float;
private var HorRotV:float;//Necissary for smooth rotations
private var VerRotV:float;//Necissary for smooth rotations

function Update () {
	HorRot+=Input.GetAxis("Mouse X")*lookSpeed;
	VerRot+=Input.GetAxis("Mouse Y")*lookSpeed;
	VerRot=Mathf.Clamp(VerRot,-85,85);//No more rolling
	
	currentX=Mathf.SmoothDamp(currentX,HorRot,HorRotV,smoothness);
	currentY=Mathf.SmoothDamp(currentY,VerRot,VerRotV,smoothness);
	
	transform.localRotation=Quaternion.Euler(currentY*-1,0,0);
	parent.transform.rotation=Quaternion.Euler(0,currentX,0);
}