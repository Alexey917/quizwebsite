import { Logo } from '@/ui';

import classes from './Footer.module.css';
import tg from '../../assets/tg.svg';
import vk from '../../assets/vk.svg';
import tgMini from '../../assets/tgmini.svg';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Logo className="footer" aria-label="Логотип QuizyTales" />
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <img src={tgMini} className={classes.miniImg} alt="" />
            <a
              href="https://t.me/DerrKaterr"
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Дмитрий
              <br />
              @DerrKaterr
            </a>
          </li>
          <li className={classes.listItem}>
            <img src={tgMini} className={classes.miniImg} alt="" />
            <a
              href="https://t.me/Renardren"
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ирина
              <br />
              @Renardren
            </a>
          </li>
          <li>
            <a
              href="https://t.me/Quizytales"
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="группа в телеграмме"
            >
              <img
                src={tg}
                className={classes.socialImg}
                alt=""
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/quizytales"
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="группа во вконтакте"
            >
              <img
                src={vk}
                className={classes.socialImg}
                alt=""
                aria-hidden="true"
              />
            </a>
          </li>
          <li className={classes.offer}>
            <a
              href="/files/oferta.pdf"
              className={classes.link}
              download="Оферта_QuizyTales.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Скачать оферту"
            >
              Оферта
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
