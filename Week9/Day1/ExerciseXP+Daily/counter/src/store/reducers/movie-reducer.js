const INITIAL_STATE = {
   movies: 
   [
         {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
         {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
         {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
         {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
         {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
   ], 
   selectedMovie: ''  
};

const movieReducer = (state = INITIAL_STATE, action) => {

   switch(action.type) {
      case 'GET_MOVIE': return {...state, selectedMovie: state.movies.filter(el => el.title == action.payload)}
      default: return state;
   }
}

export default movieReducer;