import {countersType} from "./../../CounterType"
import {Link} from "react-router-dom";

const HomePage = (props) => {

    return (
        <>
            {
                countersType.map((item, index) => (
                    <Link key={index} to={`/counters/${item.type}/list`}>{item.name}</Link>
                ))
            }
        </>
    )

};
export default HomePage;