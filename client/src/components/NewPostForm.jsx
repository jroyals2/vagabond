import React, { Component } from 'react';
import styled from 'styled-components'

const ToggleButton = styled.button`
background: grey;
`

const Testing = styled.input`
background-color: black;
border: none;
padding: 2px;
margin: 10px;
`

class NewPostForm extends Component {

        state = {
            newPost: {
                title: '',
                content: ''
            },
        }

        handleChange = (event) => {
            const attribute = event.target.name
            const newPost = {...this.state.newPost}
            newPost[attribute] = event.target.value
            console.log("this fucking works horeeee")
            this.setState({newPost})
        }
        handleSubmit = (event) => {
            event.preventDefault()
            this.props.createNewPost(this.state.newPost)
            const emptyForm = {
                title: "",
                content: ""

            }
            this.setState({newPost: emptyForm})
        }


     render() {
        return (
            <div>
                <form  onSubmit={this.handleSubmit} >
                    <div>
                    <label htmlFor= "title">  Post Title</label>
                    <Testing onChange = {this.handleChange} placeholder = "Post Title Here" value = {this.state.newPost.title} type = "text" name = "title"/>
                    </div>
                    
                    <div>
                    <label htmlFor= "content">  Post Content</label>
                    <Testing onChange = {this.handleChange} placeholder = "Content Here" value = {this.state.newPost.content} type = "text" name = "content"/>
                    </div>
                    <ToggleButton type="submit">Add A Post </ToggleButton>
                </form>
            </div>
        );
    }
}

export default NewPostForm;