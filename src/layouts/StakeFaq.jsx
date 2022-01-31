import React from 'react';

export default function StakeFaq(props) {

    return (
			<div className="stake-case-faq">
	        <span className="stake-case-faq-header">FAQ</span>
	        <div className="stake-case-faq-qa">
	          <div>
	            <span>What is CASE?</span>
	            <span>CASE is the token that fuels the CASE Ecosystem.</span>
	          </div>
	          <div>
	            <span>What are the benefits to stake CASE?</span>
	            <span>You earn additional CASE while staking.</span>
	          </div>                    
	        </div>
	        <div className="stake-case-faq-qa">
	          <div>
	            <span>Are my CASE locked during Stake time?</span>
	            <span>Yes, you can withdraw your locked CASE at the end of Stake time.</span>
	          </div>
	          <div>
	            <span>When do I get the CASE rewards?</span>
	            <span>Every day you will receive dividends in CASE.</span>
	          </div>
	        </div>                
	      </div>
    );
}