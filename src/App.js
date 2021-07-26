import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Header from './layouts/Header';
import Staiking from './components/StaikingPage';
import Invite from './components/InvitePage';

import './App.css';
import './style.css';
import './helvetica/stylesheet.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route path="/staiking" component={Staiking} exact />
          <Route path="/invite" component={Invite} />
          <Route path="/trade" component={Trade} />
          <Route component={Error} />
      </Switch>

      <script type="text/javascript">
        Waves.attach('.button', ['waves-button', 'waves-float']);
        Waves.init();
      </script> 
    </div>
    
  );
}

export default App;
