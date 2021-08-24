import React, {useState, useEffect} from 'react';
import Header from './layouts/Header';
import Staking from './components/StakingPage.jsx';
import Invite from './components/InvitePage.jsx';
import Stake from './components/Stake.jsx';
import Route from './components/Route.jsx';
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
import WrongNetworkModal from './layouts/WrongNetworkModal';

function App() {

  const [balance, setBalance] = useState(0);
  const [canRankUp, setCanRankUp] = useState(false);
  const [ref, setRef] = useState('0x0000000000000000000000000000000000000000');

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


  console.log(`%c My src: ${ref}`, 'color: orange')

  useEffect(() => {  // хук для обновления данных
    if (error) console.error(error);
    if (loading) return(<div>Loading...</div>);
    if (!loading) {
      if (data.caseUser != null) {
        console.log('dispatch', data.caseUser);
        dispatch(setUser(data.caseUser));
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
        console.log(canRankUp);
      });
    }
  };

  return (
    <div className="App">
      <WalletConnectionModal />
      <WrongNetworkModal />

      <Header />
      <Route path="/staking">
        <Staking refetch={refetch}/>
      </Route>
      <Route path="/">
        <Staking refetch={refetch}/>
      </Route>
      <Route path="/invite">
        <Invite canRankUp={canRankUp} />
      </Route>
      <Route path="/stake">
        <Stake balance={balance} referrer={ref} />
      </Route>
    </div>
    
  );
}

export default App;
