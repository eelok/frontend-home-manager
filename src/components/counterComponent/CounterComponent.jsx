import React, {useState} from 'react';
import {URL} from "../../constants/url";
import moment from "moment";
import InputComponent from '../FormInput/InputComponent';

const CounterComponent = () => {

    const [counter, setCounter] = useState();

    const handleInputChange = (event) => {
        setCounter(event.target.value);
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        let timestamp = moment().format("DD-MM-yyyy HH:mm:ss");
        debugger;
        fetch(`${URL}/counter-data`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "type": "ELECTRICITY",
                "value": counter,
                "timestamp": timestamp
            })
        }).catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <InputComponent
                labelName={"electricity"}
                inputType={"text"}
                id={"electricity"}
                required={true}
                placeholder={"0000,00"}
                defaultValue={counter}
                onChange={handleInputChange}
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default CounterComponent;