import { Stages } from '@/components';
import { AboutUs, Form, QuizyTales, Rates, Reviews } from '@/modules';
import { PopularQuizzes } from '@/modules/PopularQuizzes';
import { getChoice, getModal } from '@/store';
import { useSelector } from 'react-redux';
import { Modal } from '@/ui';
import { ModalRates } from '@/modules';

export const MainPage = () => {
  const rate = useSelector(getChoice);
  const isModal = useSelector(getModal);

  return (
    <main style={{ flex: 1 }}>
      <QuizyTales />
      <AboutUs />
      <PopularQuizzes />
      <Stages />
      <Rates />
      <Reviews />
      {isModal && (
        <Modal>
          {rate.rate.name === '' ? (
            <ModalRates variant="authorial" />
          ) : (
            <Form variant="authorial" />
          )}
        </Modal>
      )}
    </main>
  );
};
