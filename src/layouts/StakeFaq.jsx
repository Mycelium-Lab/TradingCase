import React from 'react';

export default function StakeFaq(props) {

    return (
			<div className="stake-case-faq">
	        <span className="stake-case-faq-header">FAQ</span>
	        <div className="stake-case-faq-qa">
	          <div>
	            <span>What is CASE?</span>
	            <span>CASE is the token that fuels the CASEDEFI Platform.</span>
	          </div>
	          <div>
	            <span>What are the benefits to stake CASE?</span>
	            <span>When do I get the CASE Rewards?</span>
	          </div>                    
	        </div>
	        <div className="stake-case-faq-qa">
	          <div>
	            <span>Are my CASE locked during that period?</span>
	            <span>Yes, during the Staking Period your CASE tokens are locked.</span>
	          </div>
	          <div>
	            <span>When do I get the CASE Rewards?</span>
	            <span>You get a daily dividend in CASE.</span>
	          </div>
	        </div>                
	      </div>
    );
}