import React from 'react';
import unixToNormal from '../timeConvert.js';
function TableRecentActivity(props) {

  const { recentActivity } = props;

  return (
  
        <div className="tc-info-block">
          <span>Recent Activity</span>
          <table className="tg tg-recent-activity">
            <thead>
              <tr>
                <th className="tg-0pky">Date</th>
                <th className="tg-0lax">Details</th>
                <th className="tg-0lax">Amount</th>
              </tr>
            </thead>
            <tbody>
            { recentActivity.map(({timestamp, type, txHash, txAmount}, index) => (
              <tr key={index}>
                <td className="tg-0lax">{unixToNormal(timestamp)}</td>
                <td className="tg-0lax">{type}<br/>
                  <a href={`https://kovan.etherscan.io/tx/${txHash}`} style={{color:"#eabc4e"}}>
                    Tx details&nbsp;
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 16 16" fill="none">
                      <path fill="#444444" d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z" fill="#eabc4e"></path>
                      <path fill="#444444" d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z" fill="#eabc4e"></path>
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