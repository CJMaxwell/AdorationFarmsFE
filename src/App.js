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
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import ScheduledPayment from './components/ScheduledPayment';
import Invest from './components/Invest';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <section>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Home />
              <main className="container px-24">
                <Footer />
              </main>
            </Route>
            <Route path="/about">
              <Navbar />
              <About />
              <main className="container px-24">
                <Footer />
              </main>
            </Route>
            <Route path="/login">
              <Navbar />
              <Login />
              <main className="container px-24">
                <Footer />
              </main>
            </Route>
            <Route path="/signup">
              <Navbar />
              <Signup />
              <main className="container px-24">
                <Footer />
              </main>
            </Route>
            <Route path="/terms-conditions">
              <Navbar />
              <TermsCondition />
              <main className="container px-24">
                <Footer />
              </main>
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/scheduled-payment">
              <ScheduledPayment />
            </Route>
            <Route path="/invest">
              <Invest />
            </Route>
          </Switch>
        </section>
      </ThemeProvider>
    </Router>
  );
}

export default App;
