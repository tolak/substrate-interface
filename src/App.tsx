import React, { useCallback, useState } from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom'
import logo from './logo.gif';
import './App.css';

const App: React.FC = () => {

  const [mobileMenu, setMobileMenu] = useState(false)

  const handlePresentMobileMenu = useCallback(() => {
    // do nothing
  }, [setMobileMenu])

  const handleDismissMobileMenu = useCallback(() => {
    // do nothing
  }, [setMobileMenu])
  
  return (
    <HashRouter>
    {/* <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
    <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} /> */}
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Route>
      <Route path="/app">
        <h1>app page</h1>
      </Route>
      <Route path="/faq">
        <h1>faq page</h1>
      </Route>
    </Switch>
    </HashRouter>
    );
}

export default App;
