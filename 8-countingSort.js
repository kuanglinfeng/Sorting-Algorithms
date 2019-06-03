// 计数排序
let countingSort = arr => {
  let 
    len = arr.length,
    max = Math.max(...arr),
    min = Math.min(...arr),
    d = max - min + 1,
    bucket = [],
    i, j, k = 0;
  for (i = 0; i < len; i++) {
    bucket[arr[i] - min] ? bucket[arr[i] - min]++ : (bucket[arr[i] - min] = 1);
  }
  for (i = 0; i < d; i++) {
    for (j = bucket[i]; j > 0; j--) {
      arr[k++] = i + min;
    }
  }
  return arr;
}

// 测试
let arr = [3, 1, 2, 5, 4];
console.log(countingSort(arr));


