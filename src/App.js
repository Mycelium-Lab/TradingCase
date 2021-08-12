import React, {useEffect} from 'react';
import Header from './layouts/Header';
import Staking from './components/StakingPage.jsx';
import Invite from './components/InvitePage.jsx';
import Stake from './components/Stake.jsx';
import WalletConnectionModal from './layouts/WalletConnectionModal';
import { findGetParameter } from './Utils.js';
import { User } from './graph';

import { useDispatch, useSelector } from 'react-redux';
import { selectWallet } from './wallets/actions';
import { setUser, setGlobal } from './redux/info/actions';
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
  const [totalStaked, setTotalStaked] = React.useState(0);
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
    if (findGetParameter('src')!=null) {
      setRef(findGetParameter('src'));
    }
  }, [])

  useEffect(() => {
    if (address) {
      start()
    }
  }, [methods])

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
      if (data.caseUser != null) {
        console.log('dispatch', data.caseUser);
        dispatch(setUser(data.caseUser));
        setApy((parseFloat(data.caseUser.avgAPY)*100).toFixed(2));
        setCareerValue(parseFloat(data.caseUser.careerValue*10000000000).toFixed(2))
        let ActiveStaked = sum(data.caseUser.stakeList,"stakeAmount");
        let LifetimeRewards = sum(data.caseUser.stakeList,"interestAmount");
        setLifetimeRewards(LifetimeRewards.toFixed(2));
        setTotalInterest((ActiveStaked+LifetimeRewards).toFixed(2));
        setStakedCase(ActiveStaked);
        setCaseData(data.caseUser);
      }
      dispatch(setGlobal(data.caseStakingPool));
    }
  
  },[data, error, loading]);

  const start = async() => {
    if (info != null) {

      await methods.init();

      await methods.getBalance().then(function(result) {
        setBalance(result);
      });

      await methods.canRankUp().then(function(result) {
        setCanRankUp(result);
      });
    }
  };


  function handleChange(page) {
    console.log(page);
    window.history.pushState(page, 'Title', `/${page}`);
    setPage(page);
  }


  async function handleRankUp() {
    console.log("rankUp");
    await methods.instanceRankUp().then(function(result){console.log(result)});
  }

  return (
    <div className="App" page={page}>
      <WalletConnectionModal />
      <Header handleChange={handleChange} data={caseData} />
      { (window.location.pathname === '/staking' || window.location.pathname === '/') &&
        <Staking handleChange={handleChange}/>
      }
      { (window.location.pathname === '/invite') && 
        <Invite data={caseData} handleChange={handleChange} stakedCase={stakedCase} wallet={walletAddress} canRankUp={canRankUp} handleRankUp={handleRankUp} page={page}/>
      }
      { (window.location.pathname === '/stake') &&
        <Stake balance={balance} referrer={ref}/>
      }
    </div>
    
  );
}

export default App;
