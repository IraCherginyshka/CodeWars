/*Task

Write the function siegfried to replace the letters of a given sentence.

Apply the rules using the course notes below. Each week you will learn some more rules.

Und by ze fifz vek yu vil be speakink viz un aksent lik Siegfried viz no trubl at al!
Lessons

Week 1

ci -> si
ce -> se
c -> k (except ch leave alone)
Week 2

ph -> f
Week 3

remove trailing e (except for all 2 and 3 letter words)
replace double letters with single letters (e.g. tt -> t)
Week 4

th -> z
wr -> r
wh -> v
w -> v
Week 5

ou -> u
an -> un
ing -> ink (but only when ending words)
sm -> schm (but only when beginning words)
Notes

You must retain the case of the original sentence
Apply rules strictly in the order given above
Rules are cummulative. So for week 3 first apply week 1 rules, then week 2 rules, then week 3 rules

*/

function siegfried(week, str) {

  function cK(str, offset, s) {
    if (str[0] === 'c') {
      return 'k' + s[offset + 1];
    } else if (str[0] === 'C') {
     return 'K' + s[offset + 1];
    }
  }

  function thZ(str, offset, s) {
    if (str[0] === 't') {
      return 'z';
    } else if (str[0] === 'T') {
     return 'Z';
    }
  }

  function wV(str, offset, s) {
    if (str[0] === 'w') {
      return 'v';
    } else if (str[0] === 'W') {
     return 'V';
    }
  }

  function schm(str, offset, s) {
    if (str[0] === 's') {
      return 'schm';
    } else if (str[0] === 'S') {
     return 'Schm';
    }
  }

  function cs(str, offset, s) {
    if (str[0] === 'c') {
      return 'si';
    } else if (str[0] === 'C') {
     return 'Si';
    }
  }

  function cse(str, offset, s) {
    if (str[0] === 'c') {
      return 'se';
    } else if (str[0] === 'C') {
     return 'Se';
    }
  }

  function phf(str, offset, s) {
    if (str[0] === 'p') {
      return 'f';
    } else if (str[0] === 'P') {
     return 'F';
    }
  }

  function anun(str, offset, s) {
    if (str[0] === 'a') {
      return 'un';
    } else if (str[0] === 'A') {
     return 'Un';
    }
  }
  function wr(str, offset, s) {
    if (str[0] === 'w') {
      return 'r';
    } else if (str[0] === 'W') {
     return 'R';
    }
  }
  var str1 = str.replace(/ci/gi, cs).replace(/ce/gi, cse).replace(/c[^h]/gi, cK);
  var str2 = str1.replace(/ph/gi, phf);
  var str3 = str2.replace(/\b\w{3,}e\b/g, function(str) { return str.slice(0, str.length - 1) }).replace(/([a-z])\1{1}/gi, function(str, offset, s) {return str[0]});
  var str4 = str3.replace(/th/gi, thZ).replace(/wr/gi, wr).replace(/wh/gi, wV).replace(/w/gi, wV);
  var str5 = str4.replace(/ou/g, 'u').replace(/an/gi, anun).replace(/ing\b/g, 'ink').replace(/\bsm/gi, schm);

  if (week == 1) {
    return str1;
  } else if (week == 2) {
    return str2;
  } else if (week == 3) {
    return str3;
  } else if (week == 4) {
    return str4;
  } else {
    return str5;
  }

}

console.log(siegfried(5, 'ff gg hhh 22 34555'));
