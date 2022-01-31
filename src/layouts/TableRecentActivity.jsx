import React from 'react';
import unixToNormal from '../timeConvert.js';
import { typeWithSpaces } from '../constants.js'
import { useSelector } from 'react-redux';

function TableRecentActivity(props) {

  var recentActivity = useSelector(state => state.info.user.stakeActivityHistory);
  if (recentActivity === undefined) recentActivity = [];

  return (
  
        <div className="tc-info-block">
          <span>Recent activity</span>
          <table className="tg tg-recent-activity">
            <thead>
              <tr>
                <th className="tg-0pky">Date</th>
                <th className="tg-0lax">Details</th>
                <th className="tg-0lax">Amount</th>
              </tr>
            </thead>
            <tbody>
            { recentActivity.length > 0 && [...recentActivity].sort((a, b) => Number(b.timestamp) - Number(a.timestamp)).map(({timestamp, type, txHash, txAmount}, index) => (
              <tr key={index}>
                <td className="tg-0lax">{unixToNormal(timestamp)[0]}<br/>{unixToNormal(timestamp)[1]}</td>
                <td className="tg-0lax">{typeWithSpaces(type)}<br/>
                  <a href={`https://bscscan.com/tx/${txHash}`} style={{color:"#eabc4e"}}>
                    Tx details&nbsp;
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 16 16" fill="none">
                      <path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z" fill="#eabc4e"></path>
                      <path d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z" fill="#eabc4e"></path>
                    </svg>
                  </a>
                </td>
                <td className="tg-0lax">{`${parseFloat(txAmount).toFixed(2)} CASE`}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
  );
}
export default TableRecentActivity;