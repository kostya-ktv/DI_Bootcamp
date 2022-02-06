import { DELETE_POST, SELECT_POST } from "../../types/constants"
import { IblogAction } from "../../types/interfaces"
import { blogStateType } from "../../types/types"


const INITIAL_STATE: Array<blogStateType> = [
   {
      title: 'Lorem ipsum dolor sit amet', 
      details: ' Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Massa tempor nec feugiat nisl pretium fusce id velit. Pellentesque nec nam aliquam sem et tortor consequat.'
   },
   {
      title: 'Facilisi nullam vehicula ipsum a arcu', 
      details: ' Facilisi nullam vehicula ipsum a arcu. Massa tempor nec feugiat nisl pretium fusce id velit. Pellentesque nec nam aliquam sem et tortor consequat.'
   },
   {
      title: ' Pellentesque elit eget gravida cum sociis natoque', 
      details: '  Pellentesque elit eget gravida cum sociis natoque adipiscing. Massa tempor nec feugiat nisl pretium fusce id velit. Pellentesque nec nam aliquam sem et tortor consequat.'
   }
]
export let selected_post: blogStateType = {
   title: null,
   details: null
}

export const blogReducer = (state = INITIAL_STATE, action: IblogAction) => {
   switch(action.type) {
      case SELECT_POST: {
         selected_post = action.payload;
         return state
      }
      case DELETE_POST: return [...state.filter(el => el != selected_post)]
      default: return state
   }
}