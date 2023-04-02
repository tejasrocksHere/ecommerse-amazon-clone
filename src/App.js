import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './Firebase';
// import { Unsubscribe } from '@mui/icons-material';


function App() {

const [{ user }, dispatch] = useStateValue();
useEffect(()=>{
const unsubscribe= auth.onAuthStateChanged((authUser)=>{
  if (authUser) {
    //user logged in
    dispatch({
      type:"SET_USER",
      user:authUser
    })
  }
  else{
    //user loggedd out
    dispatch({
      type:"SET_USER",
      user:null
    })
  }
})

return()=>{
  //cleanrup
  unsubscribe();
}
},[])
console.log(user);
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/home/checkout' element={    <>
          
            <Header/> 
            <Checkout/>
          
          </> } />
          <Route path='/' element={ <Login/>  } />
          {/* <Route path='/checkout' element={<h1>checkout</h1>} /> */}
       
       
          <Route path='/home' element={
          
          <>
          
          <Header/>
          <Home/>
          </>
          
        
        
        } 
          
          
          
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
// 1.45.00