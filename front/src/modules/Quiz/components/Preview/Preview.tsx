import parse from 'html-react-parser';

import classes from './Preview.module.css';

interface IPreview {
  img: string;
  text: string;
  title: string;
}

export const Preview = ({ img, text, title }: IPreview) => {
  return (
    <article className={classes.article}>
      <img
        className={classes.img}
        src={img}
        alt={title ? `${title} превью` : 'Превью'}
      />
      <div className={classes.overlay}></div>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.text}>{parse(text)}</div>
    </article>
  );
};
