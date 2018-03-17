//FIND THE LONGEST WORD IN A STRING
var maxLen = 0;
function findLongestWord(str) {
  var spl = str.split(' ');
  maxLen = spl[0].length;
  spl.forEach(function(item, ind) {
    if(item.length > maxLen) {
      maxLen = item.length;
    }
  });
  return maxLen;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


function findLongestWord(str) {
    var arr = [];
  var spl = str.split(' ');
  spl.forEach(function(item, ind) {
    arr.push(item.length);
  });
//   return arr;
  function sorter(a, b) {
    return a - b;
  }
  var newSort = arr.sort(sorter);
  console.log(newSort);
  return newSort.splice(-1)[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("Google do a barrel roll");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a");


//CAPITALIZE FIRST LETTER OF EACH WORD
function titleCase(str) {
  var array = [];
  var strSplit = str.split(' ');
  strSplit.forEach(function(ele, ind) {
    ele = ele[0].toUpperCase() + ele.substr(1).toLowerCase();
   array.push(ele);
  });

  var newStr = array.join(' ');
  // newStr = '"' + newStr + '"';
  console.log(newStr);
  return newStr;
}

titleCase("I'm a little tea pot");


//ARRANGE NUMBERS IN ARRAYS SMALLEST TO LARGEST/REMOVE LARGEST NUM
function largestOfFour(arr) {
  // You can do this!
  let x = 0;
  let newArr = [];
  arr.forEach(function(ele, ind) {
    x = ele;
    let sorted = x.sort(sorter)
    sorted = sorted.splice(-1)[0]
    newArr.push(sorted)
  })
  function sorter(a, b) {
    return a - b;
  }
  console.log(newArr);
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])


//FACTORIALIZE A NUMBER
function factorialize(num) {
  var arr = [];
  for(var i = 1; i <= num; i++) {
    arr.push(i)
  }
  var newArr = arr.reduce(function(a,b){return a*b})
  // console.log(newArr);
}

factorialize(5);


//CONFIRM ENDING/MATCH SECOND ARGUMENT TO THE ENDING OF FIRST ARGUMENT
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor`
  let len = target.length;
  let ind = str.indexOf(target)
  let cut = str.substring(ind, str.length)
  console.log('c', cut);
  console.log('t', target);
  if(cut == target) {
    console.log('match');
  }
}

confirmEnding("Bastian", "n");
confirmEnding("Connor", "n")
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")
confirmEnding("He has to give me a new name", "name")
confirmEnding("Open sesame", "same")
confirmEnding("Open sesame", "pen")
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")


//TRUNCATE A STRING WITH '...'
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var newStr = '';

  if (str.length) {
    newStr = str.slice(0, num);
  }
  if(str.length > num) {
    newStr = str.slice(0, num - 3);
    newStr = newStr + '...';
  }

  if(num <= 3) {
    newStr = str.slice(0, num);
    newStr = newStr + '...';
  }

  console.log(newStr);
  return newStr;

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Peter Piper picked a peck of pickled peppers", 14)
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)
truncateString("A-", 1)
truncateString("Absolutely Longer", 2)


//CHUNK ARRAY IN GROUPS
function chunkArrayInGroups(arr, size) {
  var i = 0;
  var newArr = [];
  var slice = ''
  while (i <= arr.length) {
    slice = arr.splice(0, size)
    newArr.push(slice)
    i++
  }
  if(arr.length == 1) {
    slice = arr.splice(0)
    newArr.push(slice)
  }
console.log(newArr);
return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)


//SLASHER/REMOVE NUMBER OF ELMENTS DEFINED BY ARGUMENT TWO
function slasher(arr, howMany) {
  var i = 0;
  var slice = '';
  while (i < arr.length) {
    slice = arr.slice(howMany)
    i++
  }

console.log(slice);
// return newArr;
}

slasher([1, 2, 3], 2)
slasher([1, 2, 3], 0)
slasher([1, 2, 3], 9)
slasher([1, 2, 3], 4)
slasher(["burgers", "fries", "shake"], 1)
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)


//REPEAT A STRING
function repeatStringNumTimes(str, num) {
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push(str)
  }
  var newArr = arr.join('');
  // console.log(newArr);
  return newArr;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 4)
repeatStringNumTimes("abc", 1)
repeatStringNumTimes("*", 8)
repeatStringNumTimes("abc", -2)


//MUTATION/MATCH STRING ARGUMENTS
function mutation(arr) {
  var indexone = arr[0].toLowerCase();
  var indextwo = arr[1].toLowerCase();
  let matchme = indextwo.split('')
  let result = true;
  console.log(matchme);
  matchme.forEach((char) => {
    if(result == false) {
      return;
    }
    let ind = indexone.indexOf(char)
    if(ind == -1) {
      result = false;
    }
    else {
      result = true;
    }

  })
    console.log(result);
}


function mutation(arr) {
  var indexone = arr[0].toLowerCase();
  var indextwo = arr[1].toLowerCase();
  let matchme = indextwo.split('')
  console.log(matchme);
  let result = matchme.every((char) => {
    return indexone.indexOf(char) > -1

  })
    console.log(result);
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"])
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
mutation(["Mary", "Army"])
mutation(["Mary", "Aarmy"])
mutation(["Alien", "line"])
mutation(["floor", "for"])
mutation(["hello", "neo"])
mutation(["voodoo", "no"])


//BOUNCER/FILTER OUT UNDEFINED/EMPTY ELEMENTS
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var x = Boolean();
  var l = '';
  var newArr = [];
  arr.forEach(function(ele, ind) {
    l = ele;
  })
  fil(l)

  function fil(ele) {
    return arr.filter(function(ele) {
      if(!ele == x){
        newArr.push(ele)
      }
    })
  }
  console.log(newArr);

  return newArr;
}

bouncer([7, "ate", "", false, 9]);



//DESTROYER/FILTER OUT NUMS
function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments, 1);
  var newArr = [];
  var filtered = arr.filter((ele) => {
    return args.every((el) => {
      return ele !== el;
    })
  })
  console.log(filtered);
  return filtered;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//GET INDEX
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var newArr = [];
  var sorted = '';
  arr.forEach((ele, ind) => {
    if(ele !== num) {
      newArr.push(ele);
    }
  })
  newArr.push(num);
  var sorter = newArr.sort((a,b) => {
    return a - b;
  })

  sorter.forEach((ele, ind) => {
    if(ele == num) {
      sorted = ind;
    }
  })
  // console.log(sorted);
  return sorted;
}

getIndexToIns([10, 20, 30, 40, 50], 35)
getIndexToIns([10, 20, 30, 40, 50], 30)
getIndexToIns([40, 60], 50);
getIndexToIns([3, 10, 5], 3)
getIndexToIns([5, 3, 20, 3], 5)
getIndexToIns([2, 20, 10], 19)
getIndexToIns([2, 5, 10], 15)


//ROT13
function rot13(str) { // LBH QVQ VG!
  let newArr = [];
  let splStr = str.split('');
  splStr.forEach((ele, ind) => {
    let letter = ele.charCodeAt(0)
    if(letter > 64 && letter <= 77) {
      letter = letter + 13
    }
    else if(letter > 77) {
      letter = letter - 13
    }
    newArr.push(String.fromCharCode(letter))

    // return newArr;
  })
  let join = newArr.join('')
  let decoded = join.replace(/-/g, ' ')
  // console.log(decoded);
  return decoded
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")
rot13("SERR YBIR?")
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")
