import { Navigation } from '@/components';
import { ModalRates, Quiz } from '@/modules';
import { Modal } from '@/ui';
import { useScrollLock } from '@/hooks';

import classes from './QuizPage.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getChoice } from '@/store';

export const QuizPage = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const rate = useSelector(getChoice);

  useScrollLock(isModal);

  console.log(rate);

  return (
    <main className={classes.main}>
      <Navigation />
      <Quiz setModal={setIsModal} />
      {isModal && (
        <Modal setModal={setIsModal} isModal={isModal}>
          {rate.rate === '' ? <ModalRates /> : <span>форма</span>}
        </Modal>
      )}
    </main>
  );
};
