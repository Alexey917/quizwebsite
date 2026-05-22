import classes from './Description.module.css';
import { Step } from '@/ui/Step/Step';
import parse from 'html-react-parser';
import { memo, useMemo } from 'react';

interface IDescription {
  description?: string[] | string;
  text?: string;
}

export const Description = memo(({ description, text }: IDescription) => {
  const descriptionArray = useMemo(() => {
    if (!description) return [];
    if (Array.isArray(description)) return description;
    if (typeof description === 'string') return [description];
    return [];
  }, [description]);

  return (
    <article className={classes.article} aria-labelledby="description-title">
      <svg className={classes.wavesBg} aria-hidden="true">
        <svg
          viewBox="0 0 1440 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="wavesBg"
        >
          <path
            d="M1440 1800L1380 1761.85C1320 1724.57 1200 1650 1080 1624.86C960 1599.71 840 1624.86 720 1643.93C600 1662.14 480 1675.14 360 1656.07C240 1636.99 120 1587.57 60 1562.43L0 1537.28V0L60 38.1504C120 75.4336 240 150 360 175.145C480 200.289 600 175.144 720 156.069C840 137.861 960 124.856 1080 143.931C1200 163.006 1320 212.428 1380 237.572L1440 262.717V1800Z"
            fill="#13515E"
          />
        </svg>
      </svg>

      <svg className={classes.waves} aria-hidden="true">
        <svg
          viewBox="0 0 1440 267"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="waves"
        >
          <path
            d="M0 1.68719L60 39.8786C120 77.202 240 151.849 360 177.021C480 202.192 600 177.021 720 157.925C840 139.697 960 126.677 1080 145.773C1200 164.869 1320 214.344 1380 239.516L1440 264.687"
            stroke="url(#paint0_linear_203_246)"
            strokeWidth="4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_203_246"
              x1="0"
              y1="1.68719"
              x2="1440"
              y2="264.687"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B46B48" />
              <stop offset="0.1" stopColor="#F1AE79" />
              <stop offset="1" stopColor="#B46B48" />
            </linearGradient>
          </defs>
        </svg>
      </svg>
      <div className={classes.content}>
        <div className={classes.container}>
          {text && (
            <div className={classes.text}>
              <h3 className={classes.await}>Что вас ждёт:</h3>
              {parse(text)}
            </div>
          )}
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
});
