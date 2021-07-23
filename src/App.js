import React from 'react';
import Header from './layouts/Header';
import MainInfo from './layouts/MainInfo';
import TableRecentActivity from './layouts/TableRecentActivity';
import TableActiveStakes from './layouts/TableActiveStakes';
import './App.css';
import './style.css';
import './helvetica/stylesheet.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="tc-wrapper">
          <div className="container">

              <MainInfo />

              <div className="tc-tables">

                  <TableActiveStakes />

                  <TableRecentActivity />

              </div>
          </div>
      </div>
      <script type="text/javascript">
        Waves.attach('.button', ['waves-button', 'waves-float']);
        Waves.init();
      </script> 
    </div>
    
  );
}

export default App;
