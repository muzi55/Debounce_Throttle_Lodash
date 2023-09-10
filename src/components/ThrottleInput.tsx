import { throttle } from "lodash";
import React, { useState, useCallback } from "react";

const ThrottleInput = (): JSX.Element => {
  const [value, setValue] = useState<string>("");

  const increase = throttle((value: string) => {
    setValue(value);
  }, 1000);
  const handleThrottleInputValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    increase(e.target.value);
  }, []);

  return (
    <>
      <div>
        <h2>스로틀링 인풋</h2>
        <h2>1초마다 결과값이 갱신됩니다.</h2>
        <input type="text" onChange={handleThrottleInputValue} />
        <p>스로틀 인풋 결과 : {value}</p>
      </div>
    </>
  );
};

export default React.memo(ThrottleInput);
