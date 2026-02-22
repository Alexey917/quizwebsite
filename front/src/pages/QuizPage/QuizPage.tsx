import { Navigation } from '@/components';
import { Form, ModalRates, Quiz } from '@/modules';
import { Modal } from '@/ui';
import { useScrollLock } from '@/hooks';

import classes from './QuizPage.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getChoice, getModal } from '@/store';

export const QuizPage = () => {
  // const [isModal, setIsModal] = useState<boolean>(false);
  const isModal = useSelector(getModal);
  const rate = useSelector(getChoice);

  useScrollLock(isModal);

  console.log(rate);

  return (
    <main className={classes.main}>
      <Navigation />
      <Quiz />
      {isModal && (
        <Modal>
          {rate.rate.name === '' && !rate.rate.id ? <ModalRates /> : <Form />}
        </Modal>
      )}
    </main>
  );
};
