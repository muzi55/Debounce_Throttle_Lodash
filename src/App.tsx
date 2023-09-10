import React from "react";
import DebounceSection from "./components/DebounceSection";
import ThrottleSection from "./components/ThrottleSection";
import ThrottleInput from "./components/ThrottleInput";
import DebounceInput from "./components/DebounceInput";

function App() {
  return (
    <>
      <h1>js 라이브러리 lodash 사용하여 디바운싱, 스로틀링 구현하기</h1>

      <DebounceSection />
      <ThrottleSection />

      <hr />

      <DebounceInput />
      <ThrottleInput />
    </>
  );
}

export default App;
