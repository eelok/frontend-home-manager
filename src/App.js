import {Route, Switch} from "react-router-dom";
import './App.css';
import CounterComponent from "./components/counterComponent/CounterComponent";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/:type" component={CounterComponent}/>
            </Switch>

        </div>
    );
}

export default App;
