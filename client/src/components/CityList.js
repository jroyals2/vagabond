import React from 'react';
import { Link } from 'react-router-dom'
const CityList = (props) => {
    return (
        <div>
            {props.cities.map((city) => {
                return (

                    <Link to={`/cities/${city.id}`}>{city.name}</Link>
                )
            })}
        </div>
    );
};

export default CityList;