const api = jQuery(".hehe");

api.addClass("red");
const api2 = api.find(".children").addClass("blue");
api.addClass("green");
const oldApi = api2.end().addClass("yellow");

const x = jQuery(".children1");

x.siblings().print();
