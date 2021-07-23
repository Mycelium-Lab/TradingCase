import React from 'react';

function TableActiveStakes(props) {
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
          <tr>
            <td className="tg-0lax">1</td>
            <td className="tg-0lax">2</td>
            <td className="tg-0lax">3</td>
            <td className="tg-0lax">4</td>
            <td className="tg-0lax">5</td>
            <td className="tg-0lax">6</td>
            <td className="tg-0lax">7</td>
          </tr>
          <tr>
            <td className="tg-0lax">1</td>
            <td className="tg-0lax">2</td>
            <td className="tg-0lax">3</td>
            <td className="tg-0lax">4</td>
            <td className="tg-0lax">5</td>
            <td className="tg-0lax">6</td>
            <td className="tg-0lax">7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default TableActiveStakes;