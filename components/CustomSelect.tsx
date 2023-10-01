import React, { useEffect } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import Async from 'react-select/async';
import { Button } from './Button';

interface SelectWrapperProps {
  isFocused: boolean;
  width: string;
  selectProps: { error: {} };
}

const customStyles = {
  container: (provided: any) => {
    return {
      ...provided,
      width: '100%',
    };
  },
  placeholder: (provided: any) => {
    return {
      ...provided,
      fontFamily: 'Poppins',
      fontWeight: 400,
      fontSize: '.875rem',
      textAlign: 'left',
      lineHeight: '1.25rem',
      color: '#ADB5BD',
    };
  },
  indicatorSeparator: () => ({}),
  dropdownIndicator: (provided: any) => ({
    provided,
    padding: 0,
    lineHeight: 0,
    color: '#ADB5BD',
  }),
  singleValue: (provided: any) => {
    return {
      ...provided,
      fontFamily: 'Poppins',
      fontWeight: 400,
      fontSize: '.875rem',
      textAlign: 'left',
    };
  },
  valueContainer: (provided: any) => {
    return {
      ...provided,
      padding: 0,
    };
  },
  input: (provided: any) => {
    return {
      ...provided,
      margin: 0,
      padding: 0,
    };
  },
  menu: (provided: any) => {
    return {
      ...provided,
      width: '100%',
      padding: '1rem',
      background: 'white',
      boxShadow: '0rem 0.75rem 1.5rem 0rem rgba(176, 184, 192, 0.2)',
      borderRadius: '.75rem',
      marginTop: '.25rem',
    };
  },
};

const Label = styled.label`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

const SelectWrapper = styled.div<SelectWrapperProps>`
  display: flex;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: ${(props: any) => {
    return props.selectProps.error ? `1px solid red` : `1px solid #ADB5BD`;
  }};
  box-sizing: border-box;
  background-color: #f1f3f5;
  font-family: Poppins;
  font-size: 14px;
  line-height: 20px;
  ${({ isFocused }) => {
    if (isFocused) {
      return `
      border: 1px solid #AE3EC9;
      box-shadow: 0rem 0rem 0rem 0.25rem rgba(243, 218, 250, 1);
      outline: none;
      box-sizing: border-box;
      svg {
        transform: scaleY(-1)
      }
      `;
    }
  }}
`;
const customSelectContainer = (props: any) => {
  return <SelectWrapper {...props} />;
};

const customOption = (props: any) => {
  return (
    <Button onClick={() => props.innerProps.onClick()}>{props.children}</Button>
  );
};

const customOptionWithBadge = (props: any) => {
  return (
    <Button onClick={() => props.innerProps.onClick()}>{props.children}</Button>
  );
};

export const CustomSelect = (props: any) => {
  const SelectComponent = props.asyncConfig ? Async : Select;

  useEffect(() => {
    if (typeof props.value === 'string') {
      const foundOption = (props.options || []).find(
        (opt: any) => opt.value === props.value
      );
      if (foundOption) props.setValue(foundOption);
      else {
        const newOption = [{ label: props.value, value: props.value }];
        props.setValue(newOption);
      }
    } else if (props.value === undefined) {
      props.setValue(null);
    }
  }, [props.value, props]);
  return (
    <label>
      {props.label}
      <span className="text-red">{props.required && '*'}</span>
      <SelectComponent
        {...props}
        width="100%"
        error={props.error}
        name={props.name}
        options={props.options}
        styles={customStyles}
        placeholder={props.placeholderText}
        components={{
          Control: customSelectContainer,
          Option: props.withBadge ? customOptionWithBadge : customOption,
          ...(props.components || {}),
        }}
        onChange={props.setValue}
        value={props.value}
        openMenuOnFocus={true}
        isDisabled={props.disabled}
        {...(props.asyncConfig || {})}
      />
      {props.error && <p className="">{props.errorText}</p>}
    </label>
  );
};
