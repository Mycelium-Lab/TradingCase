import React from 'react';
import Header from './layouts/Header';
import Staiking from './components/StaikingPage.jsx';
import Invite from './components/InvitePage.jsx';

import './App.css';
import './style.css';
import './helvetica/stylesheet.css';

function App() {
  const [page, setPage] = React.useState('staking');

  function handleChange(page){
    setPage(page);
  }
  return (
    <div className="App">
      <Header handleChange={handleChange} />
      { page == 'staking' &&
        <Staiking />
      }
      { page == 'invite' && 
          <Invite />
      }
      <script type="text/javascript">
        Waves.attach('.button', ['waves-button', 'waves-float']);
        Waves.init();
      </script> 
    </div>
    
  );
}

export default App;
