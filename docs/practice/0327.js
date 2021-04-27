
Function.prototype.myBind = function(context, ...defaultArgs) {
  if (typeof this !== 'function') throw Error('');
  context = Object(context) || window;
  const self = this;
  const fn = function(...args) {
    return self.apply(this instanceof fn ? this : context, [...defaultArgs, ...args]);
  }
  fn.prototype = self.prototype;
  return Object.create(fn);
}

Function.prototype.myCall = function(context, ...args) {
  context = Object(context) || window;
  context.fn = this;
  const res = context.fn(...args);
  delete context.fn;
  return res;
}

Function.prototype.myApply = function(context, args) {
  context = Object(context) || window;
  context.fn = this;
  const argArr = args || [];
  const res = context.fn(...argArr);
  delete context.fn;
  return res;
}

function myNew(func, ...args) {
  const obj = Object.create(func.prototype);
  const res = func.call(obj, ...args);
  return res instanceof Object ? res : obj;
}

function debounce(func, time) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    const callNow = timer;
    timer = setTimeout(() => {
      timer = null;
    }, time);
    if (callNow) func(...args);
  }
}