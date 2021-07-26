import React from 'react';

function ReferalProgress(props) {
    return (
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
              <button id="referal-copy" className="button referal-button">Copy</button>
            </div>
          </div>
    );
}

export default ReferalProgress;