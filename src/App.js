import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {
        // Code here
      }
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/login" element={<Login/>}/>
        
      </Routes>
    
    </div>
  );
}

export default App;
