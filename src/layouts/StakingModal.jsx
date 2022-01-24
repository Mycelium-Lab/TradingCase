import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap'
import { useSelector } from 'react-redux'

export default function StakingModal(props) {
    const methods = useSelector(state => state.wallet.methods);

    const { amount, days, referrer, setClose} = props;
    const [isApproved, setIsApproved] = useState(0);
    const [txHash, setTxHash] = useState('');
    const [loading, setLoading] = useState(false);

    function handleChange(page) {
        window.history.pushState(page, 'Title', `/staking/${page}`);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
      }

    // вызывает метод аппрува
    async function handleApprove() {

        await methods.instanceApprove(amount).then(function(result) {
            if (result !== undefined) {
                setLoading(false);
                setIsApproved(1);
            }
            else {
                setClose();
            }
        });
    }

    //вызывает метод стейкинга
    async function handleStake() {

        await methods.instanceStake(amount, days, referrer).then(function(result) {
            if (result !== undefined) {
                console.log(result);
                setTxHash(result);
                setLoading(false);
                setIsApproved(2);
            }
        });
    }

    function close() {
        if (isApproved===2) handleChange('staking');
        setClose();
    }

    function getTextStatus() {
        switch (isApproved) {
            case 0:
                return `Approve staking ${amount} CASE for ${days} days.`;
            case 1:
                return `Approve successful. Stake ${amount} CASE for ${days} days.`;
            case 2:
                return `Successfully staked ${amount} CASE for ${days} days!`;
            default:
                return '';
        }
    }

    return (
        <Modal isOpen={true} toggle={close} centered={true} size='md' style={{padding: '1rem'}}>
            <ModalHeader toggle={close}>    
                Confirm Staking
            </ModalHeader>
            <ModalBody style={{justifyContent: 'center', textAlign: 'center', display:'flex', alignItems: 'center', flexDirection: 'column'}}>
                { loading && <Spinner style={{ width: '4rem', height: '4rem'}} /> }
                <span className={loading ? 'mt-3' : ''}>
                    {
                        loading ? 'Submitting transaction...' : getTextStatus()
                    }
                </span>
                {
                    isApproved === 2 &&
                    <a className='mt-2' href={`https://bscscan.com/tx/${txHash}`} style={{color:"#eabc4e"}}>View Transcation</a>
                }

            </ModalBody>
            { isApproved !== 2 &&
            <ModalFooter style={{justifyContent: 'center'}}>
                <button id="stake-case-button" className="button" style={{width:85, fontSize:14}} disabled={isApproved || loading} onClick={(isApproved || loading) ? () => {} : () => {setLoading(true);handleApprove()}}>Approve</button>
                <button id="stake-case-button" className="button" style={{width:85, fontSize:14}} disabled={isApproved !== 1 || loading} onClick={(isApproved !== 1 || loading) ? () => {} : () => {setLoading(true); handleStake()}}>Stake</button>
            </ModalFooter>
            }
            { isApproved === 2 &&
            <ModalFooter style={{justifyContent: 'center'}}>
                <button id="stake-case-button" className="button" style={{width:85, fontSize:14}} onClick={()=>close()}>Close</button>
            </ModalFooter>
            }

        </Modal>
    )
}
