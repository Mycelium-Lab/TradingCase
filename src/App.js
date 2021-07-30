import React from 'react';
import Header from './layouts/Header';
import Staking from './components/StakingPage.jsx';
import Invite from './components/InvitePage.jsx';
import Stake from './components/Stake.jsx';
import Web3 from 'web3';
import { contractMethods } from './Utils.js';

import './App.css';
import './style.css';
import './helvetica/stylesheet.css';

import {
  useQuery,
  gql
} from "@apollo/client";

// запрос к GraphQL для получения событий пополнения ликвидности
const User = gql`
  query CaseUser($id: ID!) {
    caseStakingPool(id: "CaseStakingPool") {
       id
       mintedCaseTokens
       stakeAmount
    }
    caseUser(id: $id) {
      address
      rank
      careerValue
      avgAPY
      totalStakeReward
      stakeList(
          where: { active: true }
          orderBy: stakeTimestamp
          orderDirection: desc
      ) {
          idx
          stakeAmount
          interestAmount
          withdrawnInterestAmount
          stakeTimestamp
          stakeTimeInDays
          apy
          active
      }
      stakeActivityHistory(orderBy: timestamp, orderDirection: desc) {
          id
          type
          timestamp
          txAmount
          txHash
      }
    }
  }
`;

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

  const { loading, error, data, refetch, networkStatus } = useQuery(User, {
    variables: { id: "0xE8D562606F35CB14dA3E8faB1174F9B5AE8319c4".toLowerCase() },
    notifyOnNetworkStatusChange: true,
    fetchPolicy:"cache-and-network"
  });

  function sum(arr, key) {
    return arr.reduce((a, b) => a + (parseFloat(b[key]) || 0), 0);
  }

  React.useEffect(() => {  // хук для обновления данных

    if (error) console.log(error);
    if (!loading) {
      if (data.caseUser == null) {
      console.log(data);
      }
      else {
        console.log(data);
      setApy((parseFloat(data.caseUser.avgAPY)*100).toFixed(2));
      setTotalReward(parseFloat(data.caseUser.totalStakeReward).toFixed(2))
      setCareerValue(parseFloat(data.caseUser.careerValue).toFixed(2))
      let ActiveStaked = sum(data.caseUser.stakeList,"stakeAmount");
      let LifetimeRewards = sum(data.caseUser.stakeList,"interestAmount");
      setLifetimeRewards(LifetimeRewards.toFixed(2));
      setTotalInterest((ActiveStaked+LifetimeRewards).toFixed(2));
      setStakeList(data.caseUser.stakeList);
      setRecentActivity(data.caseUser.stakeActivityHistory);
      setTotalStaked(data.caseStakingPool.stakeAmount);
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
    setPage(page);
  }

  async function handleStake(amount, days) {
    console.log(`staked ${amount} coins for ${days} days`);
    await methods.instanceStake(amount, days).then(function(error, result){console.log(error, result)});
  }

  return (
    <div className="App">
      <Header handleChange={handleChange} wallet={walletAddress}/>
      { page == 'staking' &&
        <Staking totalStaked={totalStaked} handleChange={handleChange} avgAPY={apy} lifetimeRewards={lifetimeRewards} totalInterest={totalInterest} activeStakes={stakeList} recentActivity={recentActivity} />
      }
      { page == 'invite' && 
          <Invite />
      }
      { page == 'stake' &&
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
