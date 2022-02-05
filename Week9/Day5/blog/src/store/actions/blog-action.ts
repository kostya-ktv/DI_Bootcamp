import { DELETE_POST } from "../../types/constants";

export const deletePost = (id: number) => ({
   type: DELETE_POST,
   payload: id
})