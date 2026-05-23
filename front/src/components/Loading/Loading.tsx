import { Loader } from '@/ui';

import classes from './Loading.module.css';

interface ILoading {
  ariaLabel?: string;
  classSection?: string;
  classTitle?: string;
  text?: string;
}

export const Loading = ({
  ariaLabel,
  classSection,
  classTitle,
  text,
}: ILoading) => {
  return (
    <section
      className={`${classSection} ${classSection === 'firstLoading' && classes.firstLoading}`}
      aria-label={ariaLabel}
    >
      <div className={classes.container} style={{ marginBottom: '20px' }}>
        <h2 className={classTitle}>{text}</h2>
        <div className={classes.align}>
          <Loader />
        </div>
      </div>
    </section>
  );
};

export default Loading;
