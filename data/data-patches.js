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

  // Minior manual patches
  BattlePokedex["minior"].baseForme = "Meteor";
  BattlePokedex["minior"].spriteId = "minior-meteor";

  // Zygarde manual patches
  BattlePokedex["zygarde"].abilities = BattlePokedex["zygarde50"].abilities;
  BattlePokedex["zygarde"].stats = BattlePokedex["zygarde50"].stats;
  BattlePokedex["zygarde"].otherFormes = ["Zygarde-10%", "Zygarde-Complete"];
  BattlePokedex["zygarde"].formeOrder = [
    "Zygarde",
    "Zygarde-10%",
    "Zygarde-Complete",
  ];
  BattleLearnsets["zygarde"] = BattleLearnsets["zygarde50"];
  delete BattlePokedex["zygarde50"];

  // Non-Combat formes
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
    "mewtwomegax",
    "mewtwomegay",
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
    "rayquazamega",
    "lopunnymega",
    "garchompmega",
    "lucariomega",
    "abomasnowmega",
    "gallademega",
    "audinomega",
    "dianciemega",
    "zygardecomplete",
    "mimikyubusted",
    "mimikyubustedtotem",
    "wishiwashischool"
  ];

  for (let forme of formes) {
    BattleLearnsets[forme] = BattleLearnsets[BattlePokedex[forme].baseSpecies.toLowerCase()]
  }
};
