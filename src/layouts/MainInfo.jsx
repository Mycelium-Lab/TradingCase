import React from 'react';

function MainInfo(props) {  
  const { handleChange, avgAPY, lifetimeRewards, totalInterest, totalStaked } = props; 
  return (
    <div className="tc-main-info">
          <div className="tc-main-info-balance">
            <span>{`${totalInterest} CASE`}</span>
            <span>Stake and interest balance</span>
          </div>
          <div className="tc-main-info-stake-button">
            <button className="button" onClick={()=>handleChange('stake')}>STAKE CASE</button>
          </div>
          <div className="break"></div>
          <div className="tc-info-block">
            <span>Avg. Apy Rewards</span>
            <span>{`${avgAPY} %`}</span>
          </div>
          <div className="tc-info-block">
            <span>Lifetime Rewards</span>
            <span>{`${lifetimeRewards} Case`}</span>
          </div>
          <div className="break"></div>
          <div className="tc-info-block">
            <span>Global Staked</span>
            <span>{`${totalStaked} Case`}</span>
          </div>
        </div>
  );
}


export default MainInfo;