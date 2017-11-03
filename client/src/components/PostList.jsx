import React from 'react';
import { Link } from 'react-router-dom'
import ConfirmLink from 'react-confirm-dialog';
import styled from 'styled-components'

const ToggleButton = styled.button`
background: grey;
margin: 10px;
`

const Text = styled.div`
color: silver;
text-decoration: none;
font-size: 25px;

a:visited {
    color: silver;
}

a:link {
    color: silver;
}
a:hover {
    font-size: 30px;
    color: blue;
    text-decoration: none;
}
`
// This is the npm package that we brought in 
//https://www.npmjs.com/package/react-confirm-dialog
// This handles the confirm delete action

const PostList = (props) => {
    return (
        <div>
            {props.posts.map((post) => {
                const cityId = props.cityId
                const postId = post.id
                function askToDelete(args) { 
                    props.deletePost(args.b, args.a)
                }

                return(
                    <div>
                        <Text>
                        <Link to={`/cities/${props.cityId}/posts/${post.id}`}>{post.title}</Link>
                        </Text>
                        <ConfirmLink action={askToDelete} actionArgs={{a:cityId, b:postId}}>
                        <ToggleButton>Delete</ToggleButton>
                        </ConfirmLink>
                    </div>
                    
                )
            })}
        </div>
    );
};

export default PostList;