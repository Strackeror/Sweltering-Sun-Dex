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
