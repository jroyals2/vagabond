import React from 'react';
import styled from 'styled-components'
import CityList from './CityList'

const Home = styled.div`
color: white;

`
const List = styled.ul`
@media(min-width: 1366px){
display: flex;
flex-directtion: row;
justify-content: space-around;
font-size: 30px;
padding: 75gipx; 
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40%;
    border-radius: 5px;
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
img {
    border-radius: 5px 5px 0 0;
}


`



const componentName = (props) => {
    return (
        <div>
            <Home>
             <h1> Globe Trotter </h1>
             </Home>

            <img className="homepicture" src="https://www.homeadvisor.com/images/consumer/hhi/hero-photos/city/Atlanta.jpg" alt="atlanta"/>
            <List>
            <div className="card">
                <CityList cities={props.cities}
                img src="img_avatar.png" alt="Avatar"
                />
                
                <li>New York </li>
                
                <li>Boston</li>
                <li>London</li>
                <li>San Diego</li>
                </div>
            </List>
               
        </div>
    );
};

export default componentName;