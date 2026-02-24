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
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls="select-dropdown"
          aria-label={placeholder}
          aria-required={required}
          aria-invalid={!!error}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              !disabled && setIsOpen(!isOpen);
            }
            if (e.key === 'Escape' && isOpen) {
              setIsOpen(false);
            }
          }}
        >
          <span className={selectedLabel ? classes.value : classes.placeholder}>
            {selectedLabel || placeholder}
          </span>
        </div>

        {isOpen && (
          <div
            className={classes.dropdown}
            tabIndex={0}
            role="listbox"
            id="select-dropdown"
            aria-label={placeholder}
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={`${classes.option} ${
                  option.value === value ? classes.selected : ''
                }`}
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={option.value === value}
                tabIndex={-1}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {required && (
        <span className={classes.required} aria-hidden="true">
          *
        </span>
      )}
      {error && (
        <span className={classes.error} role="alert">
          {error}
        </span>
      )}
    </fieldset>
  );
};
