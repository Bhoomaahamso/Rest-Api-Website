import React, { useState, useEffect, useReducer } from "react";
import { Route } from "react-router-dom";
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import Search from "./Search";
import Filter from "./Filter";
import Fetch from "./Fetch";
import "./App.css";
import Details from "./Details";

export const reContext = React.createContext();

const redirect = {
  search: ""
};

const reducer1 = (state, action) => {
  switch (action.type) {
    case "searchChange":
      return { ...redirect, search: action.value}
    default:
      return state;
  }
};

function App() {
  const [redirec, dispatch1] = useReducer(reducer1, redirect);

  const [data, setData] = useState([]);
  const [region, setRegion] = useState("");
  const [dmode, setDmode] = useState(false);

  const dataa = async () => {
    // await fetch("https://restcountries.eu/rest/v2/all")
    await fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {setData(data)});
  };

  useEffect(() => {
    dataa();
  }, []);

  const theme = () => {
    document.body.classList.toggle("dark-background")
    setDmode(!dmode);
  }

  const changeRegion = (r) => {
    setRegion(r);
  };

  return (
    <div className={`App ${dmode && "dark-background"}`}>
            <div className={`head ${dmode && "dark-head"}`}>
              <h2>Where in the World?</h2>
              <p onClick={()=>theme()} className='mode'><NightsStayOutlinedIcon/>Dark Mode</p>
            </div>
            <Route exact path="/">
                <reContext.Provider
                  value={{ redirecD: redirec, dispatch1D: dispatch1 }}
                >
                
              <div className="search-bar">
                    <Search dmode={dmode} />
                    <Filter changeRegion={changeRegion} dmode={dmode} />
              </div>
            <div className="data">           
                    { data.length>0 ?
                      <Fetch                    
                        region={region}
                        data={data}
                        dmode={dmode}
                      />
                      :
                      <div className="load"><h1>Loading...</h1></div>
                    }
              </div>
                </reContext.Provider>
            </Route>
            <Route exact path="/:name" >
            <Details dmode={dmode}/>
            </Route>     
    </div>
  );
}

export default App;