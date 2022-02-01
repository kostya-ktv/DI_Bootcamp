export const getRobots = () => (dispatch) => {
   fetch(`https://jsonplaceholder.typicode.com/users`, {
     "method": "GET",
   })
   .then(response => response.json())
   .then(data => dispatch({type:'GET_ROBOTS', payload: data}))
   .catch(err => console.error(err));
}

export const filterRobots = (filter) => ({

     type:"FILTER",
     payload: filter
   
 })