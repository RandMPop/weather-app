import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Forecast from '../components/Forecast/Forecast';
import Parameters from '../components/Parameters/Parameters';

function Home() {

  return (
    <>
      <Header></Header>
      <Main>
        <Forecast></Forecast>
        <Parameters></Parameters>
      </Main>
    </>
  )
}

export default Home;