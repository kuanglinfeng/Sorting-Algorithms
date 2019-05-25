// 快速排序
let quickSort = (arr, low, high) => {
  if (low >= high) {
    return;
  }
  let i = low;
  let j = high;
  let temp = arr[low];
  while (i < j) {
    while (i < j && temp < arr[j]) {
      j--;
    }
    arr[i] = arr[j];
    while (i < j && temp > arr[i]) {
      i++;
    }
    arr[j] = arr[i];
  }
  arr[i] = temp;
  quickSort(arr, low, i - 1);
  quickSort(arr, i + 1, high);
  return arr;
}

// 测试
let arr = [1, 2, 5, 3, 4, 6, 9, 8, 7];
console.log(quickSort(arr, 0, arr.length - 1));
