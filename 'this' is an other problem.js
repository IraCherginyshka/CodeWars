//"this" is an other problem
/*
After you've solved @priyankaherur's problem ( http://www.codewars.com/kata/this-is-a-problem/javascript ) you may try to solve this other one.

The problem:

Having created a function NamedOne which takes first & last names as parameters and returns an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties which should be all accessibles, we discovered that "accessible" also means "mutable".

If, for example, we've got a "NamedOne" like this :

var namedOne = new NamedOne("Naomi","Wang")
namedOne.firstName // -> "Naomi"
namedOne.lastName  // -> "Wang"
namedOne.fullName  // -> "Naomi Wang"
...properties may be changed :

namedOne.firstName = "John"
namedOne.firstName // -> "John"
namedOne.lastName = "Doe"
namedOne.lastName  // -> "Doe"
...but all properties are not updated !

namedOne.fullName  // -> "Naomi Wang"
//-- Oh no ! we want fullName == "John Doe" now !
Your mission:

So the purpose of this kata is to create an object with accessible and "updatable" (can i say that?) properties.

If .firstName or .lastName are changed, then .fullName should also be changed
If .fullName is changed, then .firstName and .lastName should also be changed.
Note : "input format" to .fullName will be firstName + space+ lastName. If given fullName isn't valid then no property is changed.

Examples:

var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName = "John"
namedOne.lastName = "Doe"
// ...then...
namedOne.fullName // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith"
// ...then...
namedOne.firstName // -> "Bill"
namedOne.lastName  // -> "Smith"

// -- But :
namedOne.fullName = "Tom" // -> no : lastName missing
namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
namedOne.fullName // -> "Bill Smith" (unchanged)
Can you change our function to create such a NamedOne object ?
*/

function NamedOne(first, last) {

  Object.defineProperties(this, {
    firstName: {
      value: first,
      writable: true
    },

    lastName: {
      value: last,
      writable: true
    },

    fullName: {
      get: function() {
        return this.firstName + ' ' + this.lastName;
      },
      set: function(name) {
        if (/^[A-Z][a-z]+\s[A-Z][a-z]+$/.test(name)) {
          this.firstName = (/^[A-Z][a-z]+/.exec(name)).join();
          this.lastName = (/[A-Z][a-z]+$/.exec(name)).join();
        }
      }
    }
  });

}

var n = new NamedOne('John', 'Doe');

console.log(n.fullName);

n.firstName = 'ggggg';
n.lastName = 'yyyyy';

console.log(n.firstName);
console.log(n.lastName);
console.log(n.fullName);
n.fullName = 'Dfghh Hjkkl';
console.log(n.firstName);
console.log(n.lastName);
console.log(n.fullName);

n.fullName = 'DfghhHjkkl';
console.log(n.firstName);
console.log(n.lastName);
console.log(n.fullName);

n.fullName = 'Fghhjj';
console.log(n.firstName);
console.log(n.lastName);
console.log(n.fullName);
