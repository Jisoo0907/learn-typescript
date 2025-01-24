{
  // function: login -> success, fail ⏱
  // 여러 타입 중 하나만 가질 수 있는 객체 정의 시 사용
  type SuccessState = {
    result: "success"; // 공통 속성
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail"; // 공통 속성
    reason: string;
  };
  type LoginState = SuccessState | FailState; // discriminated union

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
