function sumAll(arr) {
  
  let sum = arr.reduce((accumulate, curVal) => accumulate + curVal)
    console.log(sum);
}

sumAll([1, 4]);
