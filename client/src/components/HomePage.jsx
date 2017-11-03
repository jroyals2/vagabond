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

            <CityList cities={props.cities}/>
            </Home>
        </div>
    );
};

export default componentName;