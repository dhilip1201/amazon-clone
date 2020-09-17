import React,{useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';


const promise  = loadStripe('pk_test_51HQEw7Ci12Lsn25czkEJ3PIFmtLmxSoyF1C6lOgq0FwxDqnyAOYrsYcOJj769G0zxfH7Ct2FmOQQbSwpFemKFuDW00tpBMioTM');

function App() {
  const [{user}, dispatch]=useStateValue();
  useEffect(() => {
    
    const unsubscribe= auth.onAuthStateChanged((authUser) =>{
      console.log("The user is>>", authUser);
     if(authUser){
      dispatch({
        type: "SET_USER",
        user:authUser
      })
     }else{
      dispatch({
        type:"SET_USER",
        user:null
      });
     }
   });
   return()=>{
     unsubscribe();
   }
  }, [])
  console.log("User is null",user)
  return (
    <Router>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/orders">
            <Header />
              <Orders />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
              <Payment />
              </Elements>
            </Route>
            
            <Route path="/">
              <Header />
              <Home />
              
            </Route>
            
          </Switch>
        
        </div>
    </Router>
    
  );
}

export default App;
