/**
 * Type Inference
 */
let text = "hello";
function print(message = "hello") {
  // 따로 타입 명시하지 않으면 any
  // default parameter
  console.log(message);
}
print("hello");

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2); // result는 자동으로 숫자 타입
