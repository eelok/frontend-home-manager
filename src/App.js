import {Route, Switch} from "react-router-dom";
import './App.css';
import FormInput from "./components/FormInput/FormInput";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/electricity" component={FormInput}/>
            </Switch>

        </div>
    );
}

export default App;
