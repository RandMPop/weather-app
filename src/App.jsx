import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Settings from "./pages/Settings";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cities" element={<Cities />}/>
      <Route path= "/settings" element={<Settings />}/>
    </Routes>
  )
}

export default App;
