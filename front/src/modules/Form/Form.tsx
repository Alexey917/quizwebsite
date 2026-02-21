import { useForm, Controller } from 'react-hook-form';
import { CustomSelect, Loader } from '@/ui';
import { useSelector } from 'react-redux';
import { getChoice } from '@/store';
import { useEffect, useState } from 'react';
import {
  applicationApi,
  type IAuthorialApplication,
  type IUsualApplication,
} from './api';
import { getErrorMessage } from '@/api';

import classes from './Form.module.css';

interface IForm {
  variant?: 'authorial' | 'usual';
}

export const Form = ({ variant = 'usual' }: IForm) => {
  const rate = useSelector(getChoice);

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
    formData.append('quiz_id', data.quiz_id);
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

    console.log('📤 Отправка FormData:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    setLoading(true);
    setError(null);

    try {
      await applicationApi(formData);
      alert(data);
      reset();
    } catch (e: unknown) {
      const message = getErrorMessage(e);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (rate?.rate && rate.rate.id) {
      // В инпут кладем название (для отображения)
      // setValue('tariff_name', rate.rate.name);
      console.log('✅ ID тарифа:', rate.rate.id);
      console.log('🔢 Тип:', typeof rate.rate.id);
      setValue('tariff_id', 1);
    }
    setValue(
      'quiz_id',
      variant === 'authorial' ? 'Авторский квиз' : rate.title,
    );
  }, [rate, variant]);

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <legend className={classes.title}>
        Заполните форму и наш менеджер свяжется с вами в ближайщий будний день с
        9:00 до 18:00
      </legend>
      <div className={classes.wrapper}>
        <fieldset className={classes.inputGroup}>
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
          <span className={classes.required}>*</span>
          <span className={classes.error}>{errors?.tariff_id?.message}</span>
        </fieldset>

        {variant === 'authorial' ? (
          <fieldset
            className={
              errors?.tariff_id ? classes.inputError : classes.inputGroup
            }
          >
            <input
              className={classes.input}
              type="text"
              placeholder=""
              value="Авторский квиз"
              readOnly
              {...register('quiz_id', { required: 'Квиз не выбран' })}
            />
            <span className={classes.required}>*</span>
            <span className={classes.error}>{errors?.quiz_id?.message}</span>
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
              {...register('quiz_id', { required: 'Квиз не выбран' })}
            />
            <span className={classes.required}>*</span>
            <span className={classes.error}>{errors?.quiz_id?.message}</span>
          </fieldset>
        )}

        <fieldset
          className={
            errors?.quantity_of_guests ? classes.inputError : classes.inputGroup
          }
        >
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
          <span className={classes.required}>*</span>
          <span className={classes.error}>
            {errors?.quantity_of_guests?.message}
          </span>
        </fieldset>

        <fieldset
          className={errors?.name ? classes.inputError : classes.inputGroup}
        >
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
          <span className={classes.required}>*</span>
          <span className={classes.error}>{errors?.name?.message}</span>
        </fieldset>

        <fieldset
          className={errors?.phone ? classes.inputError : classes.inputGroup}
        >
          <input
            className={classes.input}
            type="text"
            placeholder="Номер телефона"
            {...register('phone', {
              required: 'Укажите телефон!',
              pattern: {
                value:
                  /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                message: 'Введите корректный номер телефона',
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
          <span className={classes.required}>*</span>
          <span className={classes.error}>{errors?.phone?.message}</span>
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
                options={[
                  { value: 'call', label: 'Звонок' },
                  { value: 'telegram', label: 'Telegram' },
                  { value: 'whatsApp', label: 'WhatsApp' },
                ]}
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
                  value: /^@?[A-Za-z0-9_]{3,32}$/,
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

            <span className={classes.required}>*</span>
            <span className={classes.error}>{errors?.login?.message}</span>
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
            <textarea
              className={classes.textarea}
              placeholder="Опишите желаемый квиз"
              {...register('quiz_description', {
                required:
                  variant === 'authorial' ? 'Опишите желаемый квиз' : false,
                minLength: {
                  value: 20,
                  message: 'Описание должно содержать минимум 20 символов',
                },
                maxLength: {
                  value: 2000,
                  message: 'Описание не может быть длиннее 2000 символов',
                },
              })}
            />
            <span className={classes.required}>*</span>
            {'quiz_description' in errors && errors.quiz_description && (
              <span className={classes.error}>
                {errors.quiz_description?.message}
              </span>
            )}
          </fieldset>
        )}
        {error && (
          <div className={classes.loadingWrapper}>
            <span className={classes.errorLoading}>{error}</span>
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
