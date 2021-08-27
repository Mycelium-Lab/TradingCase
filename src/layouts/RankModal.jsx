import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

export default function RankModal(props) {
    const methods = useSelector(state => state.wallet.methods);

    const { setClose, currentRank, nextRank} = props;
    const [isApproved, setIsApproved] = useState(0);
    const [loading, setLoading] = useState(false);

    // вызывает метод поднятия ранга по клику на кнопку
    async function handleRankUp() {
        await methods.instanceRankUp().then(function(result) {
            if (result !== undefined) {
                setLoading(false);
                setIsApproved(1);
            }
            else {
                setClose();
            }
        });
    }

    // текста
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
        <Modal isOpen={true} toggle={setClose} centered={true} size='md' style={{padding: '1rem'}}>
            <ModalHeader toggle={setClose}>   
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
                <button id="stake-case-button" className="button"  onClick={()=>setClose()}>Close</button>
            </ModalFooter>
            }

        </Modal>
    )
}
