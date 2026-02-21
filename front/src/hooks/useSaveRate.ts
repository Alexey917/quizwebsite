import { store } from '@/store';
import { useNavigate } from 'react-router-dom';
import { addRate } from '@/store/Choice/choice';

export const useSaveRate = () => {
  const dispatch = store.dispatch;
  const navigate = useNavigate();

  const saveRate = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLElement>,
    to: string | null,
    rate: { name: string; id: string | null },
  ) => {
    e.preventDefault();
    dispatch(addRate(rate));
    if (to) {
      navigate(to);
    }
  };

  return saveRate;
};
