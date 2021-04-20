import React, {useState, useEffect} from 'react';
import './../../constants/url';

const DisplayCounters = (props) => {
    const type = props.match.params.type;
    const [counter, setCounter] = useState(0);

    useEffect(async() => {
        const response = await fetch(`${URL}/counters/${type}`);
        const data = await response.json();
        setCounter({
            "type": type,
            "value": data.value,
            "timestamp": data.timestamp
        })
    }, []);


    return (
        <div>
            {
                counter.map(item => (
                    <div key={item.id}>
                        <div>{item.type}</div>
                        <div>{item.value}</div>
                        <div>{item.timestamp}</div>
                    </div>
                ))
            }

        </div>
    )

}
export default DisplayCounters;