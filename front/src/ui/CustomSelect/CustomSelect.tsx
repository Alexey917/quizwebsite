import { useState, useRef, useEffect } from 'react';
import classes from './CustomSelect.module.css';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

export const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder = 'Выберите...',
  required,
  error,
  disabled,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const selected = options.find((opt) => opt.value === value);
      setSelectedLabel(selected?.label || '');
    } else {
      setSelectedLabel('');
    }
  }, [value, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    if (onChange) {
      onChange(option.value);
    }
    setIsOpen(false);
  };

  return (
    <>
      <fieldset className={error ? classes.inputError : classes.inputGroup}>
        <div
          ref={selectRef}
          className={`${classes.customSelect} ${isOpen ? classes.open : ''} ${
            disabled ? classes.disabled : ''
          }`}
        >
          <div
            className={classes.selectTrigger}
            onClick={() => !disabled && setIsOpen(!isOpen)}
          >
            <span
              className={selectedLabel ? classes.value : classes.placeholder}
            >
              {selectedLabel || placeholder}
            </span>
          </div>

          {isOpen && (
            <div className={classes.dropdown} tabIndex={0}>
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`${classes.option} ${
                    option.value === value ? classes.selected : ''
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {required && <span className={classes.required}>*</span>}
        {error && <span className={classes.error}>{error}</span>}
      </fieldset>

      {value === 'telegram' && (
        <fieldset className={`${classes.inputGroup} ${classes.login}`}>
          <input
            className={classes.input}
            type="text"
            placeholder="Логин Telegram"
          />
          <span className={classes.required}>*</span>
          <span className={classes.error}>текст ошибки</span>
        </fieldset>
      )}
    </>
  );
};
