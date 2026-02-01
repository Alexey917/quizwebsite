import classes from './GetToKnowUs.module.css';
import tg from '../../../../assets/tg.svg';
import vk from '../../../../assets/vk.svg';

export const GetToKnowUs = () => {
  return (
    <article className={classes.article} aria-labelledby="social-title">
      <h3 className={classes.title} id="social-title">
        Познакомиться с нами поближе можно:
      </h3>
      <div className={classes.wrapper} role="list">
        <a
          href="#"
          className={classes.linkWrapper}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Группа в Telegram (откроется в новой вкладке)"
          role="listitem"
        >
          <span className={classes.innerWrapper}>
            <img
              src={tg}
              alt="Иконка телеграмма"
              className={classes.img}
              loading="lazy"
            />
            <span className={classes.link}>Группа в Telegram</span>
          </span>
        </a>
        <a
          href="#"
          className={classes.linkWrapper}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Группа во Вконтакте (откроется в новой вкладке)"
          role="listitem"
        >
          <span className={classes.innerWrapper}>
            <img
              src={vk}
              alt="Иконка Вконтакте"
              className={classes.img}
              loading="lazy"
            />
            <span className={classes.link}>Группа во Вконтакте</span>
          </span>
        </a>
      </div>
    </article>
  );
};
