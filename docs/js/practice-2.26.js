const bubbleSort = (int) => {
  const arr = [...int];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};

const bubbleSortPlus = (int) => {
  const arr = [...int];
  for (let i = 0; i < arr.length - 1; i++) {
    let isExchange = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        isExchange = true;
      }
    }
    if (!isExchange) break;
  }
  return arr;
}

const selectionSort = (int) => {
  const arr = [...int];
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j++){
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

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

const merge = (left, right) => {
  const res = [];
  while(left.length && right.length) {
    if (left[0] > right[0]) {
      res.push(right.shift());
    } else {
      res.push(left.shift());
    }
  }
  return [...res, ...left, ...right];
}
const mergeSort = (int) => {
  const arr = [...int];
  if (arr.length < 2) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);
  return merge(mergeSort(left), mergeSort(right));
}

const quickSort = (int) => {
  const arr = [...int];
  if (arr.length < 2) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const mid = middleIndex.splice(middleIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) {
      right.push(arr[i]);
    }else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), mid, ...quickSort(right)];
}