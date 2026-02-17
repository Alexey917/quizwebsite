import classes from './Description.module.css';
import sprite from '../../../../assets/sprite.svg';
import { Step } from '@/ui/Step/Step';

interface IDescription {
  description?: string[] | string;
}

export const Description = ({ description }: IDescription) => {
  const descriptionArray = (() => {
    if (!description) return [];
    if (Array.isArray(description)) return description;
    if (typeof description === 'string') return [description]; // строка -> массив с одним элементом
    return [];
  })();

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
            {descriptionArray &&
              descriptionArray.length > 0 &&
              descriptionArray.map((elem, index) => (
                <li
                  key={`desc-${index}-${elem.substring(0, 10)}`}
                  className={classes.listItem}
                >
                  <Step
                    num={index + 1}
                    text={elem}
                    classWrapper="wrapperDescription"
                    classText="textDescription"
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </article>
  );
};
