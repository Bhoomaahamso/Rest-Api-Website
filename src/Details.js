import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BorderCountries from "./BorderCountries";
import "./Details.css";
import Button from "@material-ui/core/Button";

function Details({ dmode }) {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  // const url = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
  const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then(res => res.json())
        .then(data => {
          setCountry(data);
        })
    }
    fetchData()
  }, [name])

  return (
    <div className="details">
      <div className="btn">
        <Link to="/">
          <Button
            className={dmode && "btn-dark"}
            variant="outlined"
          >
            ← Back
          </Button>
        </Link>
      </div>
      {country.length > 0 ?
        country.map((i) => (
          <div className="detail">
            <div className="flag">
              <img src={i.flags.svg} />
            </div>
            <div className="text">
              <div>
                <h2>{i.name.common}</h2>
              </div>
              <div className="page-text">
                {/* <p>Native Name: <span>{i.name.nativeName.zho.common }</span></p> */}
                <p>Population: <span>{i.population}</span></p>
                <p>Region: <span>{i.region}</span></p>
                <p>Sub Region: <span>{i.subregion}</span></p>
                <p>Capital: <span>{i.capital}</span></p>
                <span className="break"></span>
                <p>Top Level Domain: <span>{i.tld[0]}</span></p>
                <p>Currencies: <span>{i.currencies[Object.keys(i.currencies)[0]].name}</span></p>
                <p className="coma">
                  Languages:{" "}
                  {/* {i.languages.map((k) => (
                  <span>{k}</span>
                ))} */}

                  {Object.keys(i.languages).map((key) =>
                    <span>{i.languages[key]}</span>
                  )}



                </p>
              </div>
              <div className="label">
                <h4>Border Countries: </h4>
                {
                  i.borders ? i.borders.map((j) => (
                    <BorderCountries j={j} dmode={dmode} />
                  ))
                  :
                  (<h5> &nbsp; None</h5>)                
                }
              </div>
            </div>
          </div>

        ))
        :
        <div className="load"><h1>Loading...</h1></div>
      }
    </div>
  );
}

export default Details;