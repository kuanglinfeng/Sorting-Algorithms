// 选择排序
let selectSort = arr => {
  let len = arr.length;
  let min;
  for (let i = 0; i < len - 1; i++) {
    min = i;
    for (let j = i + 1; j < len; j ++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      arr[i] = arr[i] ^ arr[min];
      arr[min] = arr[i] ^ arr[min];
      arr[i] = arr[i] ^ arr[min];
    }
  }
  return arr;
}

// 测试
let arr = [3, 2, 1, 5, 6, 9, 8, 4, 7];
console.log( selectSort(arr) );