import React from 'react';

const InputComponent = ({labelName, inputType, id, required, placeholder, defaultValue, onChange}) => {
    return (
        <>
            <label htmlFor={id}>{labelName}</label>
            <input
                type={inputType}
                name={id + "huy sobachiy"}
                id={id}
                required={required}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    );
};

export default InputComponent;