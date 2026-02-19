import { store } from '@/store';
import { useNavigate } from 'react-router-dom';
import { addRate } from '@/store/Choice/choice';

export const useSaveRate = () => {
  const dispatch = store.dispatch;
  const navigate = useNavigate();

  const saveRate = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLElement>,
    to: string | null,
    title: string,
  ) => {
    e.preventDefault();
    dispatch(addRate(title));
    if (to) {
      navigate(to);
    }
  };

  return saveRate;
};
