import React, { useState, forwardRef, useImperativeHandle } from 'react';
import * as yup from 'yup';

interface TextAreaProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  disabled?: boolean;
  className?: string;
  validate?: yup.StringSchema;
}

interface TextAreaRef {
  validateField: () => boolean;
}

const TextArea = forwardRef<TextAreaRef, TextAreaProps>(
  (
    {
      name,
      placeholder,
      value,
      onChange,
      rows = 4,
      disabled = false,
      className,
      validate,
    },
    ref,
  ) => {
    const [error, setError] = useState<string | null>(null);

    const validateField = () => {
      if (validate) {
        try {
          validate.validateSync(value);
          setError(null);
          return true;
        } catch (err) {
          if (err instanceof yup.ValidationError) {
            setError(err.errors[0]);
            return false;
          }
          console.error('Unexpected validation error:', err);
          return false;
        }
      }
      return true;
    };

    useImperativeHandle(ref, () => ({
      validateField,
    }));

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      onChange(e);

      if (validate) {
        validate
          .validate(newValue)
          .then(() => setError(null))
          .catch((err) => {
            if (err instanceof yup.ValidationError) {
              setError(err.errors[0]);
            } else {
              console.error('Unexpected validation error:', err);
            }
          });
      }
    };

    return (
      <div>
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          rows={rows}
          disabled={disabled}
          className={`border p-2 rounded resize-none ${
            disabled ? 'bg-gray-200 cursor-not-allowed' : ''
          } ${error ? 'border-red-500' : ''} ${className || ''}`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
