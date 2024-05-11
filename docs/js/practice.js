// 冒泡：通过相邻元素的交换，不断将最大值移动到队列末尾
const bubbleSort = (int) => {
  const arr = [...int];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const bubbleSortPlus = (int) => {
  const arr = [...int];
  let i = 0;
  while (i < arr.length - 1) {
    let isExchange = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isExchange = true;
      }
    }
    if (!isExchange) break;
    i++;
  }
  return arr;
};

// 选择：不断选出队列中的最小值，将其与队列初始位置交换
const selectionSort = (int) => {
  const arr = [...int];
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

// 插入：将当前值插入已排序好的队列中
const insertionSort = (int) => {
  const arr = [...int];
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] > arr[preIndex + 1]) {
      [arr[preIndex], arr[preIndex + 1]] = [arr[preIndex + 1], arr[preIndex]];
      preIndex--;
    }
  }
  return arr;
};

// 归并排序
const mergeSort = (int) => {
  const arr = [...int];
  if (arr.length < 2) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleIndex)
  const right = arr.slice(middleIndex);
  return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
  const res = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      res.push(right.shift());
    } else {
      res.push(left.shift());
    }
  }
  return [...res, ...left, ...right];
};

// 快排
const quickSort = (int) => {
  const arr = [...int];
  if (arr.length < 2) return arr;
  const left = [];
  const right = [];
  const middleIndex = Math.floor(arr.length / 2);
  const mid = arr.splice(middleIndex, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), mid, ...quickSort(right)];
};