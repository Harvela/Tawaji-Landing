import type { ReactNode } from 'react';
import React from 'react';

type Props = {
  label?: string;
  placeholder: string;
  style?: string;
  icon?: ReactNode;
  register?: any;
  name: string;
  validator?: any;
  type?: string;
  defaultValue?: string;
  disabled?: boolean;
  bgColor?: string;
  onChange?: any;
  required?: boolean;
  max?: number | string;
  min?: number | string;
  onBlur?: any;
};

const Input: React.FC<Props> = (props: Props) => {
  const {
    label,
    placeholder,
    style,
    icon,
    type,
    defaultValue,
    bgColor = 'bg-green/5',
    required = false,
    max,
    min,
    disabled,
    onBlur,
  } = props;

  return (
    <div className={`sm:mb-5 ${style} flex-1`}>
      {label && (
        <span className="text-blue mb-2 flex flex-row items-center gap-1 text-[12px] font-semibold">
          {label}
          {icon}
        </span>
      )}
      <input
        type={type || 'text'}
        className={`${bgColor} border-blue/10 w-full rounded-[5px] px-4 py-1 text-[14px] focus:outline-0`}
        placeholder={placeholder}
        max={max}
        min={min}
        defaultValue={defaultValue || ''}
        onChange={(e) => {
          props?.onChange?.(e?.target?.value || '');
        }}
        onBlur={onBlur}
        required={required}
        autoComplete="new-password"
        disabled={disabled}
      ></input>
    </div>
  );
};

export default Input;
