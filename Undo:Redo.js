//Udo/redo
/*
The purpose of this kata is to implement the undoRedo function.

This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

set(key, value) Assigns the value to the key. If the key does not exist, creates it.

get(key) Returns the value associated to the key.

del(key) removes the key from the object.

undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

After set() or del() are called, there is nothing to redo.

All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

Any set/del after an undo should disallow new undos.
*/

function undoRedo(object) {
  function undoRedo(object) {
  	var prevObj = [];
    var n = 0;
    var clone = {};
    for(var keyC in object) {
      clone[keyC] = object[keyC];
    }
    prevObj.push(clone);

  	return {
  		set: function(key, value) {
        object[key] = value;
        var cloneSet = {};
        for(var keyCloneSet in object) {
          cloneSet[keyCloneSet] = object[keyCloneSet];
        }
        prevObj.push(cloneSet);
        n++;
      },
  		get: function(key) {
        return object[key];
      },
  		del: function(key) {
        delete object[key];
        var cloneDel = {};
        for(var keyCloneDel in object) {
          cloneDel[keyCloneDel] = object[keyCloneDel];
        }
        prevObj.push(cloneDel);
        n++;
      },
  		undo: function() {

        if (n >= 1) {
          for (var key in object) {
            delete object[key];
          }

          for(var keyClone in prevObj[n-1]) {
            object[keyClone] = prevObj[n-1][keyClone];
          }
          n--;
        } else {
          throw new Error('There is nothing to undo');
        }

      },
  		redo: function() {

        if (n < (prevObj.length - 1)) {

          for (var key in object) {
            delete object[key];
          }
          n++;
          for(var keyClone in prevObj[n]) {
            object[keyClone] = prevObj[n][keyClone];
          }
        } else {
          throw new Error('There is nothing to redo');
        }
      }
  	};
  }
}
var obj = {
   x: 5,
   y: 6
 };

var unRe = undoRedo(obj);
