# 排序算法

## 1. 冒泡排序

  通过多次循环，将最大值放在数组最后一位。

  ```js
  function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      }
    }
    return arr;
  }
  ```

## 2. 选择排序

  通过多次循环，将最小值放在数组第一位。

  ```js
  function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) minIndex = j;
      }
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
  }
  ```

## 3. 插入排序

  将前i位作为有序数组，通过循环将剩余数组每一位插入有序数组中。

  ```js
  function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      while (j >= 0 && arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        j--;
      }
    }
    return arr;
  }
  ```

  

## 4. 归并排序

  将数组递归拆分为左右两部分，并对左右两部分进行比较排序，合并为一个有序数组。

  ```js
  function mergeSort(arr) {
    if (arr.length < 2) return arr;
    const middle = ~~(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
  function merge(left, right) {
    const res = [];
    while (left.length && right.length) {
      if (left[0] > right[0]) {
        res.push(right.shift());
      } else {
        res.push(left.shift());
      }
    }
    while(left.length) {
      res.push(left.shift());
    }
    while(right.length) {
      res.push(right.shift());
    }
    return res;
  }
  ```

## 5. 快速排序

  选取一个基准值，指定左右两个空数组，将数组内的元素和基准值比较，小于基准放入右侧，大于基准放入左侧。依次递归达到排序目的。

  ```js
  function quickSort(arr) {
    if (arr.length < 2) return arr;
    const middleIndex = ~~(arr.length / 2);
    const middleValue = arr.splice(middleIndex, 1);
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < middleValue[0]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(middleValue, quickSort(right));
  }
  ```
## 6. 希尔排序
和归并排序类似，只是每次拆分数组并不是左右对称拆分，而是根据数组长度，以长度不断/2为增量进行比较。
```js
function shellSort(arr) {
  const len = arr.length;
  let gap = ~~(len / 2);
  while(gap > 0) {
    for (let i = gap ; i < len; i++ ) {
      let preIndex = i - gap;
      let compareIndex = i;
      while (preIndex >= 0 && arr[compareIndex] < arr[preIndex]) {
        [arr[compareIndex], arr[preIndex]] = [arr[preIndex], arr[compareIndex]];
        preIndex -= gap;
        compareIndex = preIndex + gap;
      }
    }
    gap = ~~(gap / 2);
  }
  return arr;
 }
 ```
## 7. 堆排序
1. 把无序数组构建成二叉堆。需要从小到大排序，则构建成最大堆；需要从大到小排序，则构建成最小堆。 

2. 循环删除堆顶元素，替换到二叉堆的末尾，调整堆产生新的堆顶。

```js
function heapAdjust(arr, i, length) {
  const left = 2*i + 1;
  const right = left + 1;
  let max = i;
  if (left < length && arr[left] > arr[max]) {
    max = left;
  }
  if (right < length && arr[right] > arr[max]) {
    max = right;
  }
  if (max !== i) {
    [arr[max], arr[i]] = [arr[i], arr[max]];
    heapAdjust(arr, max, length);
  }
}

function heapSort(arr) {
  let len = arr.length;
  for (let i = ~~(len / 2) - 1; i >= 0; i--) {
    heapAdjust(arr, i, len);
  }
  for(let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapAdjust(arr, 0, i);
  }
  return arr;
}
```

