import { store } from '@/store';
import { useNavigate } from 'react-router-dom';
import { addRate } from '@/store/Choice/choice';

export const useSaveRate = () => {
  const dispatch = store.dispatch;
  const navigate = useNavigate();

  const saveRate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string,
    title: string,
  ) => {
    e.preventDefault();
    dispatch(addRate(title));
    navigate(to);
  };

  return saveRate;
};
