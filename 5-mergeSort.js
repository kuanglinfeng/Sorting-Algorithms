// 将两个有序数组合并为一个有序数组
let merge = (arr1, arr2) => {
  let result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1).concat(arr2);
}

// 归并排序
let mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  } 
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  let arr1 = mergeSort(left);
  let arr2 = mergeSort(right);
  return merge(arr1, arr2);
}


// 测试
let arr = [1, 2, 5, 4, 3, 9, 7, 6, 8];
console.log( mergeSort(arr) );