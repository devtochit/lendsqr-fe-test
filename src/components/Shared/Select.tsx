
interface Props {
    label?: string,
    input__class?: string,
    label__class?: string,
    placeholder?: string,
    variable_x?: any
    component__wrap?: string;
    onHandleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onClick?: any
    value?: any
    options?: any
}


const Select = ({ label, options, input__class, label__class, placeholder, variable_x, component__wrap, onHandleInputChange, onClick, value }: Props) => {
    
    return (
        <span className={`${component__wrap}`}>
            <label className={label__class}>{label}</label>
            <select className={input__class}>
                {options?.map((val: any, i: number) =>
                    <option onClick={() => onClick(val)} key={i} value={val.option}>{val.option}</option>
                )}
            </select>
            <span onClick={onClick}>{variable_x}</span>
        </span>
    )
}

export default Select;