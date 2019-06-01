// 希尔排序
// 希尔排序是插入排序的一种更高效率的实现。
// 它与插入排序的不同之处在于，它会优先比较距离较远的元素。
// 希尔排序的核心在于间隔序列的设定。
let shellSort = arr => {
  let i, j, temp;
  let len = arr.length;
  let initGap = parseInt( len / 2 );
  let gap;
  for (gap = initGap; gap > 0; gap = parseInt( gap / 2 )) {
    for (i = gap; i < len; i ++) {
      temp = arr[i];
      for (j = i - gap; j >= 0 && arr[j] > temp; j = j - gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
}

// 测试
let arr = [3, 1, 2, 5, 6, 8, 9, 7, 0, 4];
console.log(shellSort(arr));