import React from 'react';

function TableActiveStakes(props) {
  const { activeStakes } = props;
  return (
    <div className="tc-info-block">
      <span>Active Stakes</span>
      <table className="tg tg-scrollable-table">
        <thead>
          <tr>
            <th className="tg-0pky">Staked Case</th>
            <th className="tg-0lax">Apy</th>
            <th className="tg-0lax">Lock - Up Left</th>
            <th className="tg-0lax">Claimable Rewards</th>
            <th className="tg-0lax">Total Rewards</th>
            <th className="tg-0lax">Total Case</th>
            <th className="tg-0lax">Actions</th>
          </tr>
        </thead>
        <tbody>
        {activeStakes.map((row) => (
          <tr>
            <td className="tg-0lax">{row.stakeAmount}</td>
            <td className="tg-0lax">{(100*parseFloat(row.apy)).toFixed(2)}</td>
            <td className="tg-0lax">999</td>
            <td className="tg-0lax">{row.withdrawnInterestAmount}</td>
            <td className="tg-0lax">{parseFloat(row.interestAmount).toFixed(2)}</td>
            <td className="tg-0lax">{(parseFloat(row.interestAmount) + parseFloat(row.stakeAmount)).toFixed(2)}</td>
            <td className="tg-0lax"><button>Claim Rewards</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableActiveStakes;