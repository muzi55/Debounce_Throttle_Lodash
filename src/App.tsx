import React from "react";
import DebounceSection from "./components/DebounceSection";
import ThrottleSection from "./components/ThrottleSection";

function App() {
  return (
    <>
      <h1>js 라이브러리 lodash 사용하여 디바운싱, 스로틀링 구현하기</h1>

      <DebounceSection />
      <ThrottleSection />
    </>
  );
}

export default App;
