import { debounce } from "lodash";
import React, { useState, useCallback } from "react";

const DebounceInput = (): JSX.Element => {
  const [value, setValue] = useState<string>("");

  const increase = debounce((value: string) => {
    setValue(value);
  }, 1000);
  const handleDebounceInputValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    increase(e.target.value);
  }, []);

  return (
    <>
      <div>
        <h2>디바운스 인풋</h2>
        <h2>입력을 완료후 1초후 결과값이 나옵니다.</h2>
        <input type="text" onChange={handleDebounceInputValue} />
        <p>디바운스 인풋 결과 : {value}</p>
      </div>
    </>
  );
};

export default React.memo(DebounceInput);
