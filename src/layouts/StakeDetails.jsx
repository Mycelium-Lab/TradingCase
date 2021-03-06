import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

const PRECISION = 10 ** 18;
const ZERO_ADDR = "0x0000000000000000000000000000000000000000";

export default function StakeDetails(props) {

	const { BiggerBonus, LongerBonus, EarlyBonus, apy, RewardTotal, referrer } = props;

	function toPercent(a) {
      return (a*100/PRECISION).toFixed(4);
    }

    return (
		<div className="stake-case-order-details">
			<div className="stake-case-pd">
				<span className="stake-case-header">ORDER DETAILS</span>
				<div className="stake-case-order-details-rewards">
					<span>Volume bonus
						<Tooltip title="The more CASE you stake, the more CASE you earn while staking">
							<svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#8687A7" />
							</svg>
						</Tooltip>
					</span>
					<span>{toPercent(BiggerBonus) + '%'}</span>
				</div>
				<div className="stake-case-order-details-rewards">
					<span>HODL bonus
						<Tooltip title="The longer you stake CASE the more CASE you earn">
							<svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#8687A7" />
							</svg>
						</Tooltip>
					</span>
					<span>{toPercent(LongerBonus)+'%'}</span>
				</div>
				<div className="stake-case-order-details-rewards">
					<span>Early Bonus
					<Tooltip title="The earlier you stake, the more bonuses you will get">
							<svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#8687A7" />
							</svg>
						</Tooltip>
					</span>
					<span>{toPercent(EarlyBonus) + '%'}</span>
				</div>
				<div className="stake-case-order-details-rewards">
					<span>APY rewards
					<Tooltip title="Annual rewards in CASE in %. If staked less than one year you get a fraction of the APY.">
						<svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#8687A7" />
						</svg>
					</Tooltip>
					</span>
					<span>{apy.toFixed(4) + '%'}</span>
				</div>
				<div className="stake-case-order-details-rewards">
					<span>CASE rewards
					<Tooltip title="Amount of CASE that you get as reward for staking.">
						<svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#8687A7" />
						</svg>
					</Tooltip>
					</span>
					<span>{RewardTotal.toFixed(4)}</span>
				</div>
				{ referrer !== ZERO_ADDR && 
				<div className="stake-case-order-details-rewards">
					<span>Referral bonus 
						<Tooltip title="Your bonus on the staked CASE of your referrals">
							<svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#eabc4e" />
							</svg>
						</Tooltip>
					</span>
					<span>3%</span>
				</div>
				}
				{ referrer !== ZERO_ADDR && 
				<div className="stake-case-order-details-rewards">
					<span>Your referrer 
						<Tooltip title="Your direct referrer address">
							<svg className="stake-case-order-details-info" width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.5 3.5H5.5V2.5H4.5V3.5ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C1.92876 8.99983 2.47995 9.36812 3.08658 9.6194C3.69321 9.87067 4.34339 10 5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36812 2.47995 8.99983 1.92876 8.53553 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM4.5 7.5H5.5V4.5H4.5V7.5Z" fill="#eabc4e" />
							</svg>
						</Tooltip>
					</span>
					<span style={{color:'#eabc4e'}}>{`${referrer.slice(0,6)}...${referrer.slice(-3)}`}</span>
				</div>
				}
			</div>
		</div>
    );
}