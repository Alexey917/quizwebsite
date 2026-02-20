import { CustomSelect } from '@/ui';

import classes from './Form.module.css';

interface IForm {
  variant?: 'authorial' | 'usual';
}

export const Form = ({ variant = 'usual' }: IForm) => {
  return (
    <form className={classes.form}>
      <legend className={classes.title}>
        Заполните форму и наш менеджер свяжется с вами в ближайщий будний день с
        9:00 до 18:00
      </legend>
      <div className={classes.wrapper}>
        <fieldset className={classes.inputGroup}>
          <input className={classes.input} type="text" placeholder="Тариф" />
          <span className={classes.required}>*</span>
          <span className={classes.error}>текст ошибки</span>
        </fieldset>

        {variant === 'authorial' ? (
          <fieldset className={classes.inputGroup}>
            <input className={classes.input} type="text" placeholder="" />
            <span className={classes.required}>*</span>
            <span className={classes.error}>текст ошибки</span>
          </fieldset>
        ) : (
          <fieldset className={classes.inputError}>
            <input
              className={classes.input}
              type="text"
              placeholder="Выбранный квиз"
            />
            <span className={classes.required}>*</span>
            <span className={classes.error}>текст ошибки</span>
          </fieldset>
        )}

        <fieldset className={classes.inputGroup}>
          <input
            className={classes.input}
            type="text"
            placeholder="Количество участников"
          />
          <span className={classes.required}>*</span>
          <span className={classes.error}>текст ошибки</span>
        </fieldset>

        <fieldset className={classes.inputGroup}>
          <input className={classes.input} type="text" placeholder="Имя" />
          <span className={classes.required}>*</span>
          <span className={classes.error}>текст ошибки</span>
        </fieldset>

        <fieldset className={classes.inputGroup}>
          <input
            className={classes.input}
            type="text"
            placeholder="Номер телефона"
          />
          <span className={classes.required}>*</span>
          <span className={classes.error}>текст ошибки</span>
        </fieldset>

        {/* <fieldset className={classes.inputGroup}>
          <select
            className={`${classes.input} ${classes.select}`}
            name=""
            id=""
            defaultValue=""
          >
            <optgroup>
              <option value="" disabled hidden>
                Способ связи
              </option>
              <option value="">Звонок</option>
              <option value="">Telegram</option>
              <option value="">WhatsApp</option>
            </optgroup>
          </select>
          <span className={classes.required}>*</span>
          <span className={classes.error}>текст ошибки</span>
        </fieldset> */}

        <CustomSelect
          options={[
            { value: 'phone', label: 'Звонок' },
            { value: 'telegram', label: 'Telegram' },
            { value: 'whatsapp', label: 'WhatsApp' },
          ]}
          // value={contact}
          // onChange={setContact}
          placeholder="Cпособ связи"
          required
          // error={error}
        />

        <fieldset className={`${classes.inputGroup} ${classes.login}`}>
          <input
            className={classes.input}
            type="text"
            placeholder="Логин Telegram"
          />
          <span className={classes.required}>*</span>
          <span className={classes.error}>текст ошибки</span>
        </fieldset>

        {variant === 'authorial' && (
          <fieldset className={classes.inputGroup}>
            <textarea
              className={classes.textarea}
              name=""
              id=""
              placeholder="Опишите желаемый квиз"
            ></textarea>
            <span className={classes.required}>*</span>
            <span className={classes.error}>текст ошибки</span>
          </fieldset>
        )}
        <button type="submit" className={classes.btn}>
          <span className={classes.textBtn}>Отправить</span>
        </button>
      </div>
    </form>
  );
};
