import parse from 'html-react-parser';

import classes from './Preview.module.css';

interface IPreview {
  img: string;
  text: string;
  title: string;
  preview_text: string;
}

export const Preview = ({ img, text, title, preview_text }: IPreview) => {
  return (
    <article className={classes.article}>
      <img
        className={classes.img}
        src={img}
        alt={title ? `${title} превью` : 'Превью'}
      />
      <div className={classes.overlay}></div>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.previewText}>{preview_text}</p>
      <div className={classes.text}>
        <h3 className={classes.await}>Что вас ждёт:</h3>
        {parse(text)}
      </div>
    </article>
  );
};
