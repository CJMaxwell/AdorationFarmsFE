import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';
import Process from './components/Process';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <section>
        <Navbar />
        <Home />
        <Process />
        <main className="container px-24">
          <Footer />
        </main>
        <BottomFooter />
      </section>
    </ThemeProvider>

  );
}

export default App;
