import { useDetectDevice } from './hooks/useDetectDevice';
import { useSystem } from './hooks/useSystem';
import { useThemeContext } from './hooks/useTheme';

import Header from './components/Header';
import MobileNotSupported from './components/MobileNotSupported';
import ModalComponent from './components/Modal';
import ModalContent from './components/ModalContent';
import Restart from './components/Restart';
import TimeCategory from './components/TimeCategory';
import UserTyped from './components/UserTyped';
import WordContainer from './components/WordContainer';
import WordWrapper from './components/WordWrapper';

function App() {
  const { systemTheme } = useThemeContext();
  const {
    charTyped,
    word,
    wordContainerFocused,
    modalIsOpen,
    history,
    time,
    results,
    setWordContainerFocused,
    restartTest,
    checkCharacter,
    closeModal,
  } = useSystem();

  const isMobile = useDetectDevice();

  return (
    <div
      className='h-screen w-full overflow-y-auto'
      style={{
        backgroundColor: systemTheme.background.primary,
        color: systemTheme.text.primary,
      }}
    >
      <main className='mx-auto flex h-full max-w-5xl flex-col gap-4 px-4 xl:px-0'>
        {isMobile ? (
          <MobileNotSupported />
        ) : (
          <>
            <Header restart={restartTest} closeAboutModal={closeModal} />
            <TimeCategory />

            <WordWrapper
              focused={wordContainerFocused}
              setFocused={setWordContainerFocused}
            >
              <WordContainer word={word} />
              <UserTyped
                word={word}
                check={checkCharacter}
                charTyped={charTyped}
              />
            </WordWrapper>
            <Restart restart={restartTest} />

            <ModalComponent
              type='result'
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
            >
              <ModalContent
                totalTime={time}
                results={results}
                history={history}
              />
            </ModalComponent>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
