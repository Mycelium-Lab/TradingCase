import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

export default function StakingModal(props) {
    const methods = useSelector(state => state.wallet.methods);

    const {open, amount, days, referrer, setClose} = props;
    const [isApproved, setIsApproved] = useState(0);
    const [txHash, setTxHash] = useState('');
    const [loading, setLoading] = useState(false);

    const Button = styled.button`
        width: 7rem;
        &:disabled {
            opacity: 0.3;
        }
    `

    async function handleApprove() {
        console.log(loading);
        console.log(`%c approve ${amount} coins`, 'color: green');
        await methods.init();
        await methods.instanceApprove(amount).then(function(result) {
            if (result !== undefined) {
                console.log(result);
                setLoading(false);
                setIsApproved(1);
            }
            else {
                console.log('undef');
                setClose();
            }
        });
    }

    async function handleStake() {

        console.log(`%c staked ${amount} coins for ${days} days with ref ${referrer}`, 'color: green');
        //await methods.init();
        await methods.instanceStake(amount, days, referrer).then(function(result) {
            console.log(result);
            setTxHash(result);
            setLoading(false);
            setIsApproved(2);
        });
      }

    function close() {
        setTxHash('');
        setLoading(false);
        setIsApproved(0);
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
        <Modal isOpen={open} toggle={close} centered={true} size='md' style={{padding: '1rem'}}>
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
                    <a className='mt-2' href={`https://kovan.etherscan.io/tx/${txHash}`} style={{color:"#eabc4e"}}>View Transcation</a>
                }
            </ModalBody>
            <ModalFooter style={{justifyContent: 'center'}}>
                <Button className="btn btn-outline-primary" disabled={isApproved || loading} onClick={(isApproved || loading) ? () => {} : () => {setLoading(true);handleApprove()}}>Approve</Button>
                <Button className="btn btn-outline-secondary" disabled={isApproved !== 1 || loading} onClick={(isApproved !== 1 || loading) ? () => {} : () => {setLoading(true); handleStake()}}>Stake</Button>
            </ModalFooter>
        </Modal>
    )
}
