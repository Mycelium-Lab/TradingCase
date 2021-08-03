import React from 'react';
import { levelCost } from '../constants';

function TableReferalSummary(props) {
    const { data, stakedCase } = props;
    console.table(data);
    const [tableData, setTableData] = React.useState([]);

    return(
        <div className="tc-info-block">
          <span>Referal summary  
            <svg className="invite-info" width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.95 3.85H6.05V2.75H4.95V3.85ZM5.5 9.9C3.0745 9.9 1.1 7.9255 1.1 5.5C1.1 3.0745 3.0745 1.1 5.5 1.1C7.9255 1.1 9.9 3.0745 9.9 5.5C9.9 7.9255 7.9255 9.9 5.5 9.9ZM5.5 0C4.77773 0 4.06253 0.142262 3.39524 0.418663C2.72795 0.695063 2.12163 1.10019 1.61091 1.61091C0.579463 2.64236 0 4.04131 0 5.5C0 6.95869 0.579463 8.35764 1.61091 9.38909C2.12163 9.89981 2.72795 10.3049 3.39524 10.5813C4.06253 10.8577 4.77773 11 5.5 11C6.95869 11 8.35764 10.4205 9.38909 9.38909C10.4205 8.35764 11 6.95869 11 5.5C11 4.77773 10.8577 4.06253 10.5813 3.39524C10.3049 2.72795 9.89981 2.12163 9.38909 1.61091C8.87836 1.10019 8.27205 0.695063 7.60476 0.418663C6.93747 0.142262 6.22227 0 5.5 0ZM4.95 8.25H6.05V4.95H4.95V8.25Z" fill="#8687A7" />
            </svg>
          </span>
          <span className="tc-tables-referal-activate-info">To activate all 8 levels you need to stake 10.000 CASE token  
            <svg className="invite-info" width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.95 3.85H6.05V2.75H4.95V3.85ZM5.5 9.9C3.0745 9.9 1.1 7.9255 1.1 5.5C1.1 3.0745 3.0745 1.1 5.5 1.1C7.9255 1.1 9.9 3.0745 9.9 5.5C9.9 7.9255 7.9255 9.9 5.5 9.9ZM5.5 0C4.77773 0 4.06253 0.142262 3.39524 0.418663C2.72795 0.695063 2.12163 1.10019 1.61091 1.61091C0.579463 2.64236 0 4.04131 0 5.5C0 6.95869 0.579463 8.35764 1.61091 9.38909C2.12163 9.89981 2.72795 10.3049 3.39524 10.5813C4.06253 10.8577 4.77773 11 5.5 11C6.95869 11 8.35764 10.4205 9.38909 9.38909C10.4205 8.35764 11 6.95869 11 5.5C11 4.77773 10.8577 4.06253 10.5813 3.39524C10.3049 2.72795 9.89981 2.12163 9.38909 1.61091C8.87836 1.10019 8.27205 0.695063 7.60476 0.418663C6.93747 0.142262 6.22227 0 5.5 0ZM4.95 8.25H6.05V4.95H4.95V8.25Z" fill="#8687A7" />
            </svg>
          </span>
          <table className="tg tg-scrollable-table">
            <thead>
              <tr>
                <th className="tg-0pky">Level</th>
                <th className="tg-0lax tc-tables-referal-middle-column">Referals</th>
                <th className="tg-0lax tc-tables-referal-middle-column">Commission %</th>
                <th className="tg-0lax tc-tables-referal-middle-column">Commission (CASE)</th>
                <th className="tg-0lax tc-tables-referal-last-column">Status</th>
              </tr>
            </thead>
            <tbody>
            { data.map((row) => (
              <tr>
                <td className="tg-0lax">{row.lvl}</td>
                <td className="tg-0lax">{row.counts}</td>
                <td className="tg-0lax">{`${row.commission}%`}</td>
                <td className="tg-0lax">{row.case.toFixed(3)}</td>
                { levelCost[parseInt(row.lvl)] <= parseInt(stakedCase) ? (
                  <td className="tg-0lax tc-tables-referal-last-column">
                    <span className="activated">
                      Active
                    </span>
                  </td>) : (
                  <td className="tg-0lax tc-tables-referal-last-column">
                    <button id="activate" className="button referal-button">
                      Activate
                    </button>
                  </td>
                  )
                }
              </tr>
              ))
            }
            </tbody>
          </table>
        </div>
    );
}
export default TableReferalSummary;