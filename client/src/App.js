// App.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './components/About/about';
import Admin from './components/Admin/admin';
import Gallery from './components/Gallery/gallery';
import Home from './components/Home/home';
import Navbar from './components/NavBar/Navbar';
import Login from './components/User/login';
import User from './components/User/user';
import UserDetails from './components/User/userDetails';
import userDetail from './components/userDetails/usersDetails';
import { AuthProvider, Layout } from './components/User/authContact';
import Welcome from './components/Welcome/Welcome';
import ViewBooking from './components/ViewBookings/viewBooking';
import Pay from './components/Pay/pay';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/admin" component={Admin} />
          <Route exact path="/user-details" component={UserDetails} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/user" component={User} />
          <Route exact path="/login" component={Login} />
          {sessionStorage.token === null || sessionStorage.token === undefined ? <></> :
            <Switch>
              <Route path="/welcome" component={Welcome} />
            </Switch>
          }
          <Route exact path='/usersDetails' component={userDetail} />
          <Route path="/viewBooking" component={ViewBooking} />
          <Route path="/pay" component={Pay} />


        </Switch>
      </div>y
    </Router>
  );
}

export default App;
