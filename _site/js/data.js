for (let data of [BattlePokedex, BattleMovedex, BattleItems, BattleAbilities, BattleTypeChart]) {
	for (let key in data) {
		data[key].id = key;
	}
}

exports.BattleStatNames = {
  hp: 'HP',
	atk: 'Atk',
	def: 'Def',
	spa: 'SpA',
	spd: 'SpD',
	spe: 'Spe',
}

function getItemIcon(item) {
    var num = 0;
    if (typeof item === "number") {
      num = item;
    } else if (typeof item === "string" && exports.BattleItems) {
      item = exports.BattleItems[toID(item)];
      num = ItemSprites[item.id] ?? 0;
    } else {
      num = ItemSprites[item.id] ?? 0;
    }
    var top = Math.floor(num / 16) * 24;
    var left = (num % 16) * 24;
    return ( "background:transparent url("+ResourcePrefix+"sprites/itemicons-sheet.png?g9) no-repeat scroll -"+left+"px -"+top+"px" );
}

function getTypeIcon(type, b) {
  type = getID(BattleTypeChart, type).name
  if (!type) type = "???";
  var sanitizedType = type.replace(/\?/g, "%3f");
  return ( '<img src="'+ResourcePrefix+"sprites/types/"+sanitizedType+'.png" alt="'+type+'" height="14" width="32" class="pixelated'+(b ? " b" : "")+'" />' );
};

function getPokemonIconNum(id) {
  if (id in PokemonIconIndexes) {
    return PokemonIconIndexes[id];
  }
  let pokemon = getID(BattlePokedex, id);
  return pokemon?.num ?? 0;
}

function getPokemonIcon(pokemon) {
  if (pokemon === 'pokeball') {
    return `background:transparent url(${ResourcePrefix}sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll -0px 4px`;
  } else if (pokemon === 'pokeball-statused') {
    return `background:transparent url(${ResourcePrefix}sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll -40px 4px`;
  } else if (pokemon === 'pokeball-fainted') {
    return `background:transparent url(${ResourcePrefix}sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll -80px 4px;opacity:.4;filter:contrast(0)`;
  } else if (pokemon === 'pokeball-none') {
    return `background:transparent url(${ResourcePrefix}sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll -80px 4px`;
  }

  let id = toID(pokemon);
  let num = getPokemonIconNum(id);

  let top = Math.floor(num / 12) * 30;
  let left = (num % 12) * 40;
  return `background:transparent url(${ResourcePrefix}sprites/pokemonicons-sheet.png?v14) no-repeat scroll -${left}px -${top}px`;
}

function getCategoryIcon(category) {
  var categoryID = toID(category);
  var sanitizedCategory = "";
  switch (categoryID) {
    case "physical":
    case "special":
    case "status":
      sanitizedCategory =
        categoryID.charAt(0).toUpperCase()+categoryID.slice(1);
      break;
    default:
      sanitizedCategory = "undefined";
      break;
  }

  return ( '<img src="'+ResourcePrefix+"sprites/categories/"+sanitizedCategory+'.png" alt="'+sanitizedCategory+'" height="14" width="32" class="pixelated" />' );
};

function escapeHTML(str, jsEscapeToo) {
	str = String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	if (jsEscapeToo) str = str.replace(/\\/g, '\\\\').replace(/'/g, '\\\'');
	return str;
};

function toID(text) {
	if (text?.id) {
		text = text.id;
	} else if (text?.userid) {
		text = text.userid;
	}
	if (typeof text !== 'string' && typeof text !== 'number') return '';
	return ('' + text).toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function getID(obj, text) {
  return obj[toID(text)]
}

function getLearnset(pokemonId) {
	let learnset = Learnsets[pokemonId];
	if (!learnset|| learnset.length == 0) {
		learnset = Learnsets[toID(BattlePokedex[pokemonId]?.baseSpecies)];
	}
	return learnset ?? []
}

function canLearn(pokemonId, moveId) {
	return getLearnset(pokemonId).some(n => n.move == moveId);
}