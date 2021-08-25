import React, {useState} from 'react';
import StakeDetails from '../layouts/StakeDetails';
import StakeFaq from '../layouts/StakeFaq';
import { useSelector } from 'react-redux';

import StakingModal from '../layouts/StakingModal';
//import calculate from 'function';

const PRECISION = 10 ** 18;
const BBDIVISOR = 10 ** 15;
const DAILYBREW = 15 * (10**14);
const DAILYGREW = 10 ** 12;
const ISLOPE = 2 * (10 ** 8);
const PEAK_PRE = 10 ** 8;
const Minted = 0;


function Stake(props) {

  const { balance, referrer } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [ daysAmount, setDaysAmount ] = useState(1000);
  const [ stakeAmount, setStakeAmount ] = useState(10);
  const [ BiggerBonus, setBiggerBonus ] = useState(0);
  const [ LongerBonus, setLongerBonus ] = useState(0);
  const [ EarlyBonus, setEarlyBonus ] = useState(0);
  const [ apy, setApy ] = useState(0);
  const [ RewardTotal, setRewardTotal ] =useState(0);
  const [ openDays, setOpenDays] = useState(false);
  const [ openAmount, setOpenAmount] = useState(false);


  async function handleStake(amount, days) {
    console.log(`%c staked ${amount} coins for ${days} days with ref ${referrer}`, 'color: green');
    setModalOpen(true);
    //await methods.init();
    //await methods.instanceStake(amount, days, referrer).then(function(error, result){console.log(error, result)});
  }

  const chainId = useSelector(state => state.wallet.chainId);
  const Minted = useSelector(state => state.info.global.mintedCaseTokens);
  console.log(chainId);

  const calculate = (amount, days) => {

    console.log(amount, days);
    let BB = amount * PRECISION* PEAK_PRE / BBDIVISOR * days / 365;
    let LB = (DAILYBREW * days) + (DAILYGREW * days * (days + 1) / 2);
    let EB = PRECISION - (ISLOPE * Minted);
    let IR = BB + (LB * EB) / PRECISION;
    let RT = (amount * IR) / PRECISION;
    if (amount!==0) setApy(36500*((RT / amount) / days));
    else setApy(0);
    setRewardTotal(RT);
    setLongerBonus(LB);
    setEarlyBonus(EB);
    setBiggerBonus(BB);

  }

  function setClose() {
    setModalOpen(false);
  }

  function preHandle() {
    if (daysAmount > 29 && daysAmount < 1001) { handleStake(stakeAmount, daysAmount); setOpenDays(false); }
    else setOpenDays(true);

    if (daysAmount > 1) { handleStake(stakeAmount, daysAmount); setOpenAmount(false); }
    else setOpenAmount(true);
  }

  function handleChangeStake(event) {
    if (event.target.value !== "" && Number.isInteger(parseInt(event.target.value))) {
      setStakeAmount(parseInt(event.target.value));
      calculate(parseInt(event.target.value), daysAmount);
    }
    else setStakeAmount(0);
  }

  function handleChangeDays(event) {
    if (event.target.value !== "" && Number.isInteger(parseInt(event.target.value))) {
      setDaysAmount(parseInt(event.target.value));
      calculate(stakeAmount, parseInt(event.target.value));
    }
    else setDaysAmount(1);
  }

  function handleDaysMax() {
    setDaysAmount(1000);
    calculate(stakeAmount, 1000);
  }

  function handleStakeMax() {
    setStakeAmount(balance);
    calculate(balance, daysAmount);
  }

  React.useEffect(() => {
    calculate(stakeAmount, daysAmount);
    window.scrollTo(0, 0);
  });

  return (
      <div className="tc-wrapper" id="stake-window">
      <StakingModal amount={stakeAmount} open={modalOpen} setClose={setClose} days={daysAmount} referrer={referrer} />
      <div className="container">
        <div className="stake-case">
          <div className="stake-case-amount">
            <div className="stake-case-pd">
              <span className="stake-case-header">STAKE CASE</span>
              <div className="stake-case-input">
                <span>Amount to stake</span>
                <div>
                  <input type="text" value={stakeAmount} style={{boxShadow: openAmount ? `0 0 3px #CC0000` : 'none'}} onChange={handleChangeStake} />
                  <button className="button input-button" onClick={()=>handleStakeMax()}>MAX</button>
                </div>
                <span className="description">{balance + " CASE available - "}<div>Buy</div></span>
              </div>
              <div className="stake-case-input">
                <span>Stake time in days</span>
                <div>
                  <input type="text" value={ daysAmount } style={{boxShadow: openDays ? `0 0 3px #CC0000` : 'none'}} min={30} max={1000} onChange={ handleChangeDays }/>
                  <button className="button input-button" onClick={()=>handleDaysMax()}>MAX</button>
                </div>
                <span className="description">Min. 30 days/ Max. 1,000 days</span>
              </div>
              <button id="stake-case-button" className="button" disabled={chainId!=='42'} onClick={() => preHandle()} >STAKE</button>
            </div>
          </div>
          <StakeDetails referrer={referrer} BiggerBonus={BiggerBonus} LongerBonus={LongerBonus} EarlyBonus={EarlyBonus} apy={apy} RewardTotal={RewardTotal} />
        </div>
        <StakeFaq />
      </div>
    </div>
  );
}

export default Stake;