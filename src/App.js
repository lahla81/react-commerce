import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './assets/bootstrap.css';
import './assets/fonts/cairo/cairo.css';
import './App.css';
import Navbar from './components/navbar/navbar.component'
import shopPage from './pages/shop/shop.component'
import SignInAndSignOut from './components/sign-in-and-sign-out/sign-in-and-sign-out.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUsre: null
    };
  }
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
      }  
      this.setState({ currentUser: userAuth })
    })
  }

  render(){
    return (
      <div>
        <Navbar currentUser ={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={shopPage} />
          <Route path='/signin' component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;