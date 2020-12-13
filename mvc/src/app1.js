import "./app1.css";
import $ from "jquery";

const $button1 = $("#add");
const $button2 = $("#sub");
const $button3 = $("#mul");
const $button4 = $("#divide");
const $result = $("#result");
const n = localStorage.getItem("result");
$result.text(n || 100);

$button1.on("click", () => {
  let result = parseInt($result.text());
  result++;
  localStorage.setItem("result", result);
  $result.text(result);
});
$button2.on("click", () => {
  let result = parseInt($result.text());
  result--;
  localStorage.setItem("result", result);
  $result.text(result);
});
$button3.on("click", () => {
  let result = parseInt($result.text());
  result *= 2;
  localStorage.setItem("result", result);
  $result.text(result);
});
$button4.on("click", () => {
  let result = parseInt($result.text());
  result /= 2;
  localStorage.setItem("result", result);
  $result.text(result);
});
