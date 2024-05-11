// 冒泡
const bubbleSort = (int) => {
  const arr = [...int];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
// 选择
const selectionSort = (int) => {
  const arr = [...int];
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
}
// 插入
const insertionSort = (int) => {
  const arr = [...int];
  for(let i = 1; i < arr.length; i++) {
    let preIndex = i - 1;
    while(preIndex >= 0 && arr[preIndex] > arr[preIndex + 1]) {
      [arr[preIndex], arr[preIndex + 1]] = [arr[preIndex + 1], arr[preIndex]];
      preIndex--;
    }
  }
  return arr;
}
// 归并
const mergeSort = (int) => {
  const arr = [...int];
  if (arr.length < 2) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);
  return merge(mergeSort(left), mergeSort(right));
}
const merge = (left, right) => {
  const res = [];
  while(left.length && right.length) {
    if (left[0] > right[0]) {
      res.push(right[0]);
    } else {
      res.push(left[0]);
    }
  }
  return [...res, ...left, ...right];
}
// 快速
const quickSort = (int) => {
  const arr = [...int];
  if (arr.length < 2) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const middle = arr.splice(middleIndex, 1)[0];
  const left = [];
  const right = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), middle, ...quickSort(right)];
}