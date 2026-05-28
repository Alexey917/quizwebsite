import { useForm, Controller } from 'react-hook-form';
import { CustomSelect, Loader } from '@/ui';
import { useSelector } from 'react-redux';
import { getChoice, store } from '@/store';
import { useEffect, useState } from 'react';
import {
  applicationApi,
  type IAuthorialApplication,
  type IUsualApplication,
} from './api';
import { getErrorMessage } from '@/api';
import { options } from '@/consts';

import classes from './Form.module.css';
import { setStatus } from '@/store/Choice/choice';

interface IForm {
  variant?: 'authorial' | 'usual';
}

export const Form = ({ variant = 'usual' }: IForm) => {
  const rate = useSelector(getChoice);
  const dispatch = store.dispatch;

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { isValid, errors },
  } = useForm<IAuthorialApplication | IUsualApplication>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      communication: '',
    },
  });

  const createFormData = (data: IAuthorialApplication | IUsualApplication) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('phone', data.phone);
    formData.append('tariff_id', data.tariff_id.toString());

    if ('quiz_id' in data && data.quiz_id) {
      formData.append('quiz_id', data.quiz_id.toString());
    }

    formData.append('quantity_of_guests', data.quantity_of_guests.toString());
    formData.append('communication', data.communication);

    if (data.login) {
      formData.append('login', data.login);
    } else {
      formData.append('login', '');
    }

    if ('quiz_description' in data && data.quiz_description) {
      formData.append('quiz_description', data.quiz_description);
    } else {
      formData.append('quiz_description', '');
    }

    return formData;
  };

  const onSubmit = async (data: IAuthorialApplication | IUsualApplication) => {
    const formData = createFormData(data);
    setLoading(true);
    setError(null);

    try {
      await applicationApi(formData);
      reset();
      dispatch(setStatus('success'));
    } catch (e: unknown) {
      const message = getErrorMessage(e);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (rate?.rate && rate.rate.id) {
      setValue('tariff_id', rate.rate.id);
    }

    if (rate?.title && rate.title.id) {
      setValue('quiz_id', variant === 'authorial' ? null : rate.title.id);
    }

    if (variant === 'authorial') {
      setValue('quiz_display_name', rate.title.name);
    }
  }, [rate, variant]);

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <legend className={classes.title}>
        Заполните форму и наш менеджер свяжется с вами в ближайщий будний день с
        9:00 до 18:00
      </legend>
      <div className={classes.wrapper}>
        <fieldset
          className={
            errors?.tariff_id ? classes.inputError : classes.inputGroup
          }
        >
          <input
            className={classes.input}
            type="text"
            placeholder="Тариф"
            value={rate?.rate?.name || ''}
            readOnly
          />

          <input
            type="hidden"
            {...register('tariff_id', { required: 'Тариф не выбран!' })}
            value={rate?.rate?.id || ''}
          />
          <span className={classes.required} aria-hidden="true">
            *
          </span>
          <span className={classes.error} role="alert">
            {errors?.tariff_id?.message}
          </span>
        </fieldset>

        {variant === 'authorial' ? (
          <fieldset
            className={
              errors?.quiz_id ? classes.inputError : classes.inputGroup
            }
          >
            <input
              className={classes.input}
              type="text"
              placeholder="Выбранный квиз"
              value={rate?.title?.name || ''}
              {...register('quiz_display_name')}
              readOnly
            />

            <span className={classes.required} aria-hidden="true">
              *
            </span>
            <span className={classes.error} role="alert">
              {errors?.quiz_id?.message}
            </span>
          </fieldset>
        ) : (
          <fieldset
            className={
              errors?.quiz_id ? classes.inputError : classes.inputGroup
            }
          >
            <input
              className={classes.input}
              type="text"
              placeholder="Выбранный квиз"
              value={rate.title.name}
              readOnly
            />

            <input
              type="hidden"
              {...register('quiz_id', { required: 'Квиз не выбран' })}
              value={rate?.title?.id || ''}
            />

            <span className={classes.required} aria-hidden="true">
              *
            </span>
            <span className={classes.error} role="alert">
              {errors?.quiz_id?.message}
            </span>
          </fieldset>
        )}

        <fieldset
          className={
            errors?.quantity_of_guests ? classes.inputError : classes.inputGroup
          }
        >
          <div className={classes.autofillWrapper}>
            <input
              className={classes.input}
              type="number"
              placeholder="Количество участников"
              {...register('quantity_of_guests', {
                required: 'Укажите количество участников!',
                min: {
                  value: 1,
                  message: 'Слишком мало участников!',
                },
                max: {
                  value: 100,
                  message: 'Слишком много участников!',
                },
              })}
            />
          </div>
          <span className={classes.required} aria-hidden="true">
            *
          </span>
          <span className={classes.error} role="alert">
            {errors?.quantity_of_guests?.message}
          </span>
        </fieldset>

        <fieldset
          className={errors?.name ? classes.inputError : classes.inputGroup}
        >
          <div className={classes.autofillWrapper}>
            <input
              className={classes.input}
              type="text"
              placeholder="Имя"
              {...register('name', {
                required: 'Укажите имя!',
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа',
                },
                maxLength: {
                  value: 50,
                  message: 'Не длиннее 50 символов',
                },
                pattern: {
                  value: /^[А-Яа-яЁёA-Za-z\s-]+$/,
                  message: 'Может содержать только буквы, пробелы и дефисы',
                },
              })}
            />
          </div>
          <span className={classes.required} aria-hidden="true">
            *
          </span>
          <span className={classes.error} role="alert">
            {errors?.name?.message}
          </span>
        </fieldset>

        <fieldset
          className={errors?.phone ? classes.inputError : classes.inputGroup}
        >
          <div className={classes.autofillWrapper}>
            <input
              className={classes.input}
              type="text"
              placeholder="Номер телефона"
              {...register('phone', {
                required: 'Укажите телефон!',
                pattern: {
                  value:
                    /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                  message: '+7 (ХХХ) ХХХ-ХХ-ХХ или с 8',
                },
                minLength: {
                  value: 10,
                  message: 'Минимум 10 цифр',
                },
                maxLength: {
                  value: 15,
                  message: 'Не может быть длиннее 15 символов',
                },
              })}
            />
          </div>
          <span className={classes.required} aria-hidden="true">
            *
          </span>
          <span className={classes.error} role="alert">
            {errors?.phone?.message}
          </span>
        </fieldset>

        <Controller
          name="communication"
          control={control}
          defaultValue=""
          rules={{
            required: 'Выберите способ связи',
            validate: (value) => {
              if (!value || value === '') {
                return 'Выберите способ связи';
              }
              return true;
            },
          }}
          render={({ field }) => {
            return (
              <CustomSelect
                options={options}
                value={field.value}
                onChange={field.onChange}
                placeholder="Способ связи"
                required
                error={errors?.communication?.message}
              />
            );
          }}
        />

        {watch('communication') === 'telegram' && (
          <fieldset
            className={
              errors?.login
                ? `${classes.inputError} ${classes.login}`
                : `${classes.inputGroup} ${classes.login}`
            }
          >
            <div className={classes.autofillWrapper}>
              <input
                className={classes.input}
                type="text"
                placeholder="Логин Telegram"
                {...register('login', {
                  required:
                    watch('communication') === 'telegram'
                      ? 'Введите логин Telegram'
                      : false,
                  pattern: {
                    value: /^@?[A-Za-z0-9_]{5,32}$/,
                    message: 'Введите корректный логин Telegram',
                  },
                  validate: (value) => {
                    const comm = watch('communication');
                    if (comm === 'telegram' && !value)
                      return 'Введите логин Telegram';
                    return true;
                  },
                })}
              />
            </div>

            <span className={classes.required} aria-hidden="true">
              *
            </span>
            <span className={classes.error} role="alert">
              {errors?.login?.message}
            </span>
          </fieldset>
        )}

        {variant === 'authorial' && (
          <fieldset
            className={
              errors && 'quiz_description' in errors && errors.quiz_description
                ? `${classes.inputErrorArea} ${classes.textAreaGroup} ${classes.login}`
                : `${classes.textAreaGroup} ${classes.login}`
            }
          >
            <div className={classes.autofillWrapper}>
              <textarea
                className={classes.textarea}
                placeholder="Опишите желаемый квиз"
                {...register('quiz_description', {
                  required:
                    variant === 'authorial' ? 'Опишите желаемый квиз' : false,
                  minLength: {
                    value: 20,
                    message: 'Минимум 20 символов',
                  },
                  maxLength: {
                    value: 2000,
                    message: 'Не длиннее 2000 символов',
                  },
                })}
              />
            </div>

            <span className={classes.required} aria-hidden="true">
              *
            </span>
            {'quiz_description' in errors && errors.quiz_description && (
              <span className={classes.error} role="alert">
                {errors.quiz_description?.message}
              </span>
            )}
          </fieldset>
        )}
        {error && (
          <div className={classes.loadingWrapper}>
            <span className={classes.errorLoading} role="alert">
              {error}
            </span>
          </div>
        )}
        {loading ? (
          <div className={classes.loadingWrapper}>
            <Loader />
          </div>
        ) : (
          <button type="submit" className={classes.btn} disabled={!isValid}>
            <span className={classes.textBtn}>Отправить</span>
          </button>
        )}
      </div>
    </form>
  );
};
