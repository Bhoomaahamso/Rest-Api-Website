import React, { useState, useEffect, useContext } from "react";
import CardS from "./CardS";
import "./Fetch.css";

import { reContext } from "./App";

function Fetch({ region, data, dmode }) {
  const [countryOb, setCountryOb] = useState([]);
  const [searched, setSearched] = useState([]);

  const red = useContext(reContext);
  const val = red.redirecD.search.toUpperCase(); 

  useEffect(() => {
    
    const getSearch = (e) => {
      const result = countryOb.filter((it) => {
      return it.name.toUpperCase().includes(val);
    });      
      setSearched(result);
    };
    getSearch();
  }, [val])
  
    const getFilter = () => {
    const filt = countryOb.filter((it) => it.region === region);
    setSearched(filt);
  };

  useEffect(() => {
    getFilter();
  }, [region]);

  useEffect(() => {
    setCountryOb(data);
  }, []);

  return (
    <div className="countryDisplay">
      {searched.length > 0
        ? searched.map((s) => <CardS key={s.name} Ob={s} dmode={dmode} />)
        : countryOb.map((Ob) => <CardS key={Ob.name} Ob={Ob} dmode={dmode} />)}

      {/*DEBUGGING RESULT
            CardS component is heavy and re-rendering 250 takes time and hence causes the delay 
            in the input field.
            
            ->Reducing the number of cards to be rendered to 10 lowered the delay by a considerable amount.
            ->Switching to the "CountryCard" component also managed to lower the delay.

            QUESTIONS
            Why is the "cards compoenent heavy?

            */}
    </div>
  );
}

export default React.memo(Fetch);