import React, { useState, useRef } from 'react'
import './assets/styles/global.scss';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks'
import AppFooter from './cmps/AppFooter';
import AppHeader from './cmps/AppHeader';
import MainApp from './pages/MainApp';
import { Burger, Menu } from './cmps';

function App() {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <AppHeader />
        <div className="mobile-menu" ref={node}>
          <Menu open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
        </div>
        <MainApp />
        <AppFooter />
      </>
    </ThemeProvider>
  );
}

export default App;
