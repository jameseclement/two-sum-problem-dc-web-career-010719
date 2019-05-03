// function bruteForceTwoSum(a, sum) {
//   let ret = [];
//   for (var i = 0; i < a.length; i++) {
//     for (var j = i + 1; j < a.length; j++) {
//       a[i] + a[j] == sum ? (ret = [...ret, [a[i], a[j]]]) : null;
//     }
//   }
//   return ret;
// }

function bruteForceTwoSum(arr, sum) {
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        ret = [...ret, [arr[i], arr[j]]];
      }
    }
  }
  return ret;
}

function hashTwoSum(arr, sum) {
  let sums = [];
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let target = sum - arr[i];
    if (hash[target]) {
      sums.push([target, arr[i]]);
    }
    hash[arr[i]] = arr[i];
  }
  return sums;
}
