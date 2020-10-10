import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import TermsCondition from './components/TermsCondition';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <section>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/terms-conditions">
              <TermsCondition />
            </Route>
          </Switch>
          <main className="container px-24">
            <Footer />
          </main>
        </section>
      </ThemeProvider>
    </Router>
  );
}

export default App;
