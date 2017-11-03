import React, { Component } from 'react';
import axios from 'axios'
import PostList from './PostList'
import NewPostForm from './NewPostForm'
import EditPost from './EditPost'
import styled from 'styled-components'

const Picture = styled.div`



`
const PageWrapper = styled.div`
color: white;

`

const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`
const ToggleButton = styled.button`
background: grey;

`

class City extends Component {
    state = {
        city: {},
        posts: [],
        showNewForm: false
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

    toggleForm = () => {
        this.setState({showNewForm: !this.state.showNewForm})
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
            <PageWrapper>
                <Wrapper>
                    <div>
                <h2>{this.state.city.name}, {this.state.city.location}</h2>
                </div>
               
                <div>
                {this.state.showNewForm ?  <NewPostForm createNewPost={this.createNewPost}/>: <ToggleButton onClick={this.toggleForm}>Don't see your post???</ToggleButton>}
               
                {this.state.showNewForm ? <ToggleButton onClick={this.toggleForm}>Close the form</ToggleButton> : ''}
                </div>
                </Wrapper>
                <Picture>
                <img className="cityPicture" src={this.state.city.picture} alt="" />
                </Picture>
                <PostList
                    cityId={this.props.match.params.cityId}
                    posts={this.state.posts}
                    deletePost={this.deletePost}
                />
                
                
            </PageWrapper>
        );
    }
}

export default City;