/* 
Linked List 방식으로 스택 구현
-> 배열 사용 X, Node들을 연결해서 스택 만듦.
*/

interface Stack {
  readonly size: number; // 스택의 크기를 외부에서 읽을 수 있지만 변경 X
  push(value: string): void; // 문자열 데이터를 스택에 추가하는 함수
  pop(): string; // 스택에서 데이터를 제거하고 반환하는 함수
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}
  // 인스턴스 생성 시 capacity 값이 자동으로 설정됨.
  // 생성자가 있어야 capacity를 전달받아 초기화할 수 있음.
  // new StackImpl(10); 처럼 값을 받아야 할 때 필요함.

  get size() {
    return this._size;
  }

  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!"); // 스택이 꽉 찼다면 에러 발생
    }
    const node: StackNode = { value, next: this.head }; // 새 노드 생성 (현재 head를 next로 연결)
    this.head = node; // head를 새로운 노드로 변경
    this._size++; // 크기 증가
  }

  pop(): string {
    if (this.head == null) {
      throw new Error("Stack is empty!"); // 스택이 비어있다면 에러 발생
    }
    const node = this.head; // 현재 head(가장 위 노드)를 저장
    this.head = node.next; // head를 다음 노드로 변경
    this._size--; // 크기 감소
    return node.value; // 기존 head의 값을 반환
  }
}

const stack = new StackImpl(10);
stack.push("Kelly 1");
stack.push("Bob 2");
stack.push("Joanna 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}
