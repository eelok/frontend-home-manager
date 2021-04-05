import React, {useState} from 'react';
import {URL} from "../../constants/url";
import moment from "moment";

const FormInput = () => {

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
            <label htmlFor="electricity">Electricity: </label>
            <input
                type="text"
                name="electricity"
                id="electricity"
                placeholder={"0000,00"}
                defaultValue={counter}
                required={true}
                onChange={handleInputChange}
            />
            <button type="submit">Save
            </button>
        </form>

    );
}

export default FormInput;