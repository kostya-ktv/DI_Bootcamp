import React from "react";
import { connect } from "react-redux";
const MovieDetailsComponent = props => {

   return(
      <div style={moviesStyle.main}>
       {props.movies[0] && 
       <div style={moviesStyle.movies}>
          <h1>Details</h1>
        <p>Title: {props.movies[0].title}</p>
        <p>ReleaseDate: {props.movies[0].releaseDate}</p>
        <p>Rating: {props.movies[0].rating}</p>
      </div>}
        
      </div>
   )
}
const mapStateToProps = state => {
   return {
      movies: state.movies.selectedMovie
   }
}
const moviesStyle = {
   movies : {
      backgroundColor: 'tomato', 
      marginTop: 20,
      width: '500px',
      textAlign: 'left',
      padding: 30
   },
   p : {
      display: 'flex', 
      justifyContent: 'space-between'

   },
   main: {
      display: 'flex'
   }
}
export default connect(mapStateToProps)(MovieDetailsComponent);