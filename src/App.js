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
