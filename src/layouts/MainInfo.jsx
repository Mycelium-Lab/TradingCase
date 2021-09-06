import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { useSelector } from 'react-redux';

function sum(arr, key) {
    return arr.reduce((a, b) => a + (parseFloat(b[key]) || 0), 0);
}

function threeCommas(str) {
  var num = str.toString().split('.');
  return `${num[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")}.${num[1]!==undefined ? num[1].slice(0,2) : '00'}`;
}

function MainInfo(props) {

  const user = useSelector(state => state.info.user);
  var total = useSelector(state => state.info.global);

  var avgAPY = 0.00;
  var totalInterest = 0.00;
  var lifetimeRewards = 0.00;
  var totalStaked = 0.00

  console.log(total)
  if (total!==null){
    if (Object.keys(total).length !== 0) {
      totalStaked = total.stakeAmount;
    }
  }

  if (Object.keys(user).length !== 0) {
    avgAPY = (parseFloat(user.avgAPY)*100).toFixed(2);
    let ActiveStaked = sum(user.stakeList,"stakeAmount");
    let LifetimeRewards = sum(user.stakeList,"interestAmount");
    totalInterest = (ActiveStaked+LifetimeRewards).toFixed(2);
    lifetimeRewards = LifetimeRewards.toFixed(2);
  }

  function handleChange(page) {
    window.history.pushState(page, 'Title', `/staking/${page}`);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <div className="tc-main-info">
          <div className="tc-main-info-balance">
            <span>{`${threeCommas(totalInterest)} CASE`}</span>
            <span>Stake and interest balance</span>
          </div>
          <div className="tc-main-info-stake-button">
            <button className="button" onClick={()=>handleChange('stake')}>STAKE CASE</button>
          </div>
          <div className="break"></div>
          <div className="tc-info-block">
            <span>
            Avg. Apy Rewards
            <Tooltip title="Your average CASE rewards in % per year">
              <svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#8687A7" />
              </svg>
            </Tooltip>
            </span>
            <span>{`${avgAPY} %`}</span>
          </div>
          <div className="tc-info-block">
            <span>
            Lifetime Rewards
            <Tooltip title="Total received Rewards since sign up">
              <svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#8687A7" />
              </svg>
            </Tooltip>
            </span>
            <span>{`${threeCommas(lifetimeRewards)} CASE`}</span>
          </div>
          <div className="break"></div>
          <div className="tc-info-block">
            <span>Global Staked</span>
            <span>{`${threeCommas(totalStaked)} CASE`}</span>
          </div>
        </div>
  );
}


export default MainInfo;