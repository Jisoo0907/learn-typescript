// 추상화의 예: 동물들이 소리를 내는 기능을 공통적으로 가짐

// 1. 인터페이스 정의 (추상화)
interface Animal {
  makeSound(): void; // 모든 동물은 소리를 내야 하지만, 구체적인 구현은 각 동물마다 다름
}

// 2. 인터페이스를 구현하는 클래스들
class Dog implements Animal {
  makeSound(): void {
    console.log("멍멍!");
  }
}

class Cat implements Animal {
  makeSound(): void {
    console.log("야옹!");
  }
}

// 3. 다형성을 활용한 함수
function animalSound(animal: Animal) {
  animal.makeSound(); // 구체적인 동물의 종류와 상관없이 동일한 방식으로 호출 가능
}

// 4. 객체 생성 및 함수 호출
const dog = new Dog();
const cat = new Cat();

animalSound(dog); // "멍멍!"
animalSound(cat); // "야옹!"

/*
  💡 추상화란?
  - Animal 인터페이스는 동물의 "소리를 내는" 기능을 정의하지만, 구체적인 구현은 각 동물 클래스에서 담당함.
  - `animalSound` 함수는 구체적인 동물 타입을 몰라도 인터페이스만 따르는 객체라면 동일한 방식으로 처리할 수 있음.
  - 이를 통해 코드의 유연성과 유지보수성을 높일 수 있음.
*/
