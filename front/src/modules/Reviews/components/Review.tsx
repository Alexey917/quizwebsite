import classes from './Review.module.css';
import avatar from '../../../assets/avatar.png';
import sprite from '../../../assets/sprite.svg';

interface IReviews {
  author: string;
  company: string;
  review: string;
  rating: number;
  index: number;
}

export const Review = ({
  author,
  company,
  review,
  rating,
  index,
}: IReviews) => {
  return (
    <div
      className={`${
        index % 2 !== 0 ? classes.wrapperReverse : classes.wrapperReview
      }`}
    >
      <div className={classes.review}>
        {[...Array(5)].map((_, index) => (
          <>
            {rating < index + 1 ? (
              <svg key={index} className={classes.star} aria-hidden="true">
                <use href={`${sprite}#emptyStar`}></use>
              </svg>
            ) : (
              <svg key={index} className={classes.star} aria-hidden="true">
                <use href={`${sprite}#fillStar`}></use>
              </svg>
            )}
          </>
        ))}
        <h3 className={classes.title}>{author}</h3>
        <span className={classes.company}>{company}</span>
        <p className={classes.text}>{review}</p>
      </div>
      <img src={avatar} className={classes.avatar} alt="аватарка" />
    </div>
  );
};
