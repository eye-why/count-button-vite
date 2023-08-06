import React, { useState, useMemo, useCallback } from 'react';
import './App.css'

function App() {
    const [number, setNumber] = useState(0);
  const [clickNumber, setClickNumber] = useState(0);

//useCallback
//1. 함수를 캐싱( useCallback을 사용하여 incrementNumber 함수를 캐싱 )

//2. 훅 기능 : 리렌더링 시, 이 전 생성된 함수를 재사용할 수 있도록 도와줌


  const incrementNumber = useCallback(() => {
    setNumber(prevCount => prevCount + 1);
    setClickNumber(clickNumber + 1);
  }, [clickNumber]);

  // useMemo를 사용하여 number 값을 저장, 매 클릭 시마다 리렌더링을 방지.
  const memoization = useMemo(() => {
    return number;
  }, [number]);


  return (
    <>
      <div>
        <span>첫번째 클릭(하나씩 증가)</span>
        <button onClick={incrementNumber}>
          {memoization}번 클릭 했습니다!
        </button>
      </div>

      <div>
        <span>두번째 클릭(첫번째 클릭 수 만큼 더해서 증가)</span>
        <button onClick={() => setClickNumber(clickNumber + number)}>
          {clickNumber}번 클릭 했습니다! 
        </button>
      </div>
    </>
  )
}

export default App
