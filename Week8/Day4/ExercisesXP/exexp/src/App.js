
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from './Components/HomeScreen';
import { ProfileScreen } from './Components/ProfileScreen';
import { ShopScreen } from './Components/ShopScreen';
import { Layout } from './Components/Layout';
import { PostLists } from './Components/PostLists';
import { Example1 } from './Components/Example1';
import { Example2 } from './Components/Example2';
import { Example3 } from './Components/Example3';

function App() {
  const getData = async() => {
    await fetch('https://webhook.site/8be49d63-f51a-4ae1-a0e9-21ca5d0b381c', {   
      // mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      })
    }).then(res => console.log(res))
  }
  return (
    <div className="App">
      <button onClick={getData}>SHOW DATA IN CONSOLE</button>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomeScreen/>}/>
          <Route path="profile" element={<ProfileScreen/>}/>
          <Route path="/shop" element={<ShopScreen/>}/>
          <Route path="/posts" element={<PostLists/>}/>
          <Route path="/exmaple1" element={<Example1/>}/>
          <Route path="/exmaple2" element={<Example2/>}/>
          <Route path="/exmaple3" element={<Example3/>}/>
          <Route path="*" element={<HomeScreen/>}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
