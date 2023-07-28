import React, { useState, MouseEvent } from 'react';
import './SpinButton.css';

const SpinButton: React.FC<{ target: string }> = ({ target }) => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className='spinButtonContainer'>
      <div>
        <h1>승객 선택</h1>
        <div className='spinButtonLabel'>
          <label>{target}</label>
          <div className='helpIcon' onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
            ?
            {isTooltipVisible && (
              <span hidden className='tooltip' role='alertdialog' aria-live='assertive'>
                최대 인원수는 3명까지 가능합니다
              </span>
            )}
          </div>
        </div>
        <button
          onClick={decrement}
          className='spinButton'
          aria-label='성인 탑승자 한명 줄이기 버튼'
          disabled={count === 1 ? true : false}
        >
          -
        </button>
        <input
          type='text'
          role='spinbutton'
          aria-live='polite'
          aria-atomic='true'
          readOnly
          className='spinButtonInput'
          value={count}
          aria-label={`${target} 승객 ${count}명이 추가되어 있습니다`}
        />
        <button
          onClick={increment}
          className='spinButton'
          aria-label='성인 탑승자 한명 늘리기 버튼'
          disabled={count === 3 ? true : false}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default SpinButton;
