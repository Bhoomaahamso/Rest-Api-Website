import React from "react";
import "./Filter.css";

function Filter({ changeRegion, dmode }) {

    return (
    <div>
      <select
        className={`${dmode && "dark-elem"}`}
        onChange={(e) => {
          changeRegion(e.target.value);
        }}
      >
        <option
          onChange={(e) => {
            changeRegion(e.target.value);
          }}
          value="filter"
        >
          Filter by region
        </option>
        <option
          onChange={(e) => {
            changeRegion(e.target.value);
          }}
          value="Africa"
        >
          Africa
        </option>
        <option
          onChange={(e) => {
            changeRegion(e.target.value);
          }}
          value="Americas"
        >
          Americas
        </option>
        <option
          onChange={(e) => {
            changeRegion(e.target.value);
          }}
          value="Asia"
        >
          Asia
        </option>
        <option
          onChange={(e) => {
            changeRegion(e.target.value);
          }}
          value="Europe"
        >
          Europe
        </option>
        <option
          onChange={(e) => {
            changeRegion(e.target.value);
          }}
          value="Oceania"
        >
          Oceania
        </option>
      </select>
    </div>
  );
}

export default Filter;