import React from 'react';
import { Link } from 'react-router-dom'

const PostList = (props) => {
    return (
        <div>
            {props.posts.map((post) => {
                return(
                    <div>
                        <Link to={`/cities/${props.cityId}/posts/${post.id}`}>{post.title}</Link>
                        <button>Edit</button>
                        <button onClick={() =>  props.deletePost(post.id, props.cityId)}>Delete</button>
    
                    </div>
                    
                )
            })}
        </div>
    );
};

export default PostList;