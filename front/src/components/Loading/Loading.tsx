import { Loader } from '@/ui';

import classes from './Loading.module.css';

interface ILoading {
  ariaLabel: string;
  classSection: string;
  classTitle: string;
  text?: string;
}

export const Loading = ({
  ariaLabel,
  classSection,
  classTitle,
  text,
}: ILoading) => {
  return (
    <section className={classSection} aria-label={ariaLabel}>
      <div className={classes.container}>
        <h2 className={classTitle}>{text}</h2>
        <div className={classes.align}>
          <Loader />
        </div>
      </div>
    </section>
  );
};

export default Loading;
