import {Route, Switch} from "react-router-dom";
import './App.css';
import CounterComponent from "./components/counterComponent/CounterComponent";
import DisplayCounters from "./components/displayCounters/DisplayCounters";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/counters/:type/new" component={CounterComponent}/>
                <Route path="/counters/:type/list" component={DisplayCounters}/>
            </Switch>

        </div>
    );
}

export default App;
