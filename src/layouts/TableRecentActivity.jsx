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
            { recentActivity.map((row, index) => (
              <tr key={index}>
                <td className="tg-0lax">{unixToNormal(row.timestamp)}</td>
                <td className="tg-0lax">{row.type}</td>
                <td className="tg-0lax">{row.txAmount}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
  );
}
export default TableRecentActivity;