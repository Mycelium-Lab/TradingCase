import React from 'react';
import MainInfoReferals from '../layouts/MainInfoReferals';
import ReferalProgress from '../layouts/ReferalProgress';
import TableReferalSummary from '../layouts/TableReferalSummary';
import TableReferals from '../layouts/TableReferals';

function Invite(props) {
    const {data, stakedCase, wallet} = props;
    const commissionHistory = data.commissionHistory;
    const percents = ["8", "5", "2.5", "1.5", "1.0", "1.0", "0.5", "0.5" ];
    let tabArr = [];
    const rank = parseInt(data.rank);

    if (Object.keys(data).length === 0) return(<div>Loading..</div>);
    else console.log(commissionHistory);

      for (var i=0; i<8; i++) {
        let td = {};
        td.lvl = (i+1).toString();
        td.counts = (data.referLevelUserCounts)[i];
        td.commission = percents[i];
        td.case = parseFloat(data.referLevelCaseCommissions[i]);
        tabArr.push(td);
      }

    return (
        <div className="tc-wrapper">
        <div className="container">

          <MainInfoReferals stakedCase={stakedCase} stakersCommission={parseFloat(data.totalCaseCommissionReceived).toFixed(2)}/>

          <ReferalProgress wallet={wallet}/>
          
          <div className="tc-tables tc-tables-referal">
            
            <TableReferalSummary data={tabArr} stakedCase={stakedCase}/>

            <TableReferals commissionHistory={commissionHistory}/>
          </div>
        </div>
      </div>
      /* test */
    );
}

export default Invite;