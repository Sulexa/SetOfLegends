key = "90796cbd-992d-4304-a799-b90dc5150bca";

function getIdByName(name, server, championId){
	var url = "https://".concat(server).concat(".api.pvp.net/api/lol/").concat(server).concat("/v1.4/summoner/by-name/").concat(name).concat("?api_key=").concat(key);
	var req = new XMLHttpRequest();
	req.open('GET', url, true);
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if(req.status == 200){
				var player = JSON.parse(req.responseText);
				var id;
				Object.keys(player).forEach(function (key) {
					id = player[key].id;
				});
				getMatchHistory(id, server, championId);
				}
			else
				console.log("Erreur pendant le chargement de la page.\n");
		}
	};
	req.send(null);
}

function getMatchHistory(id, server, championId){
	var url = "https://".concat(server).concat(".api.pvp.net/api/lol/").concat(server).concat("/v2.2/matchhistory/").concat(id).concat("?championIds=").concat(championId).concat("&rankedQueues=RANKED_SOLO_5x5&api_key=").concat(key);
	var req = new XMLHttpRequest();
	req.open('GET', url, true);
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if(req.status == 200){
				var history = JSON.parse(req.responseText);
				var itemList = new Array();
				for(var i = 0; i<10; i++){
					itemList.push(history.matches[i].participants[0].stats.item0);
					itemList.push(history.matches[i].participants[0].stats.item1);
					itemList.push(history.matches[i].participants[0].stats.item2);
					itemList.push(history.matches[i].participants[0].stats.item3);
					itemList.push(history.matches[i].participants[0].stats.item4);
					itemList.push(history.matches[i].participants[0].stats.item5);
				}
				var counts = {};
				itemList.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
				console.log(counts);
				keysSorted = Object.keys(counts).sort(function(a,b){return counts[b]-counts[a]})
				fillSessionItemsPlayer(keysSorted);

				}
			else
				console.log("Erreur pendant le chargement de la page.\n");
		}
	};
	req.send(null);
}


