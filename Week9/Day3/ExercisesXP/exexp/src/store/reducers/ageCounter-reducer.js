const INITIAL_STATE = {
   age: 20
}

const ageCounterReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case 'AGE_UP': return {...state, age: state.age + 1};
      case 'AGE_DOWN': return {...state, age: state.age - 1};
      default: return state;
   }
}

export default ageCounterReducer;