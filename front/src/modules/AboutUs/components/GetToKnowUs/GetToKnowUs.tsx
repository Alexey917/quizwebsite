import classes from './GetToKnowUs.module.css';
import tg from '../../../../assets/tg.svg';
import vk from '../../../../assets/vk.svg';

export const GetToKnowUs = () => {
  return (
    <article className={classes.article}>
      <h3 className={classes.title}>Познакомиться с нами поближе можно:</h3>
      <div className={classes.wrapper}>
        <div className={classes.linkWrapper}>
          <div className={classes.innerWrapper}>
            <img src={tg} alt="Иконка телеграмма" className={classes.img} />
            <a href="#" className={classes.link}>
              Группа в Telegram
            </a>
          </div>
        </div>
        <div className={classes.linkWrapper}>
          <div className={classes.innerWrapper}>
            <img src={vk} alt="Иконка Вконтакте" className={classes.img} />
            <a href="#" className={classes.link}>
              Группа во Вконтакте
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
