import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Small components
import NavBar from './small-components/NavBar';
import Footer from './small-components/Footer';
// Page components
import Home from './page-components/Home';
import About from './page-components/About';
import Resume from './page-components/Resume';
import Contact from './page-components/Contact';

function App() {
    return (
    <Router>
        <div className="app">
            <NavBar/>
            <Switch>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/resume">
                    <Resume />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </div>
    </Router>
    );
}

export default App;