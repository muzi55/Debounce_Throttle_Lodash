import { throttle } from "lodash";
import React, { useState, useCallback } from "react";

const ThrottleSection = (): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  const increase = throttle(() => {
    setValue((prev) => prev + 1);
  }, 1000);
  const decrease = throttle(() => {
    setValue((prev) => prev - 1);
  }, 1000);

  const handleThrottleIncreaseValue = useCallback(() => {
    increase();
  }, []);

  const handleThrottleDecreaseValue = useCallback(() => {
    decrease();
  }, []);

  return (
    <>
      <div>
        <h2>스로틀링 버튼</h2>
        <p>스로틀링은 일정 간격으로 함수를 호출하게 제한하는 기술입니다.</p>
        <p>버튼을 클릭하면 수가 증가하며, 다음 클릭까지 1초동안 이벤트가 작동하지 않습니다.</p>
        <button onClick={handleThrottleIncreaseValue}>+</button>
        <button onClick={handleThrottleDecreaseValue}>-</button>
        <p>{value}</p>
      </div>
    </>
  );
};

export default ThrottleSection;
