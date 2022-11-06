import React from 'react';
import './Country.css'

const Country = (props) => {
    const { area, region, name, population, flags } = props.country;
    return (
        <div className="details">
            <h2>Country Name: <small>{name.common}</small></h2>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Country Area: {area} sqrKM</h3>
            <h4>Country Region: {region}</h4>
        </div>
    );
};

export default Country;