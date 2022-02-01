const INITIAL_STATE = {
   robots: null,
   filtered: null
}

export const robotReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case 'GET_ROBOTS': return {...state, robots: action.payload, filtered: action.payload}
      case 'FILTER': return {...state, filtered: state.robots.filter(el => el.name.toLowerCase().includes(action.payload.toLowerCase()))}
      default: return state;
   }
}

