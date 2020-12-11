import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home/Home';
import Contact from './Contact/Contact';
import About from './About/About';
import Service from './Service/Service';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
      </Switch>
      <Footer /> 
    </>
  );
}

export default App;
