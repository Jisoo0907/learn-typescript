{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /* 
  public - 기본
  private - 외부에서 접근 불가능
  protected - 상속 시 외부에서 접근 불가, 자식 클래스에서만 접근 가능
  */
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // 클래스 자체에 속하는 변수(정적 변수)
    // static이므로 객체를 생성하지 않아도 CoffeeMaker.BEANS ~~처럼 접근 가능
    private coffeeBeans: number = 0; // instance(object) level
    // 인스턴스마다 개별적으로 존재하는 변수

    private constructor(coffeeBeans: number) {
      // 생성자가 private이므로 new CoffeeMaker()로 직접 객체 생성 불가
      // 객체 생성 제한, static 메서드를 통해서만 객체를 생성하도록 강제
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    public fillCoffeeBeans(beans: number) {
      // public 생략 가능
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
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

  // const maker = new CoffeeMaker(32);
  const maker = CoffeeMaker.makeMachine(32);
  /*  maker.coffeeBeans = 3; // 외부에서 설정 가능
  maker.coffeeBeans = -43; // 유효하지 않은 상태로 만들 위험 존재 */
  maker.fillCoffeeBeans(32);

  /* Getter and Setter */
  /* class User {
    firstName: string;
    lastName: string;
    fullName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`;
    }
  }

  const user = new User("Lee", "Jisoo");
  console.log(user);
  user.firstName = "Kelly";
  console.log(user); // 여전히 Lee Jisoo로 나옴 => 이럴 때 getter setter가 유용! */

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error("It's invalid number.");
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User("Lee", "Jisoo");
  user.age = 6;
  console.log(user.age);
}
