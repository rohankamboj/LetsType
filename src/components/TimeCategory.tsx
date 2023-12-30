import { useContext } from 'react';

import { BiTimer } from 'react-icons/bi';

import { ThemeContext } from '../context/ThemeContext';
import { useSystem } from '../hooks/useSystem';
import Countdown from './Countdown';

const TimeCategory = () => {
  const { systemTheme } = useContext(ThemeContext);

  const {
    countdown,
    time,
    resetCountdown,
    setLocalStorageValue,
    restartTest,
    setTime,
  } = useSystem();

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <BiTimer className='text-3xl' />
        <div
          className='flex gap-4 rounded-lg'
          style={{
            backgroundColor: systemTheme.background.secondary,
          }}
        >
          <span
            className={`category ${
              time === 60000 ? 'font-bold underline' : ''
            } hover:underline`}
            onClick={() => {
              setTime(60000);
              setLocalStorageValue('time', 60000);
              restartTest();
            }}
            style={{
              color: time === 60000 ? systemTheme.text.secondary : '',
            }}
          >
            1 min
          </span>
          <span
            className={`category ${
              time === 300000 ? 'font-bold underline' : ''
            } hover:underline`}
            onClick={() => {
              setTime(300000);
              setLocalStorageValue('time', 300000);
              restartTest();
            }}
            style={{
              color: time === 300000 ? systemTheme.text.secondary : '',
            }}
          >
            5 min
          </span>
          <span
            className={`category ${
              time === 600000 ? 'font-bold underline' : ''
            } hover:underline`}
            onClick={() => {
              setTime(600000);
              setLocalStorageValue('time', 600000);
              restartTest();
            }}
            style={{
              color: time === 600000 ? systemTheme.text.secondary : '',
            }}
          >
            10 min
          </span>
        </div>
      </div>
      <Countdown countdown={countdown} reset={resetCountdown} />
    </div>
  );
};

export default TimeCategory;
