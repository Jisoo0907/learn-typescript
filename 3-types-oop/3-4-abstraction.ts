{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  /* 
  public - 기본
  private - 외부에서 접근 불가능
  protected - 상속 시 외부에서 접근 불가, 자식 클래스에서만 접근 가능
  */
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
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
      return new CoffeeMachine(coffeeBeans);
    }

    public fillCoffeeBeans(beans: number) {
      // public 생략 가능
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
    }

    preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  console.log(maker);

  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.clean();
  console.log(maker2);
}
/* 
추상화 방법
1. private - 접근 제어를 통해 내부의 정보 은닉화
2. interface를 통해 추상화
*/
