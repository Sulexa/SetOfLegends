/*function fillSessionSummonerSpells(number, className){
	var widthWindow = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	pourcent = (widthWindow*0.5/number).toString();
	CN = className;
	myHash = new Object();
	Object.keys(summonerSpells.data).forEach(function (key) {
		myHash[summonerSpells.data[key].id.toString()] = summonerSpells.data[key].name;
	});
	keysSorted = Object.keys(myHash).sort(function(a,b){return myHash[a].localeCompare(myHash[b])})
	keysSorted.forEach(createElementSummonerSpells);
	
}
function createElementSummonerSpells(element, index, array) {
		var picture = element.concat(".png");
		var champImg = new Image();
		champImg.src = "http://ddragon.leagueoflegends.com/cdn/5.2.1/img/spell/".concat(picture);
		champImg.width = pourcent;
		champImg.name = element;
		champImg.title = element;
		
		var selectImg = new Image();
		selectImg.src = ".\\data\\UnSelected.png";
		selectImg.width = pourcent/5;
		selectImg.top = -pourcent;
		selectImg.onclick = select;
		selectImg.selected = false;
		selectImg.title = element;

		
		champImg.onclick = function() {
			selectImg.click();
		}
						
		balA = document.createElement('a');
		balA.className = "selected";
		balA.appendChild(selectImg);
		balA.appendChild(champImg);
		document.getElementsByClassName(CN)[document.getElementsByClassName(CN).length-1].appendChild(balA);
}
function select(){
	console.log("test");
	if(this.selected){
		this.selected = false;
		this.src = ".\\data\\UnSelected.png";
	}	else	{
		this.selected = true;
		this.src = ".\\data\\Selected.png";
	}
}*/

function genereDropListSummonerSpells(className){
	var option;
	keysSorted = Object.keys(summonerSpells.data).sort(function(a,b){return summonerSpells.data[a].name.localeCompare(summonerSpells.data[b].name)})
	Object.keys(keysSorted).forEach(function (element) {
		option = document.createElement("option");
		option.text = summonerSpells.data[keysSorted[element]].name;
		option.value = summonerSpells.data[keysSorted[element]].id;
		document.getElementsByClassName(className)[document.getElementsByClassName(className).length-1].lastElementChild.add(option);
	});
}

function fillSessionItemsPlayer(data){
	var widthWindow = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	pourcent = (widthWindow*0.5/12).toString();
	data.forEach(createElementItemsPlayer);
}

function createElementItemsPlayer(element, index, array) {
		if(element != "0"){
			var picture = element.concat(".png");
			var itemImg = new Image();
			itemImg.src = "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/item/".concat(picture);
			itemImg.width = pourcent;
			itemImg.name = element
			itemImg.title = element;
			itemImg.idItem = element;
			itemImg.id = Math.random().toString();
			itemImg.draggable = true;
			itemImg.ondragstart = function(event){dragMove(event);};		
			
			document.getElementById("rightItemAccess").appendChild(itemImg);
		}
}

function fillSessionItems(data, number){
	var widthWindow = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	pourcent = (widthWindow*0.5/number).toString();
	myHash = new Object();
	Object.keys(data.data).forEach(function (key) {
		myHash[data.data[key].id.toString()] = data.data[key].name;
	});
	keysSorted = Object.keys(myHash).sort(function(a,b){return myHash[a].localeCompare(myHash[b])})
	keysSorted.forEach(createElementItems);
	
}
function createElementItems(element, index, array) {
		var picture = element.concat(".png");
		var itemImg = new Image();
		itemImg.src = "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/item/".concat(picture);
		itemImg.width = pourcent;
		itemImg.name = myHash[element];
		itemImg.title = myHash[element];
		itemImg.idItem = element;
		itemImg.id = element;
		itemImg.draggable = true;
		itemImg.ondragstart = function(event){drag(event);};
		itemImg.onmouseover = infobulle;
		itemImg.onmouseout = infobulleOut;
		itemImg.className = "itemsDisplay";
		
		document.getElementById("itemList").appendChild(itemImg);
}

function infobulle(){
	document.getElementById("popup").style.display = "block";
	document.getElementById("popup").innerHTML = items.data[this.id].name.concat("<br><br>").concat(items.data[this.id].description);
}
function infobulleOut(){
	document.getElementById("popup").style.display = "none";
}

function deroulant(element){
	if(element.isDerouler == true){
		element.parentElement.getElementsByClassName("blockCenter")[0].style.display = "none";
		element.parentElement.getElementsByClassName("blockParameters")[0].style.display = "none";
		element.isDerouler = false;
		element.children[2].style.transform = "rotate(90deg)";
	}	else	{
		element.parentElement.getElementsByClassName("blockCenter")[0].style.display = "block";
		element.parentElement.getElementsByClassName("blockParameters")[0].style.display = "block";
		element.isDerouler = true;
		element.children[2].style.transform = "rotate(0deg)";
	}
}

function deroulantCreate(){
	deroulant(this);
}

function addBlock(){
	block = document.createElement("div");
	block.className = "block";
	
	blockHead = document.createElement("div");
	blockHead.className = "blockHead";
	blockHead.onclick = deroulantCreate;
	
	balA = document.createElement("a");
	balA.innerHTML = "Block name:";
	
	balInput = document.createElement("input");
	balInput.className = "blockType";
	
	var imgCroix = new Image();
	imgCroix.src = "data/croix.png";
	imgCroix.onclick = delBlock;
	
	blockParameters = document.createElement("div");
	blockParameters.className = "blockParameters";
	
	BCbalA1 = document.createElement("a");
	BCbalA1.text = "tutorial format:";	
	
	BCbalA2 = document.createElement("a");
	BCbalA2.text = "Minimum level:";	
	
	BCbalA3 = document.createElement("a");
	BCbalA3.text = "Maximum level:";
	
	BCbalA4 = document.createElement("a");
	BCbalA4.text = "Show if summoner spell:";
	BCbalA4.style.display = "block";
	
	BCbalA5 = document.createElement("a");
	BCbalA5.text = "Hide if summoner spell:";
	BCbalA5.style.display = "block";

	recMath = document.createElement("input");
	recMath.type = "checkbox";
	recMath.className = "blockRecMath";
	
	minSummonerLevel = document.createElement("input");
	minSummonerLevel.type = "number";
	minSummonerLevel.className = "blockMinSummonerLevel";
	minSummonerLevel.style.width = "30px";
	
	maxSummonerLevel = document.createElement("input");
	maxSummonerLevel.type = "number";
	maxSummonerLevel.className = "blockMaxSummonerLevel";
	maxSummonerLevel.style.width = "30px";
	
	SISS = document.createElement("input");
	SISS.type = "checkbox";	
	
	HISS = document.createElement("input");
	HISS.type = "checkbox";

	showIfSummonerSpell = document.createElement("div");
	BCbalA4.appendChild(SISS);
	showIfSummonerSpell.appendChild(BCbalA4);
	showIfSummonerSpell.style.width = "45%";
	showIfSummonerSpell.style.textAlign = "left";
	showIfSummonerSpell.style.display = "inline-block";
	showIfSummonerSpell.className = "blockShowIfSummonerSpell";
	showIfSummonerSpell.appendChild(document.createElement("select"));

	hideIfSummonerSpell = document.createElement("div");
	BCbalA5.appendChild(HISS);
	hideIfSummonerSpell.appendChild(BCbalA5);
	hideIfSummonerSpell.style.width = "45%";
	hideIfSummonerSpell.style.textAlign = "left";
	hideIfSummonerSpell.style.display = "inline-block";
	hideIfSummonerSpell.className = "blockHideIfSummonerSpell";
	hideIfSummonerSpell.appendChild(document.createElement("select"));
	
	divSummonerSpell = document.createElement("div");

	divSummonerSpell.appendChild(showIfSummonerSpell);
	divSummonerSpell.appendChild(hideIfSummonerSpell);
	
	blockCenter = document.createElement("div");
	blockCenter.className = "blockCenter";
	blockCenter.ondrop = function(event){drop(event);};
	blockCenter.ondragover = function(event){allowDrop(event);};
	
	blockParameters.appendChild(BCbalA1);
	blockParameters.appendChild(recMath);
	blockParameters.appendChild(BCbalA2);
	blockParameters.appendChild(minSummonerLevel);
	blockParameters.appendChild(BCbalA3);
	blockParameters.appendChild(maxSummonerLevel);
	blockParameters.appendChild(divSummonerSpell);
		
	blockHead.appendChild(balA);
	blockHead.appendChild(balInput);
	blockHead.appendChild(imgCroix);
	
	block.appendChild(blockHead);
	block.appendChild(blockParameters);
	block.appendChild(blockCenter);
	
	document.getElementById("core").insertBefore(block, document.getElementById("addBlock"));
		
	genereDropListSummonerSpells("blockShowIfSummonerSpell");
	genereDropListSummonerSpells("blockHideIfSummonerSpell");
}

function delBlock(){
	console.log(this);
	console.log(this.parentNode);
	this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

function genereDropList(data){
	var option;
	keysSorted = Object.keys(data.data).sort(function(a,b){return data.data[a].name.localeCompare(data.data[b].name)})
	Object.keys(keysSorted).forEach(function (element) {
		option = document.createElement("option");
		option.text = data.data[keysSorted[element]].name;
		option.value = data.data[keysSorted[element]].id;
		document.getElementById("champsDropList").add(option);
	});
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
	ev.dataTransfer.setData("isCopy", true)
}

function dragMove(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
	ev.dataTransfer.setData("isCopy", false);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	if(ev.dataTransfer.getData("isCopy") == "true"){
		var nodeCopy = document.getElementById(data).cloneNode(true);
		nodeCopy.id = Math.random().toString();
		nodeCopy.ondragstart = function(event){dragMove(event);};
		nodeCopy.idItem = document.getElementById(data).idItem;
		ev.target.appendChild(nodeCopy);
	}	else	{
	ev.target.appendChild(document.getElementById(data));
	}
}

function dropDelete(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	if(ev.dataTransfer.getData("isCopy") == "false"){
		document.getElementById(data).parentNode.removeChild(document.getElementById(data));
	}
}
