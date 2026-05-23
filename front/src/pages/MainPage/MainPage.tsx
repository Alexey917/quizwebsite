import { lazy, Suspense } from 'react';
import { Stages } from '@/components';
import { AboutUs, Form, QuizyTales, Rates, Reviews } from '@/modules';
import { PopularQuizzes } from '@/modules/PopularQuizzes';
import { getChoice, getModal } from '@/store';
import { useSelector } from 'react-redux';
import { ModalRates } from '@/modules';
import { Loader } from '@/ui';

const Modal = lazy(() =>
  import('@/ui').then((module) => ({ default: module.Modal })),
);

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
        <Suspense fallback={<Loader />}>
          <Modal>
            {rate.rate.name === '' ? (
              <ModalRates variant="authorial" />
            ) : (
              <Form variant="authorial" />
            )}
          </Modal>
        </Suspense>
      )}
    </main>
  );
};

export default MainPage;
