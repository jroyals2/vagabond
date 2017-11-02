import React from 'react';
import { Link } from 'react-router-dom'
import ConfirmLink from 'react-confirm-dialog';


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
                        <Link to={`/cities/${props.cityId}/posts/${post.id}`}>{post.title}</Link>
                        <button>Edit</button>
                        <ConfirmLink action={askToDelete} actionArgs={{a:cityId, b:postId}}>
                        <button>Delete</button>
                        </ConfirmLink>
                    </div>
                    
                )
            })}
        </div>
    );
};

export default PostList;