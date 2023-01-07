import React from 'react'

interface Props {
    type?: string,
    label?: string,
    required?: boolean,
    name?: string,
    inputClass?:string,
    labelClass?:string,
    placeholder?:string,
    variable_x?: any
    component__wrap?:string;
    handleChange?: (event: React. ChangeEvent<HTMLInputElement>) => void
    onClick?: any
    value?: any
    disabled?: boolean,
    myRef?: any
}


export default function InputField({ myRef, 
    type, 
    label, 
    disabled, 
    required, 
    name, 
    inputClass, 
    labelClass, 
    placeholder, 
    variable_x, 
    component__wrap, 
    handleChange, onClick, 
    value }: Props) {
  return (
    <span className={`${component__wrap}`}>
            <label className={labelClass}>{label}</label>
            <input ref={myRef} disabled={disabled} className={inputClass} type={type} required={required} placeholder={placeholder} value={value} onChange={handleChange} name={name} />
            <span onClick={onClick}>{variable_x}</span>
    </span>
  )
}
