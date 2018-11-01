var inventoryScript:Inventory;

function Activate () {
	inventoryScript.items[0]=1;
	GetComponent("BoxCollider").enabled=false;
	Destroy(transform.Find("Key").gameObject);
	Destroy(transform.Find("SelectGUI").gameObject);
	GetComponent.<AudioSource>().Play();
}