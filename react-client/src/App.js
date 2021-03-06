import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Views/Home';
import Food from './Components/Views/Food';
import Booking from './Components/Views/Booking';
import Contact from './Components/Views/Contact';
import Admin from './Components/Views/Admin';
import logo from './images/logo.png';


class App extends Component {

  constructor() {
    super();
    this.state = {
      menu: [
        {
          name: "Home",
          key: "home",
          route: "/home",
          component: Home
        },
        {
          name: "Contact",
          key: "contact",
          route: "/contact",
          component: Contact
        },
        {
          name: "Food",
          key: "food",
          route: "/food",
          component: Food
        },
        {
          name: "Booking",
          key: "booking",
          route: "/booking",
          component: Booking
        },
        {
          name: "Admin",
          key: "admin",
          route: "/admin",
          component: Admin
        }
      ]
    }
  }


  homeView = () => {
    fetch('/home')
    .then(res => res.json())
    .then(home =>  {
      this.setState(home)
    });
  }


  contactView = () => {
    fetch('/contact')
    .then(res => res.json())
    .then(contact =>  {
      this.setState(contact)
    });
  }


  render() {
    
    let routes = this.state.menu.map((route, index) => {
      return (
        <Route key={ route.key } path={ route.route } component={ route.component } />
      )
    })
    
    return (
      <div className="App">
        <Header menu={ this.state.menu } logo={ logo } />
        { routes }
      </div>
    );
  }
}

export default App;
