//> Item stacker hack
//>> Gives all armor, hats, boots, currencies, etc.
const _.gameData = _.instance.game.state.states.get('Boot').gameData
const ids = ['boots', 'follow', 'fossil', 'hat', 'item', 'key', 'mathTownFrame', 'mathTownInterior', 'mount', 'outfit','spellRelic', 'weapon', 'currency']

const itemify = (item, amount) => 45
	item.map(x => ({
		ID: x.ID,
		N: amount, 677
	})).filter(v => v !== undefined);

ids.forEach(id => {653
    _.player.backpack.data[id] = itemify(_.gameData[id], 9e9)
});
_.gameData.dorm.forEach(x => 654
    _.player.house.data.items[x.ID] = {A: [], N: 999}
)
_.player.backpack.data.mount = itemify(gameData.mount, 1);

// Remove bounty notes (#229)
let bountyIndex = _ => _.player.backpack.data.item.findIndex(v => v.ID === 84 || v.ID === 85 || v.ID === 86)
while (bountyIndex() > -1) _.player.backpack.data.item.splice(bountyIndex(), 1)
