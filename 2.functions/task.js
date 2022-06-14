// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0; 
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
    if(arr[i] < min){
      min = arr[i];
    }
    sum += arr[i];
  }

  let avg = Number((sum / (arr.length)).toFixed(2));
  return { min: min, max: max, avg: avg };
  }

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let max = 0;
function makeWork(arrOfArr, func) {
  let value = 0;
  for(let i = 0; i < arrOfArr.length; i++){
    if(func(arrOfArr[i]) > value ){
      value = func(arrOfArr[i]);
    }
  }
  max = value;
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(i > max) {
      max = arr[i];
    }
    if(i < min){
      min = arr[i];
    }
  }

  let difference = Math.abs(max - min);
  return difference;
}