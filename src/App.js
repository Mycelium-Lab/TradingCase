import React from 'react';
import Header from './layouts/Header';
import Staking from './components/StakingPage.jsx';
import Invite from './components/InvitePage.jsx';
import Stake from './components/Stake.jsx';
import Web3 from 'web3';
import { contractMethods } from './Utils.js';
import { User } from './graph';

import './App.css';
import './style.css';
import './helvetica/stylesheet.css';

import { useQuery } from "@apollo/client";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

function findGetParameter(parameterName) {
  var result = null,
  tmp = [];
  window.location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
  return result;
}



function App() {
  const [page, setPage] = React.useState('staking');

  const [balance, setBalance] = React.useState(0);
  const [walletAddress, setWalletAddress] = React.useState('0x73c38e1498102Cd42E402511455e6F95F8Dd1606');
  const [apy, setApy] = React.useState(0.00);
  const [lifetimeRewards, setLifetimeRewards] = React.useState(0.00);
  const [totalInterest, setTotalInterest] = React.useState(0.00);
  const [totalReward, setTotalReward] = React.useState(0.00);
  const [careerValue, setCareerValue] = React.useState(0.00);
  const [stakeList, setStakeList] = React.useState([]);
  const [totalStaked, setTotalStaked] = React.useState(0);
  const [recentActivity, setRecentActivity] = React.useState([]);
  const [stakedCase, setStakedCase] = React.useState(0.00);
  const [caseData, setCaseData] = React.useState({});
  const [ref, setRef] = React.useState('');

  const { loading, error, data, refetch, networkStatus } = useQuery(User, {
    variables: { id: walletAddress.toLowerCase() },
    notifyOnNetworkStatusChange: true,
    fetchPolicy:"cache-and-network"
  });

  function sum(arr, key) {
    return arr.reduce((a, b) => a + (parseFloat(b[key]) || 0), 0);
  }

  console.log(`%c My src: ${findGetParameter('src')}`, 'color: orange')

  React.useEffect(() => {  // хук для обновления данных

    if (error) console.log(error);
    if (!loading) {
      if (data.caseUser == null) {
        console.log(data);
      }
      else {
        console.log(data);
        setRef(findGetParameter('src'));
        setApy((parseFloat(data.caseUser.avgAPY)*100).toFixed(2));
        setTotalReward(parseFloat(data.caseUser.totalStakeReward).toFixed(2))
        setCareerValue(parseFloat(data.caseUser.careerValue).toFixed(2))
        let ActiveStaked = sum(data.caseUser.stakeList,"stakeAmount");
        let LifetimeRewards = sum(data.caseUser.stakeList,"interestAmount");
        setLifetimeRewards(LifetimeRewards.toFixed(2));
        setTotalInterest((ActiveStaked+LifetimeRewards).toFixed(2));
        setStakedCase(ActiveStaked);
        setStakeList(data.caseUser.stakeList);
        setRecentActivity(data.caseUser.stakeActivityHistory);
        setTotalStaked(data.caseStakingPool.stakeAmount);
        setCaseData(data.caseUser);
      }
    }
  
  },[data]);

  var web3;
  var methods;

  const start = async() => {
    web3 = new Web3(window.web3.currentProvider);
    await window.ethereum.enable();

    methods = new contractMethods(web3);
    await methods.init();

    await methods.getBalance().then(function(result) {
      setBalance(result);
    });
    setWalletAddress(methods.walletAddress);
  };

  start();

  function handleChange(page){
    window.history.pushState(page, 'Title', '/'+page);
    setPage(page);
  }

  async function handleStake(amount, days) {
    console.log(`staked ${amount} coins for ${days} days with ref ${ref}`);
    await methods.instanceStake(amount, days, ref).then(function(error, result){console.log(error, result)});
  }

  return (
    <div className="App">
      <Header handleChange={handleChange} wallet={walletAddress}/>
      { (window.location.pathname == '/staking' || window.location.pathname == '/') &&
        <Staking totalStaked={totalStaked} handleChange={handleChange} avgAPY={apy} lifetimeRewards={lifetimeRewards} totalInterest={totalInterest} activeStakes={stakeList} recentActivity={recentActivity} />
      }
      { (window.location.pathname == '/invite') && 
          <Invite data={caseData} stakedCase={stakedCase} wallet={walletAddress}/>
      }
      { (window.location.pathname == '/stake') &&
          <Stake balance={balance} handleStake={handleStake}/>
      }
      <script type="text/javascript">
        Waves.attach('.button', ['waves-button', 'waves-float']);
        Waves.init();
      </script> 
    </div>
    
  );
}

export default App;
