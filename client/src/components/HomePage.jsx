import React from 'react';
import styled from 'styled-components'
import CityList from './CityList'

const Home = styled.div`
text-color: blue;


`
const List = styled.ul`
@media(min-width: 1366px){
display: flex;
flex-directtion: row;
justify-content: space-around;
font-size: 30px;
padding: 75gipx; 
}

`



const componentName = (props) => {
    return (
        <div>
            <Home>
             <h1> Globe Trotter </h1>

            <img className="homepicture" src="https://www.homeadvisor.com/images/consumer/hhi/hero-photos/city/Atlanta.jpg" alt="atlanta"/>
            <List>
                <CityList cities={props.cities}/>
                <li>Atlanta</li>
                <li>New York </li>
                <li>Boston</li>
                <li>London</li>
                <li>San Diego</li>
            </List>
                </Home>
        </div>
    );
};

export default componentName;