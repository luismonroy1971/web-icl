import React, { useState } from 'react';
import styled from 'styled-components';
import { useAsyncDebounce } from 'react-table';

interface InputProps {
  required?: boolean;
  error?: boolean;
  noLabel?: boolean;
  icon?: boolean;
  width?: string | number;
  img?: (HTMLElement & SVGAElement) | string;
  labelText?: string;
  placeholderText: string;
  errorText?: string;
  filter?: string;
  setFilter?: any;
  setFormValue?: (arg: string) => string;
  type: string;
  isInnerTooltip?: boolean;
  tooltipText?: string;
  disabled?: boolean;
}

interface CustomInputProps {
  error?: boolean;
  icon?: boolean;
  img?: HTMLElement & SVGAElement;
}

interface LabelProps {
  width?: string | number;
}

interface IconProps {
  setIcon: HTMLElement & SVGAElement;
}

const CustomInput = styled.input<CustomInputProps>`
  padding: 12px};
  border-radius: 4px};
  border: ${({ error, theme }) =>
    error
      ? `1px solid #FF0000`
      : `1px solid #000`};
  background-color: #fff;
  box-sizing: border-box
  font-family: Poppins;
  font-size: 14px;
  line-height: 20px;
  ::placeholder {
    color: #FF0000;
    font-family: Poppins;
    font-size: 14px;
    line-height: 20px;
  }
  &:focus {
    border: 1px solid #000;
    box-shadow: #000 0px 0px 4px 0px;
    outline: none;
  }
  ${({ icon, img }) => {
    if (icon) {
      return `background-image: url(${img}); background-repeat: no-repeat; background-position: 98% 50%;`;
    }
  }}
`;
export const Label = styled.label<LabelProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${({ width }) => width || '18.75rem'};
`;
const PasswordIcon = styled.div<IconProps>`
  background-image: ${({ setIcon }) => `url(${setIcon})`};
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  position: absolute;
  right: 2%;
  top: 60%;
`;
const InputInnerActionSection = styled.div`
  position: absolute;
  z-index: 2;
  right: 1%;
  top: 20%;
  width: 20px
  height: 20px;
`;

export const Input = React.forwardRef<any, InputProps>(
  (
    {
      required,
      error,
      noLabel,
      icon,
      width = 0,
      labelText = 'label text',
      placeholderText = 'Field Text',
      errorText = 'Error Text',
      setFilter,
      setFormValue,
      type = 'text',
      disabled,
    },
    ref
  ) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
      <Label width={width}>
        {noLabel && (
          <p className="font-lato text-2xl">
            {labelText} {required && <span className="text-danger">*</span>}
          </p>
        )}
        <div style={{ position: 'relative', width: 'inherit' }}>
          <CustomInput
            style={{
              width: `98%`,
              paddingTop: 12,
              paddingBottom: 12,
              paddingRight: 0,
              paddingLeft: 12,
            }}
            ref={ref}
            type={type === 'password' && hidePassword ? 'password' : 'text'}
            placeholder={placeholderText}
            error={error}
            icon={icon}
            onChange={(e) => {
              if (setFilter) {
                setFilter(e.target.value || undefined);
              }
              if (setFormValue) {
                setFormValue(e.target.value);
              }
            }}
            disabled={disabled}
          />
        </div>

        {error && <p className="text-danger text-sm font-lato">{errorText}</p>}
      </Label>
    );
  }
);

Input.displayName = 'Input';