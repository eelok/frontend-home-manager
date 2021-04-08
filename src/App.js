import {Route, Switch} from "react-router-dom";
import './App.css';
import CounterComponent from "./components/counterComponent/CounterComponent";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/electricity" component={CounterComponent}/>
                <Route path="/cold-water"/>
                <Route path="/hot-water"/>
            </Switch>

        </div>
    );
}

export default App;
