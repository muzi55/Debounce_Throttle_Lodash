import { debounce } from "lodash";
import React, { useState, useCallback } from "react";

const DebounceSection = (): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  const increase = debounce(() => {
    setValue((prev) => prev + 1);
  }, 1000);
  const decrease = debounce(() => {
    setValue((prev) => prev - 1);
  }, 1000);

  const handleDebounceIncreaseValue = useCallback(() => {
    increase();
  }, []);

  const handleDebounceDecreaseValue = useCallback(() => {
    decrease();
  }, []);

  return (
    <>
      <div>
        <h2>디바운스 버튼</h2>
        <p>디바운스는 일정시간동안 이벤트나 호출을 일정시간 지연시키는 기술입니다.</p>
        <p>
          버튼을 클릭하면 1초가 지난 이후 수가 증가하며,
          <br /> 이벤트도중 새로운이벤트가오면 다시 타이머가 카운트됩니다.
        </p>
        <button onClick={handleDebounceIncreaseValue}>+</button>
        <button onClick={handleDebounceDecreaseValue}>-</button>
        <p>{value}</p>
        <hr />
      </div>
    </>
  );
};

export default React.memo(DebounceSection);
