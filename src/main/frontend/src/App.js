//import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CategoryFood from "./routes/CategoryFood";
import Home from "./routes/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu/:id" element={<CategoryFood/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/*
// api 테스트 코드 (참고용으로 쓰라고 남겨둠)
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';

function App() {
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get("/api/menu/search?searchWord=치킨")
        .then(response => setHello(JSON.stringify(response.data)))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <ul>
                    {hello}
                </ul>
            </header>
        </div>
    );
}

export default App;
*/