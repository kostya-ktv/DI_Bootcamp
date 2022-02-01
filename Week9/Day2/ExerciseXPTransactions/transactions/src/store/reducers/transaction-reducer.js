
const INITIAL_STATE = {
   transactionsList : JSON.parse(localStorage.getItem('transitions')),
   currentTransaction: null
};

const transactionReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {

      case 'INSERT' : {
      
         if(action.payload.id == state.currentTransaction?.id) {
            
           return {...state, transactionsList: [...state.transactionsList].map(el => {
              if(el.id == state.currentTransaction.id) return action.payload;
              return el;
           }), currentTransaction: null};
         }
         return {...state, transactionsList: [...state.transactionsList, action.payload], currentTransaction: null};
      }

      case 'UPDATE' : return {...state, currentTransaction: action.payload};

      case 'DELETE' : {
         return {...state, transactionsList: [...state.transactionsList].filter(el => {
            return el.id != action.payload.id
         }), currentTransaction: null};
      }
      case 'UPDATE-INDEX' : {
         return state;
      }
      default: return state;
   }
   
   
}
export default transactionReducer;