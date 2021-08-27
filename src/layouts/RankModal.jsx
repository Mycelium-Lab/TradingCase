import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

export default function RankModal(props) {
    const methods = useSelector(state => state.wallet.methods);

    const {open, setClose, currentRank, nextRank} = props;
    const [isApproved, setIsApproved] = useState(0);
    const [txHash, setTxHash] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleRankUp() {
        console.log(loading);
        await methods.instanceRankUp().then(function(result) {
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


    function close() {
        setTxHash('');
        setLoading(false);
        setIsApproved(0);
        setClose();
    }

    function getTextStatus() {
        switch (isApproved) {
            case 0:
                return `Rank up from ${currentRank} to ${nextRank}`
            case 1:
                return `Successfully ranked up from ${currentRank} to ${nextRank}`;
            default:
                return '';
        }
    }

    return (
        <Modal isOpen={open} toggle={close} centered={true} size='md' style={{padding: '1rem'}}>
            <ModalHeader toggle={close}>   
                Confirm Ranking Up
            </ModalHeader>
            <ModalBody style={{justifyContent: 'center', textAlign: 'center', display:'flex', alignItems: 'center', flexDirection: 'column'}}>
                { loading && <Spinner style={{ width: '4rem', height: '4rem'}} /> }
                <span className={loading ? 'mt-3' : ''}>
                    {
                        loading ? 'Submitting rank up...' : getTextStatus()
                    }
                </span>
            </ModalBody>
            { isApproved !== 1 &&
            <ModalFooter style={{justifyContent: 'center'}}>
                <button id="stake-case-button" style={{width:85, fontSize:14}} className="button" disabled={loading} onClick={(loading) ? () => {} : () => {setLoading(true); handleRankUp()}}>Rank up</button>
            </ModalFooter>
            }
            { isApproved === 1 &&
            <ModalFooter style={{justifyContent: 'center'}}>
                <button id="stake-case-button" className="button"  onClick={()=>close()}>Close</button>
            </ModalFooter>
            }

        </Modal>
    )
}
