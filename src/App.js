import logo from './logo.svg';
import './App.css';
import {Link, useParams} from "react-router-dom";

function App() {

    console.log(useParams())

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link to="./test">
                    Test
                </Link>
            </header>
        </div>
    );
}

export default App;
