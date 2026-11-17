import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Settings from "./pages/Settings";
import { WeatherProvider } from './context/WeatherContext';
function App() {

  return (
    <WeatherProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={

            <Home />

          } />
          <Route path="/cities" element={<Cities />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </WeatherProvider>
  )
}

export default App;
