import { DELETE_POST, SELECT_POST } from "../../types/constants";
import { blogStateType } from "../../types/types";

export const deletePost = (post: blogStateType) => ({
   type: DELETE_POST,
   payload: post
})

export const selectPost = (post: blogStateType) => ({
   type: SELECT_POST,
   payload: post
})