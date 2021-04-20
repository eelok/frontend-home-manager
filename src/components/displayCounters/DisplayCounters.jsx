import React, {useState, useEffect} from 'react';
import {URL} from '../../constants/url';

const DisplayCounters = (props) => {
    const type = props.match.params.type;
    const [counters, setCounters] = useState([]);

    useEffect(() => {
        console.log(`${URL}/counter-data/${type}`);
        fetch(`${URL}/counter-data/${type}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                console.log("FROM SERVER", data);
                setCounters(data);
            })
            .catch(error => {
                console.error("Error fetching data ", error);
            })
    }, []);


    return (
        <div>
            {
                counters.map(item =>
                    <div key={item.id}>
                        <div>{item.type}</div>
                        <div>{item.value}</div>
                        <div>{item.timestamp}</div>
                    </div>
                )}
        </div>
    )

}
export default DisplayCounters;