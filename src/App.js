import React, {useEffect} from 'react';
import Header from './layouts/Header';
import Staking from './components/StakingPage.jsx';
import Invite from './components/InvitePage.jsx';
import Stake from './components/Stake.jsx';
import WalletConnectionModal from './layouts/WalletConnectionModal';
import { contractMethods, findGetParameter } from './Utils.js';
import { User } from './graph';
import {Helmet} from 'react-helmet';

import { useDispatch, useSelector } from 'react-redux';
import { selectWallet } from './wallets/actions';
import { openModal } from './redux/modal/actions';

import './App.css';
import './style.css';
import './helvetica/stylesheet.css';

import { useQuery } from "@apollo/client";

function App() {

  const [page, setPage] = React.useState('staking');
  const [balance, setBalance] = React.useState(0);
  const [walletAddress, setWalletAddress] = React.useState('');
  const [apy, setApy] = React.useState(0.00);
  const [lifetimeRewards, setLifetimeRewards] = React.useState(0.00);
  const [totalInterest, setTotalInterest] = React.useState(0.00);
  const [careerValue, setCareerValue] = React.useState(0.00);
  const [stakeList, setStakeList] = React.useState([]);
  const [totalStaked, setTotalStaked] = React.useState(0);
  const [recentActivity, setRecentActivity] = React.useState([]);
  const [stakedCase, setStakedCase] = React.useState(0.00);
  const [caseData, setCaseData] = React.useState({});
  const [canRankUp, setCanRankUp] = React.useState(false);
  const [ref, setRef] = React.useState('0x0000000000000000000000000000000000000000');

  const dispatch = useDispatch()
  const address = useSelector(state => state.wallet.address)
  const info = useSelector(state => state.wallet.provider);
  const methods = useSelector(state => state.wallet.methods);

  useEffect(() => {
    const lastProvider = localStorage.getItem('caseCurrentProvider')
    if (!lastProvider) dispatch(openModal())
    else selectWallet(lastProvider, dispatch)
  }, [])

  useEffect(() => {
    if (address) {
      console.log('start');
      start()
    }
  }, [address])

  const { loading, error, data, refetch, networkStatus } = useQuery(User, {
    variables: { id: address.toLowerCase() },
    notifyOnNetworkStatusChange: true,
    fetchPolicy:"cache-and-network"
  });

  function sum(arr, key) {
    return arr.reduce((a, b) => a + (parseFloat(b[key]) || 0), 0);
  }

  console.log(`%c My src: ${ref}`, 'color: orange')

  React.useEffect(() => {  // хук для обновления данных
    if (error) console.error(error);
    if (loading) return(<div>Loading...</div>);
    if (!loading) {
      if (data.caseUser == null) {
        console.log(data);
      }
      else {
        console.log(data);
        setRef(findGetParameter('src'));
        setApy((parseFloat(data.caseUser.avgAPY)*100).toFixed(2));
        setCareerValue(parseFloat(data.caseUser.careerValue*10000000000).toFixed(2))
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
  
  },[data, error, loading]);

  const start = async() => {
    if (info != null) {
      console.log(localStorage.getItem('caseCurrentProvider'));
      console.log(info);
      console.log(methods);

      await methods.init();

      await methods.getBalance().then(function(result) {
        console.log(result);
        setBalance(result);
      });

      await methods.canRankUp().then(function(result) {
        console.log(result)
        setCanRankUp(result);
      });
    }
  };

  async function handleWithdraw(idx){
    console.log('withdraw', methods);
    await methods.init();
    await methods.instanceWithdraw(idx).then(function(result) {console.log(result)});
  }

  function handleChange(page){
    window.history.pushState(page, 'Title', '/'+page);
    setPage(page);
  }

  async function handleStake(amount, days) {
    console.log('stake', methods);
    console.log(`%c staked ${amount} coins for ${days} days with ref ${ref}`, 'color: green');
    await methods.init();
    await methods.instanceStake(amount, days, ref).then(function(error, result){console.log(error, result)});
  }

  async function handleRankUp() {
    console.log("rankUp");
    await methods.instanceRankUp().then(function(result){console.log(result)});
  }

  return (
    <div className="App">
      <WalletConnectionModal />
      <Header handleChange={handleChange} data={caseData} />
      { (window.location.pathname === '/staking' || window.location.pathname === '/') &&
        <Staking totalStaked={totalStaked} handleWithdraw={handleWithdraw} handleChange={handleChange} avgAPY={apy} lifetimeRewards={lifetimeRewards} totalInterest={totalInterest} activeStakes={stakeList} recentActivity={recentActivity} />
      }
      { (window.location.pathname === '/invite') && 
        <Invite data={caseData} stakedCase={stakedCase} wallet={walletAddress} canRankUp={canRankUp} handleRankUp={handleRankUp}/>
      }
      { (window.location.pathname === '/stake') &&
        <Stake balance={balance} handleStake={handleStake} />
      }
      <Helmet>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/node-waves/0.7.6/waves.min.js" integrity="sha512-MzXgHd+o6pUd/tm8ZgPkxya3QUCiHVMQolnY3IZqhsrOWQaBfax600esAw3XbBucYB15hZLOF0sKMHsTPdjLFg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script type="text/javascript">          
          Waves.attach('.button', ['waves-button', 'waves-float']);
          Waves.init();          
        </script>
      </Helmet>
    </div>
    
  );
}

export default App;
