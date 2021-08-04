import React from 'react';

function getDays(value) {
  var today = new Date(); // сегодня
  var ends = new Date(today.getFullYear(), today.getMonth(), today.getDate()+value);
  console.log(ends);
  return Math.floor((ends - today) / (1000*60*60*24));
}


function TableActiveStakes(props) {
  const { activeStakes } = props;

  return (
    <div className="tc-info-block">
      <span>Active Stakes</span>
      <table className="tg tg-scrollable-table" style={{textAlign:"center"}}>
        <thead>
          <tr>
            <th className="tg-0pky">Staked Case</th>
            <th className="tg-0lax">Apy</th>
            <th className="tg-0lax">Lock - Up Left</th>
            <th className="tg-0lax">Claimable Rewards</th>
            <th className="tg-0lax">Total Rewards</th>
            <th className="tg-0lax">Total Case</th>
            <th className="tg-0lax tc-tables-referal-last-column">Actions</th>
          </tr>
        </thead>
        <tbody>
        {activeStakes.map(({stakeAmount, apy, stakeTimeInDays, withdrawnInterestAmount, interestAmount}, index) => (
          <tr key={index}>
            <td className="tg-0pky">{stakeAmount}</td>
            <td className="tg-0lax">{(100*parseFloat(apy)).toFixed(2)}</td>
            <td className="tg-0lax">{getDays(parseInt(stakeTimeInDays))}</td>
            <td className="tg-0lax" style={{width:20}}>{withdrawnInterestAmount}</td>
            <td className="tg-0lax">{parseFloat(interestAmount).toFixed(2)}</td>
            <td className="tg-0lax">{(parseFloat(interestAmount) + parseFloat(stakeAmount)).toFixed(2)}</td>
            <td className="tg-0lax tc-tables-referal-last-column" style={{width:65}}><button className="button referal-button">Claim Rewards</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableActiveStakes;