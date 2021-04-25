import React, {useState} from 'react';
import {URL} from "../../constants/url";
import moment from "moment";
import InputComponent from '../FormInput/InputComponent';


const CounterComponent = (props) => {
    const type = props.match.params.type;
    const [counter, setCounter] = useState(0);

    const handleInputChange = (event) => {
        setCounter(event.target.value);
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        let timestamp = moment().format("DD-MM-yyyy HH:mm:ss");
        let counterWithPont = counter.replace(",", ".");

        fetch(`${URL}/counter-data`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "type": type,
                "value": counterWithPont,
                "timestamp": timestamp
            })
        }).catch(err => console.log(err));
        setCounter(0);
    }

    return (
        <form onSubmit={handleSubmitForm}>

            <InputComponent
                labelName={type}
                inputType={"text"}
                id={type}
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