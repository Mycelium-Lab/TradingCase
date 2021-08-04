import React from 'react';
import MainInfo from '../layouts/MainInfo';
import TableRecentActivity from '../layouts/TableRecentActivity';
import TableActiveStakes from '../layouts/TableActiveStakes';

function Staiking(props) {
  const { handleChange, avgAPY, lifetimeRewards, totalInterest, activeStakes, recentActivity, totalStaked } = props;
    return (
        <div className="tc-wrapper">
          <div className="container">

              <MainInfo totalStaked={totalStaked} handleChange={handleChange} avgAPY={avgAPY} lifetimeRewards={lifetimeRewards} totalInterest={totalInterest}/>

              <div className="tc-tables tc-tables-referal">

                  <TableActiveStakes activeStakes={activeStakes}/>

                  <TableRecentActivity recentActivity={recentActivity}/>

              </div>
          </div>
      </div>
    );
}

export default Staiking;