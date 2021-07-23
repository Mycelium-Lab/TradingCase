import React from 'react';

function MainInfo(props) {  
  return (
    <div className="tc-main-info">
          <div className="tc-main-info-balance">
            <span>0.00 CASE</span>
            <span>Stake and interest balance</span>
          </div>
          <div className="tc-main-info-stake-button">
            <button className=" button waves-effect waves-light">STAKE CASE</button>
          </div>
          <div className="break"></div>
          <div className="tc-info-block">
            <span>Avg. Apy Rewards</span>
            <span>0.00 %</span>
          </div>
          <div className="tc-info-block">
            <span>Lifetime Rewards</span>
            <span>0.00 Case</span>
          </div>
          <div className="break"></div>
          <div className="tc-info-block">
            <span>Global Staked</span>
            <span>35, 977, 984, 67 Case</span>
          </div>
        </div>
  );
}


export default MainInfo;