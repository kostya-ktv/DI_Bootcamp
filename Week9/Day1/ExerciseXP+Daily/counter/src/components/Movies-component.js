import React from "react";
import { connect } from "react-redux";
import { getMovie } from "../store/actions/movies-action";
import MovieDetailsComponent from "./MovieDetails-component";

const MoviesComponent = props => {

   return(
      
      <div style={moviesStyle.main}>
            <div style={moviesStyle.movies}>
            <h1>MOVIES</h1>
            
            {props.movies.map(el=>{
               return(
                  <div>
                  <p style={moviesStyle.p}>
                     {el.title}
                     <button onClick={()=>{props.getDetails(el.title)}}>Details</button></p>               
                  </div>            
               )                    
            })}

          </div>
            <MovieDetailsComponent/>
      </div>
      
   )
}
const mapStateToProps = state => {
   return {
      movies: state.movies.movies
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      getDetails: (val)=> dispatch(getMovie(val))
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
export default connect(mapStateToProps, mapDispatchToProps)(MoviesComponent);