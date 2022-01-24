import logo from './logo.svg';
import './App.css';
import WithoutJsx from './WithoutJsx';
import WithJsx from './WithJsx';
import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from './Exercise4';

const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div className="App">
      <WithoutJsx/>
      <WithJsx/>
      <h3>{user.first_name}</h3>
      <h3>{user.last_name}</h3>
      <UserFavoriteColors animals={user.fav_animals}/>
      <Exercise4/>
    </div>
  );
}

export default App;
