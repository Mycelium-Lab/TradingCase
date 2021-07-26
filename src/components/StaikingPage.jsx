import React from 'react';
import MainInfo from '../layouts/MainInfo';
import TableRecentActivity from '../layouts/TableRecentActivity';
import TableActiveStakes from '../layouts/TableActiveStakes';

function Staiking(props) {
    return (
        <div className="tc-wrapper">
          <div className="container">

              <MainInfo />

              <div className="tc-tables">

                  <TableActiveStakes />

                  <TableRecentActivity />

              </div>
          </div>
      </div>
    );
}

export default Staiking;