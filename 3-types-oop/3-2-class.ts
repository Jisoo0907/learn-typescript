{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /* class - 관련된 속성과 함수를 묶어서 어떤 모양의 데이터가 될 거라는 걸 정의 */
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    // object 만들 때마다 중복 데이터 생성
    // 어떤 객체에서도 같은 값을 가짐.
    //  => 메모리 낭비
    // static을 붙여주면 object가 아닌 class와 연결되므로 object마다 생성되지 않음.
    coffeeBeans: number = 0; // instance(object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        // class 안의 멤버변수 접근 시 this 붙이기
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT; // 사용한 만큼 감소
      return {
        shots, // shots: shots, key와 value 이름 동일 시 생략 가능
        hasMilk: false,
      };
    }
  }
  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(40);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3);
}
