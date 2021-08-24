import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Spinner } from 'reactstrap'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

export default function StakingModal(props) {
    const methods = useSelector(state => state.wallet.methods);

    const {open, amount, days, referrer, setClose} = props;
    const [isApproved, setIsApproved] = useState(0);
    const [txHash, setTxHash] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleApprove() {
        console.log(loading);
        console.log(`%c approve ${amount} coins`, 'color: green');

        setIsApproved(1);
        await methods.init();
        await methods.instanceApprove(amount).then(function(result) {
            if (result !== undefined) {
                console.log(result);
                setLoading(false);
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

    return (
        <Modal isOpen={open} toggle={close} centered={true} style={{width:250}}>
            <ModalHeader toggle={close}>    
            </ModalHeader>
            <ModalBody centered={true} style={{justifyContent: 'center', display:'flex'}}>
                <Spinner style={loading ? { width: '4rem', height: '4rem'} : { width: '4rem', height: '4rem', display:'none' }} />
            </ModalBody>
            <ModalBody centered={true} style={{justifyContent: 'center', display:'flex', flexDirection: 'column'}}>
                <span>{(isApproved!==2) ? `Staking ${amount} CASE for ${days} days`: `Staked ${amount} CASE for ${days} days`}</span>
                {
                    isApproved===2 &&
                    <a href={`https://kovan.etherscan.io/tx/${txHash}`} style={{color:"#eabc4e"}}>Транзакция</a>
                }
            </ModalBody>
            <ModalFooter centered={true} style={{justifyContent: 'center'}}>
                <Button outline color="primary" style={{width:85}} disabled={isApproved} onClick={() => {setLoading(true);handleApprove()}}>Approve</Button>
                <Button outline disabled={isApproved!==1} style={{width:85}} onClick={() => {setLoading(true); handleStake()}}>Stake</Button>
            </ModalFooter>
        </Modal>
    )
}
