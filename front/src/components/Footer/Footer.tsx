import { Logo } from '@/ui';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import classes from './Footer.module.css';
import tg from '../../assets/tg.svg';
import vk from '../../assets/vk.svg';
import tgMini from '../../assets/tgmini.svg';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname !== '/') {
              navigate('/');

              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }, 300);
            } else {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }
          }}
          className={classes.logoLink}
        >
          <Logo className="footer" aria-label="Логотип QuizyTales" />
        </Link>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <img src={tgMini} className={classes.miniImg} alt="" />
            <a
              href="https://t.me/DerrKaterr"
              className={`${classes.link} ${classes.linkDer}`}
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
              className={`${classes.link} ${classes.linkRen}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ирина
              <br />
              @Renardren
            </a>
          </li>
          <li className={classes.tgItem}>
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
          <li className={classes.vkItem}>
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
          <li className={classes.policy}>
            <a
              href="/files/privacy_policy.pdf"
              className={classes.link}
              download="Политика_конфиденциальности.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Скачать политику конфиденциальности"
            >
              Политика
              <br />
              конфиденциальности
            </a>
          </li>
          <li className={classes.data}>
            <a
              href="/files/consent_to_data_processing.pdf"
              className={classes.link}
              download="Соглашение_на_обработку_данных.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Скачать соглашение на обработку данных"
            >
              Соглашение
              <br />
              на обработку данных
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
