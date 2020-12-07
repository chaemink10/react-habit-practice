import React, { memo } from 'react';

const AddInput = memo((props) => {
  const inputRef = React.createRef(); // DOM요소에 바로 접근없이 ref로 연계해서 사용
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onInsert(name);
    formRef.current.reset();
    //this.inputRef.current.value = '';
  };

  return (
    <form ref={formRef} className='habit-input' onSubmit={onSubmit}>
      <input ref={inputRef} type='text' placeholder='Habit' />
      <button>Add</button>
    </form>
  );
});

export default AddInput;
