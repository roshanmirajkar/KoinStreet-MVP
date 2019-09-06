import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PostDetails from './components/posts/PostDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Market from './components/Markets/Market'
import News from './components/News/News'
import Portfolio from './components/portfolio/Portfolio'

//importing coinbase component breaks

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={News} />
            <Route path='/posts/:id' component={PostDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/market' component={Market}/>
            <Route path='/news' component={News}/>
            <Route path='/portfolio' component={Portfolio}/>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
