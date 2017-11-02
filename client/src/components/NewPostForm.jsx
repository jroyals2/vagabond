import React, { Component } from 'react';


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
                <form onSubmit={this.handleSubmit} >
                    <div>
                    <label htmlFor= "title">  Post Title</label>
                    <input onChange = {this.handleChange} value = {this.state.newPost.title} type = "text" name = "title"/>
                    </div>
                    
                    <div>
                    <label htmlFor= "content">  Post Ass</label>
                    <input onChange = {this.handleChange} value = {this.state.newPost.content} type = "text" name = "content"/>
                    </div>
                    <button type="submit">Add A Post </button>
                </form>
            </div>
        );
    }
}

export default NewPostForm;