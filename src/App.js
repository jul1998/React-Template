import logo from './logo.svg';
import './styles/App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import {ContextProvider} from "./Context.jsx"


function App() {
  return (
    <ContextProvider>
            <Routes>
            <Route path="/" element={ <Home/> } />
        </Routes>
    </ContextProvider>

  );
}

export default App;
