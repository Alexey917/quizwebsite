import { Stages } from '@/components';
import { AboutUs, QuizyTales, Rates } from '@/modules';
import { PopularQuizzes } from '@/modules/PopularQuizzes';

export const MainPage = () => {
  return (
    <main style={{ flex: 1 }}>
      <QuizyTales />
      <AboutUs />
      <PopularQuizzes />
      <Stages />
      <Rates />
    </main>
  );
};
