import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Settings from "./pages/Settings";
import { WeatherProvider } from './context/WeatherContext';
function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={
          <WeatherProvider>
            <Home />
          </WeatherProvider>
        } />
        <Route path="/cities" element={<Cities />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App;
