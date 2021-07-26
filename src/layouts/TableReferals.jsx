import React from 'react';

function TableReferals(props) {
    return (
        <div className="tc-info-block">
              <span>Referals</span>
              <table className="tg tg-scrollable-table">
                <thead>
                  <tr>
                    <th className="tg-0pky">Date</th>
                    <th className="tg-0lax tc-tables-referal-middle-column">Tokens</th>
                    <th className="tg-0lax tc-tables-referal-middle-column">Commission</th>
                    <th className="tg-0lax tc-tables-referal-middle-column">User</th>
                    <th className="tg-0lax tc-tables-referal-last-column">Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tg-0lax">1</td>
                    <td className="tg-0lax">0</td>
                    <td className="tg-0lax">0</td>
                    <td className="tg-0lax">0</td>
                    <td className="tg-0lax tc-tables-referal-last-column">0</td>
                  </tr>                          
                </tbody>
              </table>
            </div>
    );
}
export default TableReferals;