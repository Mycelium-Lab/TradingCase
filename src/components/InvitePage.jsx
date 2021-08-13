import React from 'react';
import MainInfoReferals from '../layouts/MainInfoReferals';
import ReferalProgress from '../layouts/ReferalProgress';
import TableReferalSummary from '../layouts/TableReferalSummary';
import TableReferals from '../layouts/TableReferals';
import { useSelector } from 'react-redux';

function sum(arr, key) {
    return arr.reduce((a, b) => a + (parseFloat(b[key]) || 0), 0);
}

function Invite(props) {
    var { canRankUp} = props;
    const data = useSelector(state => state.info.user);
    const wallet = useSelector(state => state.wallet.address);
    const methods = useSelector(state => state.wallet.methods);

    var commissionHistory = data.commissionHistory;
    var commissionRecieved = data.totalCaseCommissionReceived;
    
    var rank = data.rank;
    var csp = parseFloat(data.careerValue*10000000000).toFixed(2);
    
    var referLevelUserCounts = data.referLevelUserCounts;

    if (Object.keys(data).length === 0) {
      csp = "0.00";
      rank = "0";
      canRankUp = false;
      commissionHistory = [];
      commissionRecieved = '0.00';
      referLevelUserCounts = [0,0,0,0,0,0,0,0];
      
    }

    function handleChange(page) {
      console.log(page);
      window.history.pushState(page, 'Title', `/${page}`);
    }

    async function handleRankUp() {
      console.log("rankUp");
      await methods.instanceRankUp().then(function(result){console.log(result)});
    }

    return (
        <div className="tc-wrapper">
        <div className="container">

          <MainInfoReferals stakersCommission={parseFloat(commissionRecieved).toFixed(2)}/>

          <ReferalProgress wallet={wallet} csp={csp} rank={rank} canRankUp={canRankUp} handleRankUp={handleRankUp}/>
          
          <div className="tc-tables tc-tables-referal">
            
            <TableReferalSummary/>

            <TableReferals/>
          </div>
        </div>
      </div>
      /* test */
    );
}

export default Invite;