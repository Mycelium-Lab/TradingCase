import React from 'react';
import MainInfo from '../layouts/MainInfo';
import TableRecentActivity from '../layouts/TableRecentActivity';
import TableActiveStakes from '../layouts/TableActiveStakes';

function Staiking(props) {

  function handleChange(page) {
    window.history.pushState(page, 'Title', `/${page}`);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
      <div className="tc-wrapper">
        <div className="container">
            <MainInfo />
            <div className="tc-tables tc-tables-referal">

                <TableActiveStakes />
                <TableRecentActivity />

            </div>
        </div>
    </div>
  );
}

export default Staiking;