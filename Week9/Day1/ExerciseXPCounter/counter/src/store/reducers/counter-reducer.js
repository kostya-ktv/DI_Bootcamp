const INITIAL_STATE = {
   currentValue: 0
}
const counterReducer = (state = INITIAL_STATE, action) => {

   switch(action.type) {
      case 'INCREMENT':
         return {...state, currentValue: action.payload}
      case 'DECREMENT':
         return {...state, currentValue: action.payload}
         default: return state;
   }
}

export default counterReducer;