import axios from 'axios'
import React, { Component } from 'react';

// t
// this.props.match.params.postId

class Post extends Component {
    state = {
        post:{}
    }
  async componentWillMount() {
    try{
      const cityId = this.props.match.params.cityId
      const postId = this.props.match.params.postId
      const response = await axios.get(`/cities/${cityId}/posts/${postId}`)
      this.setState({post: response.data})
    }catch(error) {
      console.log(error)
    } 
  }
    render() {
        return (
            <div className="container">
                <br/>
                <div className="jumbotron">
                    <h1 className="display-3">{this.state.post.title}</h1>
                    <p className="lead">{this.state.post.content}</p>
                    <span><em>Created: {this.state.post.created_at} - Updated: {this.state.post.updated_at}</em></span>
                </div>
                <br/>
            </div>
        );
    }
}

export default Post;