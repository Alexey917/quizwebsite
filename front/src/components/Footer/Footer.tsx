import { Logo } from '@/ui';

import classes from './Footer.module.css';
import tg from '../../assets/tg.svg';
import vk from '../../assets/vk.svg';
import tgMini from '../../assets/tgmini.svg';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Logo className="footer" />
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <img
              src={tgMini}
              className={classes.miniImg}
              alt="иконка телеграмма"
            />
            <a href="#" className={classes.link}>
              Дмитрий
              <br />
              @DerrKaterr
            </a>
          </li>
          <li className={classes.listItem}>
            <img
              src={tgMini}
              className={classes.miniImg}
              alt="иконка телеграмма"
            />
            <a href="#" className={classes.link}>
              Ирина
              <br />
              @Renardren
            </a>
          </li>
          <li>
            <a href="#" className={classes.link}>
              <img
                src={tg}
                className={classes.socialImg}
                alt="иконка телеграмма"
              />
            </a>
          </li>
          <li>
            <a href="#" className={classes.link}>
              <img
                src={vk}
                className={classes.socialImg}
                alt="иконка вконтакте"
              />
            </a>
          </li>
          <li className={classes.offer}>
            <a href="#" className={classes.link}>
              Оферта
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
