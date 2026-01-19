import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Forecast from './components/Forecast/Forecast';
import Parameters from './components/Parameters/Parameters';

function App() {

  return (
    <Container>
      <Header></Header>
      <Main>
        <Forecast></Forecast>
        <Parameters></Parameters>
      </Main>
    </Container>
  )
}

export default App
