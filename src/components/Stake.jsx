import React from 'react';

function Stake(props) {
    return (
        <div className="tc-wrapper" id="stake-window">
        <div className="container">
          <div className="stake-case">
            <div className="stake-case-amount">
              <div className="stake-case-pd">
                <span className="stake-case-header">STAKE CASE</span>
                <div className="stake-case-input">
                  <span>Amount to stake</span>
                  <div>
                    <input type="text" defaultValue={10} />
                    <button className="button waves-float input-button">MAX</button>
                  </div>
                  <span className="description">0.0000 CASE available - <div>Buy</div></span>
                </div>
                <div className="stake-case-input">
                  <span>Stake time in days</span>
                  <div>
                    <input type="text" defaultValue={1000} min={30} max={1000} />
                    <button className="button input-button">MAX</button>
                  </div>
                  <span className="description">Min. 30 days/ Max. 1,000 days</span>
                </div>
                <button id="stake-case-button" className="button">STAKE</button>
              </div>
            </div>
            <div className="stake-case-order-details">
              <div className="stake-case-pd">
                <span className="stake-case-header">ORDER DETAILS</span>
                <div className="stake-case-order-details-rewards">
                  <span>Bigger Bonus 
                    <svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#8687A7" />
                    </svg>
                  </span>
                  <span>0.0003%</span>
                </div>
                <div className="stake-case-order-details-rewards">
                  <span>Longer Bonus
                    <svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#8687A7" />
                    </svg>
                  </span>
                  <span>200.0500%</span>
                </div>
                <div className="stake-case-order-details-rewards">
                  <span>Early Bonus
                    <svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#8687A7" />
                    </svg>
                  </span>
                  <span>90.7575%</span>
                </div>
                <div className="stake-case-order-details-rewards">
                  <span>APY rewards
                    <svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#8687A7" />
                    </svg>
                  </span>
                  <span>66.2697%</span>
                </div>
                <div className="stake-case-order-details-rewards">
                  <span>CASE rewards
                    <svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#8687A7" />
                    </svg>
                  </span>
                  <span>18.1561</span>
                </div>
              </div>
            </div>
          </div>
          <div className="stake-case-faq">
            <span className="stake-case-faq-header">FAQ</span>
            <div className="stake-case-faq-qa">
              <div>
                <span>What is CASE?</span>
                <span>CASE is the token that fuels the CASEDEFI Platform.</span>
              </div>
              <div>
                <span>What are the benefits to stake CASE?</span>
                <span>When do I get the CASE Rewards?</span>
              </div>                    
            </div>
            <div className="stake-case-faq-qa">
              <div>
                <span>Are my CASE locked during that period?</span>
                <span>Yes, during the Staking Period your CASE tokens are locked.</span>
              </div>
              <div>
                <span>When do I get the CASE Rewards?</span>
                <span>You get a daily dividend in CASE.</span>
              </div>
            </div>                
          </div>
        </div>
      </div>
    );
}

export default Stake;