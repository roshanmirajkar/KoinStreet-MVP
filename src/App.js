import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PostDetails from './components/posts/PostDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreatePost from './components/posts/CreatePost'
import Settings from './components/settings/Settings'
import Container from './components/terminal/Container'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/Post/:id' component={PostDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/terminal' component={Container}/>
            <Route path='/create' component={CreatePost} />
            <Route path='/settings' component={Settings}/>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
