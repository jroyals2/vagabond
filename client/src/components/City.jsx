import React, { Component } from 'react';
import axios from 'axios'
import PostList from './PostList'

class City extends Component {
    state = {
        city: {},
        posts: []
    }
    async componentWillMount() {
        try{
          const cityId = this.props.match.params.cityId
          const response = await axios.get(`/cities/${cityId}`)
          this.setState({city: response.data})
        }catch(error) {
          console.log(error)
        } 
        try{
            const cityId = this.props.match.params.cityId
            const response = await axios.get(`/cities/${cityId}/posts`)
            this.setState({posts: response.data})
          }catch(error) {
            console.log(error)
          } 
      } 
    render() {
        return (
            <div>
                <h1>{this.state.city.name}</h1>
                <h3>In the Baller state of {this.state.city.location}</h3>
                <img src={this.state.city.picture} alt=""/>
                <PostList 
                posts={this.state.posts}
                />
            </div>
        );
    }
}

export default City;