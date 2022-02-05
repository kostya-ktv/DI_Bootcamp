import { IblogAction } from "../../types/interfaces"
import { blogStateType } from "../../types/types"


const INITIAL_STATE: blogStateType = {
   value: null
}

export const blogReducer = (state = INITIAL_STATE, action: IblogAction) => {
   switch(action.type) {
      case 'SOME': return state
      default: return state
   }
}