import React from 'react';
import MainInfoReferals from '../layouts/MainInfoReferals';
import ReferalProgress from '../layouts/ReferalProgress';
import TableReferalSummary from '../layouts/TableReferalSummary';
import TableReferals from '../layouts/TableReferals';

function Invite(props) {
    return (
        <div className="tc-wrapper">
        <div className="container">

          <MainInfoReferals />

          <ReferalProgress />
          
          <div className="tc-tables tc-tables-referal">
            
            <TableReferalSummary />

            <TableReferals />
          </div>
        </div>
      </div>
      /* test */
    );
}

export default Invite;