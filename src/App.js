import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './assets/bootstrap.css';
import './assets/fonts/cairo/cairo.css';
import './App.css';
import Navbar from './components/navbar/navbar.component'
import shopPage from './components/shop/shop.component'
import SignInAndSignOut from './components/sign-in-and-sign-out/sign-in-and-sign-out.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        })
      }  
      setCurrentUser(userAuth)
    })
  }

  render(){
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={shopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>): (<SignInAndSignOut/>)} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);