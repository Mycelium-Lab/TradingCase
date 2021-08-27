import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import WithdrawModal from './WithdrawModal';

//функция расчета дней до окончания 
function getDays(value, timestamp) {
  var today = new Date(); // сегодня
  var start = new Date(timestamp*1000);
  var ends = new Date(start.getTime()+1000*60*60*24*value);
  var days = Math.floor((ends - today) / (1000*60*60*24));
  var hours = Math.floor(((ends - today) / (1000*60*60)) - days*24);
  var minutes = Math.floor(((ends - today) / (1000*60)) - (days*60*24 + hours*60));
  return `${days}d ${hours}h ${minutes}m`;
}


//функция расчета прибыли, которую можно вывести
const calculate = (amount, days, timestamp, withdrawn) => {
  var today = new Date(); // сегодня
  var start = new Date(parseInt(timestamp)*1000);
  var ends = new Date(start.getTime()+1000*60*60*24*days);
  return (parseFloat(amount)*(today - start)/(ends-start)-withdrawn);
  }

function TableActiveStakes(props) {

  const { refetch } = props;

  var activeStakes = useSelector(state => state.info.user.stakeList);
  const chainId = useSelector(state => state.wallet.chainId);
  const [Idx, setIdx] = useState(-1);
  const [Amount, setAmount] = useState(0);
  const [open, setOpen] = useState(false);

  if (activeStakes === undefined) activeStakes = [];

  // функция которая вызывает модальное окно
  function handleWithdraw(idx, amount) {
    setIdx(idx);
    setAmount(amount);
    setOpen(true);
  }

  //хэндл закрытия модального окна
  function setClose() {
    setOpen(false);
  }

  //обновление таблицы каждые 2 секунды
  const calculateTimeLeft = () => {
    let seconds = new Date().getTime();
    const difference = +new Date(seconds) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 2000);
  });

  return (
    <div className="tc-info-block">
      { open &&
        <WithdrawModal idx={Idx} amount={Amount} setClose={setClose} refetch={refetch}/>
      }
      <span>Active Stakes</span>
      <table className="tg tg-scrollable-table tg-recent-activity" style={{textAlign:"center"}}>
        <thead>
          <tr>
            <th className="tg-0pky">Staked Case</th>
            <th className="tg-0lax">Apy</th>
            <th className="tg-0lax">Lock - Up Left</th>
            <th className="tg-0lax">Claimable Rewards</th>
            <th className="tg-0lax">Total Rewards</th>
            <th className="tg-0lax">Total Case</th>
            <th className="tg-0lax tc-tables-referal-last-column" style={{width:85}}>Actions</th>
          </tr>
        </thead>
        <tbody>
        {activeStakes.filter(row=>row.active===true).map(({stakeAmount, apy, stakeTimeInDays, withdrawnInterestAmount, interestAmount, stakeTimestamp, idx}, index) => (
          <tr key={index}>
            <td className="tg-0lax">{`${stakeAmount} CASE`}</td>
            <td className="tg-0lax">{`${(100*parseFloat(apy)).toFixed(2)}%`}</td>
            <td className="tg-0lax">{getDays(parseInt(stakeTimeInDays), parseInt(stakeTimestamp))}</td>
            <td className="tg-0lax">{`${calculate(interestAmount, stakeTimeInDays, stakeTimestamp, withdrawnInterestAmount).toFixed(8)} CASE`}</td>
            <td className="tg-0lax">{`${parseFloat(interestAmount).toFixed(2)} CASE`}</td>
            <td className="tg-0lax">{`${(parseFloat(interestAmount) + parseFloat(stakeAmount)).toFixed(2)} CASE`}</td>
            <td className="tg-0lax" style={{width:85}}><button disabled={chainId!=='42'} className="button referal-button" onClick={()=>handleWithdraw(idx, calculate(interestAmount, stakeTimeInDays, stakeTimestamp, withdrawnInterestAmount).toFixed(2))}>Claim Rewards</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableActiveStakes;