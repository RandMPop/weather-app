import { useState } from "react";
import CitiesChose from "../components/Cities/CitiesChose";
import CitiesList from "../components/Cities/CitiesList";

function Cities() {

  const [cities, setCities] = useState([]);

  return (
      <>
        <CitiesChose setCities={ setCities } />
        <CitiesList cities = {cities}/>
      </>
  );
}

export default Cities