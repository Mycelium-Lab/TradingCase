import React from 'react';
import {rankList, cspToLevel} from '../constants';
import { useSelector } from 'react-redux';

function ReferalProgress(props) {

  const { canRankUp, handleRankUp } = props;
  const data = useSelector(state => state.info.user);
  const csp = parseFloat(data.careerValue*10000000000).toFixed(2);
  const rank = data.rank;
  var downlines = 0;
  var progress = Math.floor((csp / cspToLevel[parseInt(rank)])*100);
  console.log(progress);
  if (progress > 100) progress = 100;
  if (rank === "0") downlines = 2;
  else {
    data.referredUsers.map((row)=>{
      if (parseInt(row.rank) >= parseInt(rank))
        downlines += 1;
    })
    if (downlines>2) downlines = 2;
  }
  const wallet = useSelector(state => state.wallet.address);


    return (
      <div className="tc-invite-referal">
          <div className="referal-title">The more you share, the more you get</div>
          <div className="referal-progress">
            <div className="referal-rank">
              <div className="rank-info">
                <div>Now</div>
                <div><span id="rank_info">{rankList[rank].toUpperCase()}</span> - <span id="cps_info">{csp}</span> <span> CSP</span></div>
              </div>
            </div>
            <div className="referal-progress-line">
              <div className="progress-wrap progress">
                  <div className="progress-bar progress" style={{width: `${progress}%`}} />
              </div>
            </div>                    
            <div className="referal-rank-next">
              <div className="rank-info">
                <div>Next</div>
                <div>{(rank !='8') ? rankList[(parseInt(rank)+1).toString()].toUpperCase() : "MAX"}</div>
              </div>
            </div>
          </div>
          <div className="referal-downlines">
            { canRankUp &&
              <button className="button referal-button rank-up" style={{marginRight:430}}onClick={()=>handleRankUp()}>RankUp</button>
            }
            <div>Downlines for rank up:</div>
            <div>
              <svg className="referal-downlines-icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2ZM20 15H18.5C16.6 15 15 16.6 15 18.5V20H5.8C4.8 20 4 19.2 4 18.2V5.8C4 4.8 4.8 4 5.8 4H18.3C19.3 4 20.1 4.8 20.1 5.8V15H20ZM15.2 8.2L16.7 9.7L10.7 15.7L7.2 12.2L8.7 10.7L10.7 12.7L15.2 8.2Z" fill={downlines ? "#45CB85" : "#BDBDBE"} />
              </svg>
            </div>
            <div>
              <svg className="referal-downlines-icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2ZM20 15H18.5C16.6 15 15 16.6 15 18.5V20H5.8C4.8 20 4 19.2 4 18.2V5.8C4 4.8 4.8 4 5.8 4H18.3C19.3 4 20.1 4.8 20.1 5.8V15H20ZM15.2 8.2L16.7 9.7L10.7 15.7L7.2 12.2L8.7 10.7L10.7 12.7L15.2 8.2Z" fill={(downlines>1) ? "#45CB85" : "#BDBDBE"} />
              </svg>
            </div>
          </div>
          <div className="referal-link-copy">
            <div>Referal link:</div>
            <div id="copy-referal-link">{`http://${window.location.host}/?src=${wallet.toLowerCase()}`}</div>
            <button id="referal-copy" className="button referal-button" onClick={()=>{navigator.clipboard.writeText(`http://${window.location.host}/?src=${wallet.toLowerCase()}`)}}>Copy</button>
          </div>
        </div>
    );
}

export default ReferalProgress;