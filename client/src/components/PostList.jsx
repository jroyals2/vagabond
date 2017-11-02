import React from 'react';
import { Link } from 'react-router-dom'
import ConfirmLink from 'react-confirm-dialog';

/*
 //   
 let areYouSure = confirm("Are you sure you want to delete?")
 if(areYouSure){
     props.deletePost(postId, cityId)
 } else {
     alert("Undetstandable have a nice day.")
 }

 <button class="btn btn-default" id="btn-confirm">Confirm</button>

<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="mi-modal">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Confirmar</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" id="modal-btn-si">Si</button>
        <button type="button" class="btn btn-primary" id="modal-btn-no">No</button>
      </div>
    </div>
  </div>
</div>

<div class="alert" role="alert" id="result"></div>

 alertSum(args) { 
   alert(args.a + args.b); 
 }
 render() {
   return (
     <ConfirmLink action={this.alertSum} actionArgs={{a:1, b:2}}>
       <a href="#">Click me to trigger the confirm popup</a>
     </ConfirmLink>
   );
 }

 props.deletePost(postId, cityId)

 () => askToDelete(post.id, props.cityId)



*/


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