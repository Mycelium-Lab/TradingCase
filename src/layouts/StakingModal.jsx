import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

export default function StakingModal(props) {
    const methods = useSelector(state => state.wallet.methods);

    const {open, amount, days, referrer, setClose} = props;
    const [isApproved, setIsApproved] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleApprove() {
        console.log(`%c approve ${amount} coins`, 'color: green');
        await methods.init();
        setLoading(true);
        await methods.instanceApprove(amount).then(function(error, result) {
            console.log(error, result);
            setLoading(false);
            setIsApproved(true);
        });
    }

    async function handleStake() {
        console.log(`%c staked ${amount} coins for ${days} days with ref ${referrer}`, 'color: green');
        //await methods.init();
        await methods.instanceStake(amount, days, referrer).then(function(error, result) {
            console.log(error, result);
            
        });
      }

    return (
        <Modal isOpen={open} toggle={setClose} centered={true} style={{width:250}}>
            <ModalHeader toggle={setClose}>    
            </ModalHeader>
            <ModalBody centered={true} style={{justifyContent: 'center', display: 'flex'}}>
                <span>{`Staking ${amount} CASE for ${days} days`}</span>
            </ModalBody>
            <ModalFooter centered={true} style={{justifyContent: 'center'}}>
                <Button outline color="primary" style={{width:85}} disabled={isApproved} onClick={() => handleApprove()}>Approve</Button>
                <Button outline disabled={isApproved} style={{width:85}} onClick={() => handleStake()}>Stake</Button>
            </ModalFooter>
        </Modal>
    )
}
