import React, { useState } from "react";
import { selected_post } from "../store/reducers/blog-reducer";
import { styles } from "../styles";
import { blogStateType } from "../types/types";
import { connect } from "react-redux";
import { deletePost } from "../store/actions/blog-action";
import { Navigate, NavLink } from "react-router-dom";

interface iPageProps {
   deletePostHandler: Function
}
const PostPage: React.FC<iPageProps> = ({deletePostHandler}):any => {
   const [post, setPost] = useState<blogStateType | null>(selected_post);
   
   if(post) {
      return (
      <div style={{textAlign: 'center'}}>
         <h1>{post.title}</h1>
         <h3>{post.details}</h3>
         <button 
            style={styles.deleteButton} 
            onClick={ post => {
               deletePostHandler(post);
               setPost(null)
               }}>
               
                  DELETE POST
            
            </button>
                
      </div>
   )
      } else {
         return(
            <Navigate to="/"/>
         )
      }
}
const mapDispatchToProps = (dispatch: Function) => {
   return {
      deletePostHandler: (el: blogStateType) => dispatch(deletePost(el))
   }
 }
export default connect(null, mapDispatchToProps)(PostPage);