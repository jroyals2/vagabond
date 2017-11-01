import React from 'react';
import styled from 'styled-components'

const Home = styled.div`
color: silver;

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



const componentName = () => {
    return (
        <div>
            <Home>
             <h1> Globe Trotters </h1>

            <img className="homepicture" src="https://www.homeadvisor.com/images/consumer/hhi/hero-photos/city/Atlanta.jpg" alt="atlanta"/>
            <List>
        
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