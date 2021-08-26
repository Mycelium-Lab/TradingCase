import React, { useEffect } from 'react';
import MainInfo from '../layouts/MainInfo';
import TableRecentActivity from '../layouts/TableRecentActivity';
import TableActiveStakes from '../layouts/TableActiveStakes';

function Staiking(props) {

  const { refetch } = props;

  useEffect(() => {
    refetch();
    console.log('update');
  }, [])
  

  return (
      <div className="tc-wrapper">
        <div className="container">
            <MainInfo />
            <div className="tc-tables tc-tables-referal">

                <TableActiveStakes refetch={refetch}/>
                <TableRecentActivity />

            </div>
        </div>
    </div>
  );
}

export default Staiking;