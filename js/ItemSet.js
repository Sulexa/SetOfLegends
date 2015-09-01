function createItemSet(){
	var itemSet = new Object();
	itemSet.title = document.getElementById("title").value;
	itemSet.type = document.getElementById("type").value;
	itemSet.map = document.getElementById("map").value;
	itemSet.mode = document.getElementById("mode").value;
	itemSet.priority = document.getElementById("priority").value;
	itemSet.sortrank = document.getElementById("sortrank").value;
	var blocks = document.getElementsByClassName("block");
	itemSet.blocks = new Array();
	for(var block of blocks){
		var tempBlock = new Object();

		for (var member in tempBlock) delete tempBlock[member];
		tempBlock.type = block.getElementsByClassName("blockType")[0].value;
		tempBlock.recMath = block.getElementsByClassName("blockRecMath")[0].value;
		tempBlock.minSummonerLevel = block.getElementsByClassName("blockMinSummonerLevel")[0].value;
		tempBlock.maxSummonerLevel = block.getElementsByClassName("blockMaxSummonerLevel")[0].value;
		
		if(block.getElementsByClassName("blockShowIfSummonerSpell")[0].firstElementChild.lastElementChild.checked){
			tempBlock.showIfSummonerSpell = block.getElementsByClassName("blockShowIfSummonerSpell")[0].lastElementChild.value;
		}
		
		if(block.getElementsByClassName("blockHideIfSummonerSpell")[0].firstElementChild.lastElementChild.checked){
			tempBlock.hideIfSummonerSpell = block.getElementsByClassName("blockHideIfSummonerSpell")[0].lastElementChild.value;
		}
		tempBlock.items = new Array();
		var tempItemList = block.lastElementChild.children;
		for(var item of tempItemList){
			var tempItem = new Object();
			for (var member in tempItem) delete tempItem[member];
			tempItem.id = item.idItem;
			//tempItem.count = item.count;
			tempBlock.items.push(tempItem);
		}		
		itemSet.blocks.push(tempBlock);
	}
	var blob = new Blob([JSON.stringify(itemSet)], {type: "text/plain;charset=utf-8"});
	saveAs(blob, itemSet.title.concat(".json"));
	/*console.log(itemSet);
	console.log(JSON.stringify(itemSet));*/
}

function loadItemSet(itemSet){
	
	var widthWindow = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	var tempHash = {};
	Object.keys(items.data).forEach(function (key) {
		tempHash[items.data[key].id.toString()] = [items.data[key].name];
	});
	
	
	document.getElementById("title").value = itemSet.title;
	document.getElementById("type").value = itemSet.type;
	document.getElementById("map").value = itemSet.map;
	document.getElementById("mode").value = itemSet.mode;
	document.getElementById("priority").value = itemSet.priority;
	document.getElementById("sortrank").value = itemSet.sortrank;
	for(blocka of itemSet.blocks){
		addBlock();
		var tempBlock = document.getElementsByClassName("block")[document.getElementsByClassName("block").length-1];
		/*tempBlock.type = block.getElementsByClassName("blockType").value;
		tempBlock.recMath = block.getElementsByClassName("blockRecMath").value;
		tempBlock.minSummonerLevel = block.getElementsByClassName("blockMinSummonerLevel").value;
		tempBlock.maxSummonerLevel = block.getElementsByClassName("blockMaxSummonerLevel").value;
		tempBlock.showIfSummonerSpell = block.getElementsByClassName("blockShowIfSummonerSpell").value;
		tempBlock.hideIfSummonerSpell = block.getElementsByClassName("blockHideIfSummonerSpell").value;*/
		for(item of blocka.items){
			var picture = item.id.concat(".png");
			var itemImg = new Image();
			itemImg.src = "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/item/".concat(picture);
			itemImg.width = (widthWindow*0.5/12).toString();
			itemImg.name = tempHash[item.id];
			itemImg.title = tempHash[item.id];
			itemImg.idItem = item.id;
			itemImg.id = Math.random().toString();
			itemImg.draggable = true;
			tempBlock.lastElementChild.appendChild(itemImg);
		}
	}
}
