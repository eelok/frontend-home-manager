import React, {useState} from 'react';
import {URL} from "../../constants/url";
import moment from "moment";
import InputComponent from '../FormInput/InputComponent';


const CounterComponent = (props) => {
    const type = props.match.params.type;
    const [counter, setCounter] = useState(0);

    const handleInputChange = (event) => {
        setCounter(+event.target.value.replace(",", "."));
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        let timestamp = moment().format("DD-MM-yyyy HH:mm:ss");

        fetch(`${URL}/counter-data`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "type": type,
                "value": counter,
                "timestamp": timestamp
            })
        })
            .then(r => {
                setCounter(0);
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <InputComponent
                labelName={type}
                inputType={"text"}
                id={type}
                required={true}
                placeholder={"0000,00"}
                value={counter}
                onChange={handleInputChange}
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default CounterComponent;