import { Suspense } from 'react';
import { Loading } from '../Loading/Loading';

export const LazySuspense = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Loading classSection="firstLoading" />}>
      {children}
    </Suspense>
  );
};
