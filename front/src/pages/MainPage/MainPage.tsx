import { Stages } from '@/components';
import { AboutUs, QuizyTales } from '@/modules';
import { PopularQuizzes } from '@/modules/PopularQuizzes';

export const MainPage = () => {
  return (
    <>
      <QuizyTales />
      <AboutUs />
      <PopularQuizzes />
      <Stages />
    </>
  );
};
