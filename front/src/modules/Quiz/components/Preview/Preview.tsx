import parse from 'html-react-parser';

import classes from './Preview.module.css';

interface IPreview {
  img: string;
  text?: string;
  title: string;
  preview_text: string;
}

export const Preview = ({ img, text, title, preview_text }: IPreview) => {
  const elementId = title?.replace(/\s+/g, '-').toLowerCase();

  return (
    <article className={classes.article} aria-labelledby={`${elementId}-id`}>
      <img
        className={classes.img}
        src={img}
        alt={title ? `${title} превью` : 'Превью'}
        aria-label={title ? `${title} превью` : 'Превью'}
        loading="lazy"
      />
      <div className={classes.overlay} aria-hidden="true"></div>
      <h2 className={classes.title} id={`${elementId}-id`}>
        {title}
      </h2>
      <p className={classes.previewText}>{preview_text}</p>
      {text && (
        <div className={classes.text}>
          <h3 className={classes.await}>Что вас ждёт:</h3>
          {parse(text)}
        </div>
      )}
    </article>
  );
};
