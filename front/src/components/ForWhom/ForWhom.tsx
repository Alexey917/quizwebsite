import classes from './ForWhom.module.css';

export const ForWhom = () => {
  return (
    <article className={classes.forWhom}>
      <h2 className={classes.title}>Кому подходит QuizyTales и почему:</h2>
      <div className={classes.textWrapper}>
        <p className={classes.text}>
          Если вы: HR-отдел, планирующий корпоратив, event-менеджер, ищущий
          свежий онлайн-формат, руководитель отдела для тимбилдинга или компания
          с распределённой командой (офис + удалёнка) или полностью работающая
          на удаленке — то вам обязательно к нам!
        </p>
      </div>
      <div className={classes.textWrapper}>
        <h4 className={classes.textTitle}>QuizyTales — это:</h4>
        <ul>
          <li>Корпоративный дух и командная синергия</li>
          <li>Интеллектуальный досуг с элементами игры</li>
          <li>Гибкие решения для удалённых и гибридных команд</li>
          <li>Полный цикл организации без стресса для HR</li>
        </ul>
      </div>
    </article>
  );
};
