import React from 'react';
import MainInfoReferals from '../layouts/MainInfoReferals';
import ReferalProgress from '../layouts/ReferalProgress';
import TableReferalSummary from '../layouts/TableReferalSummary';
import TableReferals from '../layouts/TableReferals';
import { useSelector } from 'react-redux';

function Invite(props) {
    var {data, stakedCase, canRankUp, handleRankUp, handleChange} = props;
    var commissionHistory = data.commissionHistory;
    var commissionRecieved = data.totalCaseCommissionReceived;
    const percents = ["8", "5", "2.5", "1.5", "1.0", "1.0", "0.5", "0.5" ];
    let tabArr = [];
    var rank = data.rank;
    var csp = parseFloat(data.careerValue*10000000000).toFixed(2);
    const wallet = useSelector(state => state.wallet.address);
    var referLevelUserCounts = data.referLevelUserCounts;

    if (Object.keys(data).length === 0) {
      stakedCase = "0";
      csp = "0.00";
      rank = "0";
      canRankUp = false;
      commissionHistory = [];
      commissionRecieved = '0.00';
      referLevelUserCounts = [0,0,0,0,0,0,0,0];
      
    }
    else {

      console.log(commissionHistory);

      for (var i=0; i<8; i++) {
        let td = {};
        td.lvl = (i+1).toString();
        td.counts = (data.referLevelUserCounts)[i];
        td.commission = percents[i];
        td.cases = parseFloat(data.referLevelCaseCommissions[i]);
        tabArr.push(td);
      }
    }

    return (
        <div className="tc-wrapper">
        <div className="container">

          <MainInfoReferals stakedCase={stakedCase} stakersCommission={parseFloat(commissionRecieved).toFixed(2)}/>

          <ReferalProgress wallet={wallet} csp={csp} rank={rank} canRankUp={canRankUp} handleRankUp={handleRankUp}/>
          
          <div className="tc-tables tc-tables-referal">
            
            <TableReferalSummary data={tabArr} stakedCase={stakedCase} handleChange={handleChange}/>

            <TableReferals commissionHistory={commissionHistory}/>
          </div>
        </div>
      </div>
      /* test */
    );
}

export default Invite;