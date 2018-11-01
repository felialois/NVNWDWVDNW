var range:float=5;
var selectedObject:GameObject;
var canRaycast:boolean=true;

function Update () {
	if(canRaycast){
		var hit:RaycastHit;
		if(Physics.Raycast(transform.position,transform.forward,hit,range)){//We are close to something
			if(selectedObject!=hit.transform.gameObject){//Are we looking at something for the first time
				if(selectedObject!=null&&selectedObject.tag=="Selectable"){//Disable the previous selected gui
					if(selectedObject.transform.Find("SelectGUI"))
						selectedObject.transform.Find("SelectGUI").gameObject.SetActive(false);
				}
				
				if(hit.transform.tag=="Selectable"){//Is this object selectable?
					hit.transform.Find("SelectGUI").gameObject.SetActive(true);//Set the selected gui to be visable
				}
			}
			selectedObject=hit.transform.gameObject;
		}else{
			if(selectedObject!=null){//Disable the previous selected gui
				if(selectedObject.tag=="Selectable"){
					if(selectedObject.transform.Find("SelectGUI"))
						selectedObject.transform.Find("SelectGUI").gameObject.SetActive(false);
				}
			}
			selectedObject=null;
		}
		
		if(Input.GetKeyDown(KeyCode.E)){//Send the object a message
			if(selectedObject!=null&&selectedObject.tag=="Selectable"){
				selectedObject.SendMessage("Activate");
			}
		}
	}
}