{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /* 
  public - 기본
  private - 외부에서 접근 불가능
  protected - 상속 시 외부에서 접근 불가, 자식 클래스에서만 접근 가능
  */
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // 클래스 자체에 속하는 변수(정적 변수)
    private coffeeBeans: number = 0; // instance(object) level

    constructor(coffeeBeans: number) {
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

  /* 저렴한 우유 거품기 */
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log("Steaming some milk...🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  /* 설탕 제조기 */
  class AutomaticSugarMixer {
    private getSugar() {
      console.log("Getting some sugar from candy🍬");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      // 생성자의 매개변수들
      beans: number,
      public readonly serialNumber: string,
      private milkFrother: CheapMilkSteamer
    ) {
      super(beans); // 부모 클래스(CoffeeMachine)의 생성자 호출
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      // return this.milk.makeMilk(this.sugar.addSugar(coffee));
      return this.milk.makeMilk(sugarAdded);
    }
  }

  const machines = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "1", new CheapMilkSteamer()),
    new SweetCoffeeMaker(16, new AutomaticSugarMixer()),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "1", new CheapMilkSteamer()),
    new SweetCoffeeMaker(16, new AutomaticSugarMixer()),
  ];
  machines.forEach((machine) => {
    console.log("------------------------");
    machine.makeCoffee(1);
    // 동일한 부모 클래스 상속 시 공통된 api 호출 가능
  });

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(
    23,
    "SSSS",
    new CheapMilkSteamer()
  );
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
