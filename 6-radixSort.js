// 基数排序
// 适用场景：元素都是非负整数，最大元素和最小元素相差不是很大，最大元素的位数不是很多
let radixSort = arr => {
  let bucket = [];
  let max = Math.max(...arr);
  let loopTimes = max.toString().length;
  let i, j, k;
  let temp;
  let number;
  for (i = loopTimes, temp = 1; i > 0; i --, temp *= 10) {
    for (j = 0; j < arr.length; j ++) {
      number = Math.floor(arr[j] / temp) % 10;
      if (!Array.isArray( bucket[number] )) {
        bucket[number] = [];
      }
      bucket[number].push(arr[j]);
    }
    arr = [];
    for (k = 0; k < bucket.length; k ++) {
      if (Array.isArray(bucket[k]) && bucket[k].length > 0) {
        arr = arr.concat(bucket[k]);
      }
    }
    bucket = [];
  }
  return arr;
}

// 测试
let arr = [1111, 2, 3, 1, 45435, 3, 23424, 15, 45, 0];
console.log(radixSort(arr));