interface Employee {
  pay(): void;
}

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

function pay(employee: Employee): Employee {
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
