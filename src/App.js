import React from 'react';
import Header from './layouts/Header';
import Staiking from './components/StaikingPage.jsx';
import Invite from './components/InvitePage.jsx';
import Stake from './components/Stake.jsx';

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
        <Staiking handleChange={handleChange} />
      }
      { page == 'invite' && 
          <Invite />
      }
      { page == 'stake' &&
          <Stake />
      }
      <script type="text/javascript">
        Waves.attach('.button', ['waves-button', 'waves-float']);
        Waves.init();
      </script> 
    </div>
    
  );
}

export default App;
