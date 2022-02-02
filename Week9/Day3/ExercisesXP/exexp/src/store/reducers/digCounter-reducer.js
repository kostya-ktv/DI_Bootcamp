const INITIAL_STATE = {
   value: 1
}

const digitCountReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case 'INCREMENT': return {...state, value: state.value + 1};
      case 'DECREMENT': return {...state, value: state.value - 1};
      default: return state;
   }
}

export default digitCountReducer;