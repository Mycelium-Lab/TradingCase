import React from 'react';
import unixToNormal from '../timeConvert.js';
import { commissionToStaked } from '../Utils.js';
import { useSelector } from 'react-redux';

function TableReferals(props) {

  const data = useSelector(state => state.info.user);
  var commissionHistory = [];

  if (Object.keys(data).length !== 0) {
    commissionHistory =data.commissionHistory;
  //console.log(commissionHistory);
  }

  return (
      <div className="tc-info-block">
        <span>Referrals</span>
        <table className="tg tg-scrollable-table">
          <thead>
            <tr>
              <th className="tg-0pky">Date</th>
              <th className="tg-0lax tc-tables-referal-middle-column">Tokens</th>
              <th className="tg-0lax tc-tables-referal-middle-column">Bonuses</th>
              <th className="tg-0lax tc-tables-referal-middle-column">User</th>
              <th className="tg-0lax tc-tables-referal-last-column">Level</th>
            </tr>
          </thead>
          <tbody>
          { commissionHistory.length > 0 && [...commissionHistory].sort((a, b) => Number(b.timestamp) - Number(a.timestamp)).map(({timestamp, txAmount, user, level}, index) => (
            <tr key={index}>
              <td className="tg-0lax"> { 
                unixToNormal(timestamp)[0]
              } <br /> {
                unixToNormal(timestamp)[1]
              } </td>
              <td className="tg-0lax">{`${commissionToStaked(txAmount, level)} CASE`}</td>
              <td className="tg-0lax">{`${parseFloat(txAmount).toFixed(2)} CASE`}</td>
              <td className="tg-0lax">{user.id}</td>
              <td className="tg-0lax tc-tables-referal-last-column">{level}</td>
            </tr>
            ))
          }                          
          </tbody>
        </table>
      </div>
  );
}
export default TableReferals;