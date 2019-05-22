// 冒泡排序
let bubbleSort = arr => {
  let len = arr.length;
  let stop;
  for (let i = 0; i < len - 1; i++) {
    stop = true;
    for (let j = 0; j < len - i - 1; j ++) {
      if (arr[j] > arr[j + 1]) {
        stop = false;
        arr[j] = arr[j] ^ arr[j + 1];
        arr[j + 1] = arr[j] ^ arr[j + 1];
        arr[j] = arr[j] ^ arr[j + 1];
      }
    }
    if (stop) {
      return arr;
    }
  }
  return arr;
}

// 测试
let arr = [3, 2, 1, 5, 6, 9, 4, 8, 7];
// sort success
console.log( bubbleSort(arr) );

