import React from 'react';
import { Route, Switch } from 'react-router-dom';
import{ auth } from './firebase/firebase-utils';

import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {
  state={
    currentUser: null
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( userAuth =>{
      this.setState({
        currentUser: userAuth
      })
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return(
  <div>
    <Header currentUser={this.state.currentUser}/>
   <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shop' component={ShopPage} />
    <Route path='/sign' component={SignInAndSignUp} />
   </Switch>
  </div>
)
}
}
export default App;
