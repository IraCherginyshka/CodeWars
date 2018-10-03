
//Two fighters, one winner.
/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

*/

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name };

}

function declareWinner(fighter1, fighter2, firstAttacker) {

    var i1 = 0;
    while(fighter2.health > 0) {
      fighter2.health -=  fighter1.damagePerAttack;
      i1++;
    }

    var i2 = 0;
    while(fighter1.health > 0) {
      fighter1.health -=  fighter2.damagePerAttack;
      i2++;
    }
    if (i1 == i2) {
      return firstAttacker;
    } else if (i1 > i2) {
      return fighter2.name;
    }
    return fighter1.name;


}

	console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"));//, "Lew");

	console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"));//, "Harry");

	console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"));//, "Harald")
