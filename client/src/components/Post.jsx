import axios from 'axios'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import moment from 'moment'


const InputWrapper = styled.input`
border-radius: 10px;
font-family: Arial;
color: black;
font-size: 20px;

`

const Button = styled.button`
border-radius: 11px;
  font-family: Arial;
  background-color: silver;
  color: #ffffff;
  font-size: 20px;
  
  text-decoration: none;
  a:visited {
    color: black;
}

a:link {
    color: black;
}
a:hover {
    font-size: 30px;
    color: blue;
    text-decoration: none;
}

`


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
      const editPost = { ...this.state.post }
      editPost[attribute] = event.target.value
      console.log("this fucking works horeeee")
      this.setState({ post: editPost })
  }

  updatePost = async (event) => {
      event.preventDefault()
      const {cityId, postId} = this.props.match.params
      const clonedPost = { ...this.state.post }
      console.log(clonedPost)
      const response = await axios.patch(`/cities/${cityId}/posts/${postId}`, {
          post: clonedPost
      })
      
      this.setState({ post: response.data })
      this.setState({ editMode: false })
  }

  formatedTime = (time) =>  {
  const cdate = (new Date(time)).toString()
return cdate
}

  render() {
        if(this.state.editMode){
            return (
                <div className="container">
                    <br/>
                    <div className="jumbotron">
                        <form onSubmit={this.updatePost}>
                        Title: <input type="text" value={this.state.post.title} onChange={this.handleChange} name="title" />
                        <br/>
                        <textarea onChange={this.handleChange} name="content"value={this.state.post.content} rows="10" cols="50"></textarea>
                        <br/>
                        <input type="submit"/><br/><br/>
                        </form>
                        <span><em>Created: {this.formatedTime(this.state.post.created_at)} - Updated: {this.state.post.updated_at}</em></span>
                        <Button>
                       <Link to ={`/cities/${this.props.match.params.cityId}`}> Back to the City!</Link>
                        </Button>
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
                        <br/><InputWrapper type="button" value="Edit Post" onClick={()=>{this.setState({editMode : true})}}/><br/><br/>
                        <span><em>Created: {this.state.post.created_at} - Updated: {this.state.post.updated_at}</em></span>
                        <Button>
                        <Link to ={`/cities/${this.props.match.params.cityId}`}>Back to the City</Link>
                        </Button>
                    </div>
                    <br/>
                   
                </div>
            );
        }
    }
}

export default Post;