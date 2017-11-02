import React, { Component } from 'react';
import axios from 'axios'
import PostList from './PostList'
import NewPostForm from './NewPostForm'
import EditPost from './EditPost'
import styled from 'styled-components'

const Picture = styled.div`
`

class City extends Component {
    state = {
        city: {},
        posts: []
    }
    async componentWillMount() {
        try {
            const cityId = this.props.match.params.cityId
            const response = await axios.get(`/cities/${cityId}`)
            this.setState({ city: response.data })
        } catch (error) {
            console.log(error)
        }
        try {
            const cityId = this.props.match.params.cityId
            const response = await axios.get(`/cities/${cityId}/posts`)
            this.setState({ posts: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    createNewPost = async (newPost) => {
        const cityId = this.props.match.params.cityId
        const response = await axios.post(`/cities/${cityId}/posts`, {
            "post": newPost

        })
        console.log(response.data)
        this.setState({ posts: response.data })
    }
    deletePost = async (postId, cityId) => {
        console.log(cityId, postId)
        const response = await axios.delete(`/cities/${cityId}/posts/${postId}`)
        await this.setState({ posts: response.data })

    }

    render() {
        return (
            <div>
                
                <Picture>
                <h1>{this.state.city.name}</h1>
                <h3>In the Baller state of {this.state.city.location}</h3>
                <img src={this.state.city.picture} alt="" />
                <PostList
                    cityId={this.props.match.params.cityId}
                    posts={this.state.posts}
                    deletePost={this.deletePost}
                />
                <NewPostForm
                    createNewPost={this.createNewPost}
                />
                </Picture>
            </div>
        );
    }
}

export default City;