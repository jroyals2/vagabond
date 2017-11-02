import React, { Component } from 'react';
import axios from 'axios'
import PostList from './PostList'
import NewPostForm from  './NewPostForm'

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

      createNewPost = async (newPost) => {
        const cityId = this.props.match.params.cityId
        const response = await axios.post(`/cities/${cityId}/posts`, {
            "post": newPost

        })
        console.log(response.data)
        this.setState({posts: response.data})
      }
      


    //   createNewPost = async(postId) => {
    //       const cityId = this.props.match.params.cityId
    //       const id = postId 
    //       const clonedCity = {...this.state.city}
    //       cons 
    //   }
    render() {
        return (
            <div>
                <h1>{this.state.city.name}</h1>
                <h3>In the Baller state of {this.state.city.location}</h3>
                <img src={this.state.city.picture} alt=""/>
                <PostList 
                cityId={this.props.match.params.cityId} 
                posts={this.state.posts}
                />
                <NewPostForm
                createNewPost={this.createNewPost}
                />

            </div>
        );
    }
}

export default City;