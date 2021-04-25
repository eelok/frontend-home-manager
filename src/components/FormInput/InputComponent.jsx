import React from 'react';

const InputComponent = ({labelName, inputType, id, required, placeholder, value, onChange}) => {
    return (
        <>
            <label htmlFor={id}>{labelName}</label>
            <input
                type={inputType}
                name={id}
                id={id}
                required={required}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    );
};

export default InputComponent;