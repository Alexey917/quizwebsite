import classes from './Description.module.css';
import sprite from '../../../../assets/sprite.svg';
import { Step } from '@/ui/Step/Step';

interface IDescription {
  description: string[];
}

export const Description = ({ description }: IDescription) => {
  return (
    <article className={classes.article} aria-labelledby="description-title">
      <svg className={classes.wavesBg} aria-hidden="true">
        <use href={`${sprite}#wavesBg`}></use>
      </svg>

      <svg className={classes.waves} aria-hidden="true">
        <use href={`${sprite}#waves`}></use>
      </svg>
      <div className={classes.content}>
        <div className={classes.container}>
          <h2 className={classes.title} id="description-title">
            Описание
          </h2>
          <ul className={classes.list} aria-labelledby="description-title">
            {description.map((elem, index) => (
              <li
                key={`desc-${index}-${elem.substring(0, 10)}`}
                className={classes.listItem}
              >
                <Step
                  num={index + 1}
                  text={elem}
                  classWrapper={classes.wrapperDescription}
                  classText={classes.textDescription}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};
