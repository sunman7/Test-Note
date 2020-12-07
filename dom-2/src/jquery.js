window.$ = window.jQuery = function (selectorOrArray) {
  let elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }

  const api = Object.create(jQuery.prototype);
  //创建一个对象，对象的__proto__为JQuery.prototype;
  Object.assign(api, {
    elements: elements,
    oldJQ: elements.oldJQ,
  });
  // api.elements = elements;
  // api.oldJQ = elements.oldJQ;
  return api;
};
jQuery.fn = jQuery.prototype = {
  jQuery: true,
  constructor: jQuery,

  get(index) {
    return this.elements[index];
  },
  addClass(className) {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.add(className);
    }
    return this;
    // const api  = {....}
    //return api;
  },
  find(selector) {
    let arr = [];
    for (let i = 0; i < this.elements.length; i++) {
      arr = arr.concat(Array.from(this.elements[i].querySelectorAll(selector)));
    }
    arr.oldJQ = this;
    //保存执行find操作的JQ对象（旧JQ对象）
    return jQuery(arr);
    //这里创建一个新的jQuery对象，因为不能跟执行find操作的jQuery对象是一样的
    //如果不返回新的jQuery对象，可能会
  },
  each(fn) {
    for (let i = 0; i < this.elements.length; i++) {
      fn.call(null, this.elements[i], i);
    }
    return this;
  },
  parent() {
    const arr = [];
    this.each((node) => {
      if (arr.indexOf(node.parentNode) === -1) {
        arr.push(node.parentNode);
      }
    });
    return jQuery(arr);
  },
  children() {
    const arr = [];
    this.each((node) => {
      if (arr.indexOf(node.children) === -1) {
        arr.push(...node.children);
      }
    });
    return jQuery(arr);
  },
  siblings() {
    const arr = [];
    this.each((node) => {
      for (let i = 0; i < node.parentNode.children.length; i++) {
        if (node.parentNode.children[i] !== node) {
          arr.push(node.parentNode.children[i]);
        }
      }
    });
    return jQuery(arr);
  },
  print() {
    console.log(this.elements);
  },
  end() {
    return this.oldJQ;
    //返回旧的JQ对象。
  },
};
