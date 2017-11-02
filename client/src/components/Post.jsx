import axios from 'axios'
import React, { Component } from 'react';

// t
// this.props.match.params.postId

class Post extends Component {
    state = {
        post:{},
        editMode: false
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
  handleChange = (event) => {
    const attribute = event.target.name
    const editPost = {...this.state.post}
    editPost[attribute] = event.target.value
    console.log("this fucking works horeeee")
    this.setState({post: editPost})
}

onSubmit = (event) => {
    
    this.setState({editMode : false})
}
    render() {
        if(this.state.editMode){
            return (
                <div className="container">
                    <br/>
                    <div className="jumbotron">
                        <form onSubmit={this.onSubmit}>
                        Title: <input type="text" value={this.state.post.title} onChange={this.handleChange} name="title" />
                        <textarea onChange={this.handleChange} name="content"value={this.state.post.content} rows="10" cols="50"></textarea>
                        <br/>
                        <input type="submit"/><br/><br/>
                        </form>
                        <span><em>Created: {this.state.post.created_at} - Updated: {this.state.post.updated_at}</em></span>
                    </div>
                    <br/>
                </div>
            );    
        }else {
            return (
                <div className="container">
                    <br/>
                    <div className="jumbotron">
                        <h1 className="display-3">{this.state.post.title}</h1>
                        <p className="lead">{this.state.post.content}</p>
                        <br/><input type="button" value="Edit Post" onClick={()=>{this.setState({editMode : true})}}/><br/><br/>
                        <span><em>Created: {this.state.post.created_at} - Updated: {this.state.post.updated_at}</em></span>
                    </div>
                    <br/>
                </div>
            );
        }
    }
}

export default Post;