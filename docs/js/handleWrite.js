/*
  冒泡排序
  最大值不断向上冒泡，通过循环不断将最大值放在数组最后
  复杂度：o(n^2)
*/

const bubbleSort = (int) => {
  let arr = [...int];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};

/*
  冒泡排序优化
  如果某次循环中，没有发生元素的交换，说明排序已经完成，无需再继续循环
  复杂度：o(n^2)
*/
const bubbleSortPlus = (int) => {
  let arr = [...int];
  let i = 0;
  while (i < arr.length - 1) {
    let isExchange = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isExchange = true;
      }
    }
    if (!isExchange) break;
    i += 1;
  }

  return arr;
};

/*
  选择排序
  不断的将最小值选择以后放到前面，与冒泡不同，选择排序在每次排序只会交换一次
  复杂度：o(n^2)
*/
const selectionSort = (int) => {
  let arr = [...int];
  let minIndex;

  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
};

// 插入排序：通过循环，将当前值插入之前已排号的序列中
const insertionSort = (int) => {
  let arr = [...int];
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] > arr[preIndex + 1]) {
      [arr[preIndex], arr[preIndex + 1]] = [arr[preIndex + 1], arr[preIndex]];
      preIndex--;
    }
  }
  return arr;
};

// 归并排序：将数组递归不断拆分成粒度最小的两部分，再进行合并
const merge = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      arr.push(right.shift());
    } else {
      arr.push(left.shift());
    }
  }
  return [...arr, ...left, ...right];
};

const mergeSort = (int) => {
  if (int.length < 2) return int;
  const arr = [...int];
  const middleIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);
  return merge(mergeSort(left), mergeSort(right));
};

// 快速排序：选定队列首项为基础，将数组分为左右两部分，然后分区递归合并
// 为什么说是冒泡 plus？？
const quickSort = (int) => {
  const arr = [...int];
  if (int.length < 2) return arr;
  const mid = arr[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), mid, ...quickSort(right)];
};

// promise

// promise三种状态：pending/fulfilled/rejected
const STATE = {
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
  PENDING: 'pending'
}
class MyPromise {
  constructor(executor) {
    this.state = STATE.PENDING; 
    // 状态fulfilled的值
    this.value = undefined;
    // 状态rejected的值
    this.reason = undefined;
    // resolve回调函数队列
    this.fulfilledCallbacks = [];
    // reject回调函数队列
    this.rejectedCallbacks = [];

    resolve = (value) => {
      if (this.state !== STATE.PENDING) return;
      this.state = 'fulfilled';
      this.value = value;
      // 根据 promise 规范，使用 setTimeout 确保 then 是异步的
      this.fulfilledCallbacks.forEach(callback => () => callback(this.value));
    }
    reject = (err) => {
      if (this.state !== STATE.PENDING) return;
      this.state = 'rejected';
      this.reason = err;
      this.rejectedCallbacks.forEach(callback => () => callback(this.reason));
    }

    try {
      executor(resolve, reject);
    } catch(err) {
      reject(err);
    }
  }

  // then 接受两个参数，返回一个 promise
  // onFullfilled,onRejected不可被多次调用
  then(onFulfilled, onRejected) {
    // onFulfilled 不为 function 则包装为 (x) => x
    // onRejected 不为 function 则throw 
    onFulfilled = typeof onFulfilled === 'Function' ? onFulfilled : (value) => value;
    onRejected = typeof onRejected  === 'Function' ? onRejected : (reason) => { throw reason };

    // then函数返回一个 promise
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.state === STATE.FULFILLED) {

      } 
      if (this.state === STATE.REJECTED) {} 
      if (this.state === STATE.PENDING) {
        this.fulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              onFulfilled(this.value);
            } catch(e) {
              reject(e);
            }
          });
        });

        this.rejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              onRejected(this.value);
            } catch(e) {
              reject(e);
            }
          });
        });
        
      } 

    })

    
  }
}
