{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);

  /* -------------------------------------------------------------------------- */
  /*                                   Generic                                  */
  /* -------------------------------------------------------------------------- */
  // - 타입을 직접적으로 고정된 값으로 명시하지말고 변수를 통해 언제든지 변할 수 있는 타입을
  // 통해 유연하게 코딩하도록 해주는 것. => 타입을 변수화 한 것.
  // - 사용 시점에 타입을 선언할 수 있는 방법을 제공함.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
