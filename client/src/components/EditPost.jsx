import React, { Component } from 'react';

class componentName extends Component {
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
                </form>
            </div>
        );
    }
}

export default componentName;