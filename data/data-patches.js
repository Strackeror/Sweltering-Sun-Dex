exports.BattleSpriteOverrides = {
  minior: "minior-meteor",
};

function toId(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

exports.patch = function (
  BattleAbilities,
  BattleLearnsets,
  BattleMovedex,
  BattlePokedex
) {
  // Hustle Typo
  BattleAbilities["hustle"].desc =
    "Greatly boosts the Attack stat by 50% for a 20%\naccuracy drop on most Physical moves.";

  // Fix PPBoosts for low pp moves
  for (let move_key in BattleMovedex) {
    let move = BattleMovedex[move_key];
    if (move.pp <= 3) {
      move.noPPBoosts = true;
    }
  }

  // Couple of cases where the base forme should instead show another forme
  let replaceBaseFormes = ["zygarde50", "gourgeistsmall"];
  for (let formeName of replaceBaseFormes) {
    let baseFormeName = toId(BattlePokedex[formeName].baseSpecies);
    let species = BattlePokedex[formeName];
    let baseSpecies = BattlePokedex[baseFormeName];
    baseSpecies.abilities = species.abilities;
    baseSpecies.stats = species.stats;
    baseSpecies.prevo = species.prevo;
    baseSpecies.evoLevel = species.evoLevel;
    baseSpecies.evoType = species.evoType;
    baseSpecies.evoItem = species.evoItem;
    baseSpecies.otherFormes = baseSpecies.otherFormes.filter(
      (n) => toId(n) != formeName
    );
    baseSpecies.formeOrder = baseSpecies.formeOrder.filter(
      (n) => toId(n) != formeName
    );
    BattleLearnsets[baseFormeName] = BattleLearnsets[formeName];
    delete BattlePokedex[formeName];
  }

  // Combat-Only formes
  let formes = [
    "venusaurmega",
    "charizardmegax",
    "charizardmegay",
    "blastoisemega",
    "beedrillmega",
    "pidgeotmega",
    "alakazammega",
    "slowbromega",
    "gengarmega",
    "kangaskhanmega",
    "pinsirmega",
    "gyaradosmega",
    "aerodactylmega",
    "ampharosmega",
    "steelixmega",
    "scizormega",
    "heracrossmega",
    "houndoommega",
    "tyranitarmega",
    "sceptilemega",
    "blazikenmega",
    "swampertmega",
    "gardevoirmega",
    "sableyemega",
    "mawilemega",
    "aggronmega",
    "medichammega",
    "manectricmega",
    "sharpedomega",
    "cameruptmega",
    "altariamega",
    "banettemega",
    "absolmega",
    "glaliemega",
    "salamencemega",
    "metagrossmega",
    "latiasmega",
    "latiosmega",
    "lopunnymega",
    "garchompmega",
    "lucariomega",
    "abomasnowmega",
    "gallademega",
    "audinomega",
    "dianciemega",
    "mimikyubusted",
    "mimikyubustedtotem",
    "wishiwashischool",
    "shayminsky",
    "darmanitanzen",
    "greninjaash",
    "kyuremwhite",
    "kyuremblack",
    "aegislashblade",
    "meloettapirouette",
    "cherrimsunshine",
  ];

  for (let forme of formes) {
    delete BattleLearnsets[forme];
  }

  let unusables = [
    "mewtwo",
    "mewtwomegax",
    "mewtwomegay",

    "kyogre",
    "kyogreprimal",
    "groudon",
    "groudonprimal",
    "rayquaza",
    "rayquazamega",

    "dialga",
    "palkia",
    "arceus",

    "zekrom",
    "reshiram",

    "xerneas",
    "yveltal",
    "zygardecomplete",
  ];
  // Unusable pokes
  for (let unusable of unusables) {
    BattleLearnsets[unusable].learnset = {};
    BattlePokedex[unusable].tier = "Unusable";
  }

  // Redundant formes to delete
  let deleteFormes = [
    "pumpkaboosmall",
    "pumpkaboolarge",
    "pumpkaboosuper",
    "gourgeistlarge",
  ];
  for (let formeName of deleteFormes) {
    let species = BattlePokedex[formeName];
    delete BattlePokedex[formeName];
    let baseSpecies = BattlePokedex[toId(species.baseSpecies)];
    baseSpecies.otherFormes = baseSpecies.otherFormes.filter(
      (f) => toId(f) != formeName
    );
    baseSpecies.formeOrder = baseSpecies.formeOrder.filter(
      (f) => toId(f) != formeName
    );
  }

  // Minior manual patches
  BattlePokedex["minior"].baseForme = "Meteor";
  BattleLearnsets["minior"].learnset = {};

  // Pumpkaboo manual patch
  delete BattlePokedex["pumpkaboo"].formeOrder;
  delete BattlePokedex["pumpkaboo"].otherFormes;
  BattlePokedex["pumpkaboo"].evos[1] = "Gourgeist";

  // Aegislash-Blade manual patch
  BattlePokedex["aegislashblade"].abilities = ["Stance Change"]
};
