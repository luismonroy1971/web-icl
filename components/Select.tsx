import React, { useEffect } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import Async from 'react-select/async';

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
      fontFamily: 'Lato',
      fontWeight: 400,
      fontSize: '.875rem',
      textAlign: 'left',
      lineHeight: '1.25rem',
      color: '#ADB5BD',
      padding: '0.25rem 0.5rem',
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
      fontFamily: 'Lato',
      fontWeight: 400,
      fontSize: '.875rem',
      textAlign: 'left',
      padding: '0.25rem 0.5rem',
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
      cursor: 'pointer',
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
  option: (provided: any, state: any) => {
    return {
      ...provided,
      color: state.isSelected ? '#fff' : '#16236E',
      backgroundColor: state.isSelected ? '#16236E' : '#fff',
      ':hover': {
        backgroundColor: state.isSelected ? '#16236E' : '#E9ECEF',
      },
      cursor: 'pointer',
    };
  }
};

const Label = styled.label`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

export const CustomSelect = (props: any) => {
  const SelectComponent = props.asyncConfig ? Async : Select;

  return (
    <Label className="flex w-full font-lato">
      <p className="text-sm text-gray-500">{props.label}</p>
      <SelectComponent
        {...props}
        width="100%"
        error={props.error}
        name={props.name}
        options={props.options}
        styles={customStyles}
        placeholder={props.placeholder}
        onChange={props.setValue}
        openMenuOnFocus={true}
        isDisabled={props.disabled}
        {...(props.asyncConfig || {})}
      />
      {props.error && (
        <p className="text-sm text-red-500">{props.error.message}</p>
      )}
    </Label>
  );
};
