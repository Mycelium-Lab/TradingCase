import React from 'react';

function TableRecentActivity(props) {
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
              <tr>
                <td className="tg-0lax">1</td>
                <td className="tg-0lax">2</td>
                <td className="tg-0lax">3</td>
              </tr>
              <tr>
                <td className="tg-0lax">1</td>
                <td className="tg-0lax">2</td>
                <td className="tg-0lax">3</td>
              </tr>
            </tbody>
          </table>
        </div>
  );
}
export default TableRecentActivity;