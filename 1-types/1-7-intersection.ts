{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    // 타입 결합
    console.log(person.name, person.empolyeeId, person.work());
  }

  // 교차 타입 선언 시 두 타입 모두 사용해야 함
  // 하나라도 포함 않할 시 에러
  internWork({
    name: "ellie",
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
