import React, { useState, useRef, useEffect, useCallback } from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  //useEffect : reactDidMount, reactDidUpdate
  //컴포넌트가 처음에 마운트됐을때, 업데이트될때 호출
  useEffect(() => {
    console.log(`mounted & updated! : ${count}`);
  }, [count]);
  //마운트될때만 호출 : 두번째 인자에 [] 빈배열
  //원하는 데이터가 업뎃될때만 호출 : 두번째 인자에 배열요소에.. [count]
  return (
    <li className='habit'>
      <span ref={spanRef} className='habit-name'>
        Reading
      </span>
      <span className='habbit-count'>{count}</span>
      <button className='habit-button habit-increase' onClick={handleIncrement}>
        <i className='fas fa-plus-square'></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
