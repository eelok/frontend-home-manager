import React from 'react';

const InputComponent = ({labelName, inputType, name, id, required, placeholder, handleInputChange}) => {
    return (
        <>
            <label htmlFor={id}>{labelName}</label>
            <input
                type={inputType}
                name={name}
                id={id}
                required={required}
                placeholder={placeholder}
                onChange={handleInputChange}
            />
        </>
    );
}

export default InputComponent;