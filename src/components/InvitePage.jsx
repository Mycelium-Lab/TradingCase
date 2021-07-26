import React from 'react';

function Invite(props) {
    return (
        <div className="tc-wrapper">
        <div className="container">
          <div className="tc-main-info tc-invite-main-info">
            <div className="tc-main-info-balance">
              <span>Invite friends and you'll both get bonus</span>
              <span>Know someone curious about crypto? You’ll both receive bonus when they stake СASE tokens or invest on CASEDEFI!.</span>
            </div>
            <div className="break" />
            <div className="tc-info-block">
              <span>Staked - CASE 
                <svg className="invite-info" width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.95 3.85H6.05V2.75H4.95V3.85ZM5.5 9.9C3.0745 9.9 1.1 7.9255 1.1 5.5C1.1 3.0745 3.0745 1.1 5.5 1.1C7.9255 1.1 9.9 3.0745 9.9 5.5C9.9 7.9255 7.9255 9.9 5.5 9.9ZM5.5 0C4.77773 0 4.06253 0.142262 3.39524 0.418663C2.72795 0.695063 2.12163 1.10019 1.61091 1.61091C0.579463 2.64236 0 4.04131 0 5.5C0 6.95869 0.579463 8.35764 1.61091 9.38909C2.12163 9.89981 2.72795 10.3049 3.39524 10.5813C4.06253 10.8577 4.77773 11 5.5 11C6.95869 11 8.35764 10.4205 9.38909 9.38909C10.4205 8.35764 11 6.95869 11 5.5C11 4.77773 10.8577 4.06253 10.5813 3.39524C10.3049 2.72795 9.89981 2.12163 9.38909 1.61091C8.87836 1.10019 8.27205 0.695063 7.60476 0.418663C6.93747 0.142262 6.22227 0 5.5 0ZM4.95 8.25H6.05V4.95H4.95V8.25Z" fill="#8687A7" />
                </svg>
              </span>
              <span>0.00 %</span>
            </div>
            <div className="tc-info-block">
              <span>Staker commisions 
                <svg className="invite-info" width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.95 3.85H6.05V2.75H4.95V3.85ZM5.5 9.9C3.0745 9.9 1.1 7.9255 1.1 5.5C1.1 3.0745 3.0745 1.1 5.5 1.1C7.9255 1.1 9.9 3.0745 9.9 5.5C9.9 7.9255 7.9255 9.9 5.5 9.9ZM5.5 0C4.77773 0 4.06253 0.142262 3.39524 0.418663C2.72795 0.695063 2.12163 1.10019 1.61091 1.61091C0.579463 2.64236 0 4.04131 0 5.5C0 6.95869 0.579463 8.35764 1.61091 9.38909C2.12163 9.89981 2.72795 10.3049 3.39524 10.5813C4.06253 10.8577 4.77773 11 5.5 11C6.95869 11 8.35764 10.4205 9.38909 9.38909C10.4205 8.35764 11 6.95869 11 5.5C11 4.77773 10.8577 4.06253 10.5813 3.39524C10.3049 2.72795 9.89981 2.12163 9.38909 1.61091C8.87836 1.10019 8.27205 0.695063 7.60476 0.418663C6.93747 0.142262 6.22227 0 5.5 0ZM4.95 8.25H6.05V4.95H4.95V8.25Z" fill="#8687A7" />
                </svg>
              </span>
              <span>0.00 Case</span>
            </div>
            <div className="break" />                
          </div>
          <div className="tc-invite-referal">
            <div className="referal-title">The more you share, the more you get</div>
            <div className="referal-progress">
              <div className="referal-rank">
                <div className="rank-info">
                  <div>Now</div>
                  <div><span id="rank_info">NO RANK</span> - <span id="cps_info">0.00</span> <span>CSP</span></div>
                </div>
              </div>
              <div className="referal-progress-line">
                <div className="progress-wrap progress">
                  <div className="progress-bar progress" style={{width: '25%'}} />
                </div>
              </div>                    
              <div className="referal-rank-next">
                <div className="rank-info">
                  <div>Next</div>
                  <div>PARTNER</div>
                </div>
              </div>
            </div>
            <div className="referal-downlines">
              <div>Downlines for rank up:</div>
              <div>
                <svg className="referal-downlines-icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2ZM20 15H18.5C16.6 15 15 16.6 15 18.5V20H5.8C4.8 20 4 19.2 4 18.2V5.8C4 4.8 4.8 4 5.8 4H18.3C19.3 4 20.1 4.8 20.1 5.8V15H20ZM15.2 8.2L16.7 9.7L10.7 15.7L7.2 12.2L8.7 10.7L10.7 12.7L15.2 8.2Z" fill="#BDBDBE" />
                </svg>                                
              </div>
              <div>
                <svg className="referal-downlines-icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2ZM20 15H18.5C16.6 15 15 16.6 15 18.5V20H5.8C4.8 20 4 19.2 4 18.2V5.8C4 4.8 4.8 4 5.8 4H18.3C19.3 4 20.1 4.8 20.1 5.8V15H20ZM15.2 8.2L16.7 9.7L10.7 15.7L7.2 12.2L8.7 10.7L10.7 12.7L15.2 8.2Z" fill="#BDBDBE" />
                </svg>                                
              </div>
            </div>
            <div className="referal-link-copy">
              <div>Referal link:</div>
              <div id="copy-referal-link">https://stakingcase.com/?src=0xe8d562606f35cb14da3e8fab1174f9b5ae8319c4</div>
              <button id="referal-copy" className="button waves-button waves-float referal-button">Copy</button>
            </div>
          </div>
          <div className="tc-tables tc-tables-referal">
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
                  <tr>
                    <td className="tg-0lax">1</td>
                    <td className="tg-0lax">0</td>
                    <td className="tg-0lax">8%</td>
                    <td className="tg-0lax">0.000</td>
                    <td className="tg-0lax tc-tables-referal-last-column"><span className="activated">Active</span></td>
                  </tr>
                  <tr>
                    <td className="tg-0lax">2</td>
                    <td className="tg-0lax">0</td>
                    <td className="tg-0lax">5%</td>
                    <td className="tg-0lax">0.000</td>
                    <td className="tg-0lax tc-tables-referal-last-column"><button id="activate" className="button waves-button waves-float referal-button">Activate</button></td>
                  </tr>
                  <tr>
                    <td className="tg-0lax">3</td>
                    <td className="tg-0lax">0</td>
                    <td className="tg-0lax">2.5%</td>
                    <td className="tg-0lax">0.000</td>
                    <td className="tg-0lax tc-tables-referal-last-column"><button id="activate" className="button waves-button waves-float referal-button">Activate</button></td>
                  </tr>
                  <tr>
                    <td className="tg-0lax">4</td>
                    <td className="tg-0lax">0</td>
                    <td className="tg-0lax">1.5%</td>
                    <td className="tg-0lax">0.000</td>
                    <td className="tg-0lax tc-tables-referal-last-column"><button id="activate" className="button waves-button waves-float referal-button">Activate</button></td>
                  </tr>
                  <tr>
                    <td className="tg-0lax">5</td>
                    <td className="tg-0lax">0</td>
                    <td className="tg-0lax">1.0%</td>
                    <td className="tg-0lax">0.000</td>
                    <td className="tg-0lax tc-tables-referal-last-column"><button id="activate" className="button waves-button waves-float referal-button">Activate</button></td>
                  </tr>
                  <tr>
                    <td className="tg-0lax">6</td>
                    <td className="tg-0lax">0</td>
                    <td className="tg-0lax">1.0%</td>
                    <td className="tg-0lax">0.000</td>
                    <td className="tg-0lax tc-tables-referal-last-column"><button id="activate" className="button waves-button waves-float referal-button">Activate</button></td>
                  </tr>
                  <tr>
                    <td className="tg-0lax">7</td>
                    <td className="tg-0lax">0</td>
                    <td className="tg-0lax">0.5%</td>
                    <td className="tg-0lax">0.000</td>
                    <td className="tg-0lax tc-tables-referal-last-column"><button id="activate" className="button waves-button waves-float referal-button">Activate</button></td>
                  </tr>
                  <tr>
                    <td className="tg-0lax">8</td>
                    <td className="tg-0lax">0</td>
                    <td className="tg-0lax">0.5%</td>
                    <td className="tg-0lax">0.000</td>
                    <td className="tg-0lax tc-tables-referal-last-column"><button id="activate" className="button waves-button waves-float referal-button">Activate</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
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
          </div>
        </div>
      </div>
    );
}

export default Invite;