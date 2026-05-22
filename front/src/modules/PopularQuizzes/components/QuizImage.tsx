import { useImageError } from '@/hooks';

import logo from '../../../assets/Logo.png';
import classes from './QuizImage.module.css';
import { memo } from 'react';

interface IPopularQuiz {
  image: string;
  title: string;
}

export const QuizImage = memo(({ image, title }: IPopularQuiz) => {
  const { imageSrc, handleImageError } = useImageError(image);

  return (
    <img
      src={imageSrc}
      alt={title}
      loading="lazy"
      className={`${classes.quizImage} ${imageSrc === logo ? classes.placeholder : ''}`}
      onError={handleImageError}
    />
  );
});
