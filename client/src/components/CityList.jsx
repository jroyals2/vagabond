import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = styled.div`
text-color: blue;


`
const List = styled.ul`
display: flex;
justify-content: space-around;
flex-direction: row;
font-size: 30px;
padding: 75gipx; 
@media(min-width: 1366px){
display: flex;
flex-directtion: row;
justify-content: space-around;
font-size: 30px;
padding: 75gipx; 
}

`
const CityList = (props) => {
    return (
        <List>
            {props.cities.map((city) => {
                return (
                    <div className="card">
                    <li><Link to={`/cities/${city.id}`}>{city.name}</Link></li>
                    <img src={city.picture} alt=""/>
                    </div>
                )
            })}
        </List>
    );
};

export default CityList;