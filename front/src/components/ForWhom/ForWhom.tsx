import classes from './ForWhom.module.css';

export const ForWhom = () => {
  return (
    <article className={classes.forWhom}>
      <h2 className={classes.title} id="forWhomTitle">
        Кому подходит QuizyTales и почему:
      </h2>
      <div className={classes.textWrapper}>
        <p className={classes.text}>
          Если вы: HR-отдел, планирующий корпоратив, event-менеджер, ищущий
          свежий онлайн-формат, руководитель отдела для тимбилдинга или компания
          с распределённой командой (офис + удалёнка) или полностью работающая
          на удаленке — то вам обязательно к нам!
        </p>
      </div>
      <div className={classes.textWrapper}>
        <h3 className={classes.textTitle} id="quizyTalesDesc">
          QuizyTales — это:
        </h3>
        <ul
          className={classes.list}
          aria-labelledby="quizyTalesDesc"
          aria-describedby="forWhomTitle"
        >
          <li className={classes.listItem}>
            Корпоративный дух и командная синергия
          </li>
          <li className={classes.listItem}>
            Интеллектуальный досуг с элементами игры
          </li>
          <li className={classes.listItem}>
            Гибкие решения для удалённых и гибридных команд
          </li>
          <li className={classes.listItem}>
            Полный цикл организации без стресса для HR
          </li>
        </ul>
      </div>
    </article>
  );
};
