function search(text){
	listImage = document.getElementById("itemBlock").getElementsByClassName("itemsDisplay");
	text = text.toUpperCase();
	for(element of listImage){
		if(element.name.toUpperCase().indexOf(text) == -1){
			element.style.display = "none";
		}	else	{
			element.style.display = "inline-block";
		}
	}
}
