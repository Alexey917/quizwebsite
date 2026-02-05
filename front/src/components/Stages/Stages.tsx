import { Step } from '@/ui/Step/Step';
import { steps } from '@/consts';

import classes from './Stages.module.css';

export const Stages = () => {
  return (
    <section className={classes.section} aria-labelledby="stages-title">
      <div className={classes.container}>
        <h2 className={classes.title} id="stages-title">
          Этапы сотрудничества
        </h2>
        <div className={classes.wrapper}>
          <ol className={classes.list}>
            {steps.map((step, index) => (
              <li
                key={step.id}
                className={`${classes.listItem} ${
                  step.id === 'empty' && classes.empty
                }`}
              >
                <Step num={index + 1} text={step.text} />
                {step.id !== 'empty' && (
                  <svg
                    className={`${classes.icon} ${classes[step.id]}`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href={`${step.svg}#${step.id}`}></use>
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
