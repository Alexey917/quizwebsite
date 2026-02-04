import { Step } from '@/ui/Step/Step';
import { steps } from '@/consts';

import classes from './Stages.module.css';

export const Stages = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Этапы сотрудничества</h2>
        <div className={classes.wrapper}>
          <ul className={classes.list}>
            {steps.map((step, index) => (
              <li
                key={index}
                className={`${classes.listItem} ${
                  step.id === 'empty' && classes.empty
                }`}
              >
                <Step num={index + 1} text={step.text} />
                {step.id !== 'empty' && (
                  <svg
                    className={`${classes.icon} ${step.id && classes[step.id]}`}
                  >
                    <use href={step.svg + `#${step.id}`}></use>
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
