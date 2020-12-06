const div = dom.find("#oo")[0];
console.log(dom.siblings(div));

console.log(dom.next(div));
console.log(dom.prev(div));

const travel = dom.find("#travel")[0];
console.log(dom.children(travel));
console.log(
  dom.each(dom.children(travel), (n) => dom.style(n, "color", "blue"))
);
console.log(dom.index(div));
