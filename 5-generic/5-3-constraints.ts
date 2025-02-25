/* -------------------------------------------------------------------------- */
/*                                   제네릭 조건                               */
/* -------------------------------------------------------------------------- */
interface Employee {
  pay(): void;
}

/* 
모든 직원(Employee)는 pay() 호출 가능, 근무 형태에 따라 추가적인 메서드가 있음.
*/
class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!`);
  }

  workFullTime() {
    console.log(`work full time.`);
  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!`);
  }

  workPartTime() {
    console.log(`work part time.`);
  }
}

/* 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 별로. */
// 이 함수는 반환 타입을 Employee로 제한하므로 추상적인 타입을 반환함.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// employee가 Employee를 상속한 타입(FullTimeEmployee | PartTimeEmployee)만 받을 수 있도록 제한
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const kelly = new FullTimeEmployee();
const tom = new PartTimeEmployee();

kelly.workFullTime();
tom.workPartTime();

const kellyAfterPay = pay(kelly);
const tomAfterPay = pay(tom);
/* 
- pay() 함수는 Employee 타입 반환, 반환된 값(kellyAfterPay와 tomAfterPay)는 Employee 타입으로 취급됨.
- 따라서 Employee에 정의되지 않은 workFullTime()이나 workPartTime()을 사용할 수 없음.
- <업캐스팅(Upcasting) 발생>
- FullTimeEmployee와 PartTimeEmployee는 Employee 인터페이스를 구현하고 있기 때문에, pay() 함수 안에서는 Employee 타입으로 다뤄짐.
- pay()가 반환하는 값도 Employee 타입이기 때문에, FullTimeEmployee의 메서드(workFullTime())는 사용할 수 없음.

=> 해결 방법: 타입 단언(Type Assertion)
const kellyAfterPay = pay(kelly) as FullTimeEmployee;
- 비추
*/

/* -------------------------------------------------------------------------- */
/*                                  제네릭 조건 예제                           */
/* -------------------------------------------------------------------------- */
const obj = {
  name: "kelly",
  age: 20,
};

const obj2 = {
  animal: "😸",
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name")); // kelly
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // '😸'
