import classes from './Review.module.css';
import avatar from '../../../assets/avatar.png';
import sprite from '../../../assets/sprite.svg';

interface IReviews {
  author: string;
  company: string;
  review: string;
  rating: number;
  slideIndex: number;
}

export const Review = ({
  author,
  company,
  review,
  rating,
  slideIndex,
}: IReviews) => {
  const isReversed = slideIndex % 2 !== 0;
  return (
    <article
      className={`${
        isReversed ? classes.wrapperReverse : classes.wrapperReview
      }`}
      aria-label={`Отзыв от ${author} из ${company}`}
    >
      <div className={classes.review}>
        <div role="img" aria-label={`Рейтинг: ${rating} из 5 звёзд`}>
          {[...Array(5)].map((_, index) => (
            <>
              {rating < index + 1 ? (
                <svg
                  key={`${author}-star-${index}`}
                  className={classes.star}
                  aria-hidden="true"
                >
                  <use href={`${sprite}#emptyStar`}></use>
                </svg>
              ) : (
                <svg
                  key={`${author}-star-${index}`}
                  className={classes.star}
                  aria-hidden="true"
                >
                  <use href={`${sprite}#fillStar`}></use>
                </svg>
              )}
              <span className={classes.visuallyHidden}>
                Рейтинг: {rating} из 5 звёзд
              </span>
            </>
          ))}
        </div>
        <h3 className={classes.title}>{author}</h3>
        <span className={classes.company}>{company}</span>
        <p className={classes.text}>{review}</p>
      </div>
      <img
        src={avatar}
        className={classes.avatar}
        alt={`Аватар ${author} из ${company}`}
      />
    </article>
  );
};
