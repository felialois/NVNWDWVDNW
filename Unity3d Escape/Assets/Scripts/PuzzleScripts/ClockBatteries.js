var batteryNumber:int=0;
var theClock:GameObject;
var theInventory:Inventory;
var battery1:GameObject;
var battery2:GameObject;

function Activate() {
	if(theInventory.items[1]>0){
		theInventory.items[1]-=1;
		batteryNumber++;
		if(batteryNumber==1){
			battery1.SetActive(true);
		}else{
			battery2.SetActive(true);
			theClock.SendMessage("Power");
		}
		GetComponent.<AudioSource>().Play();
	}	
}