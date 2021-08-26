import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap'
import { useSelector } from 'react-redux'

export default function RankModal(props) {
    const methods = useSelector(state => state.wallet.methods);

    const { refetch } = props;
    const {open, setClose, idx, amount} = props;
    const [isApproved, setIsApproved] = useState(0);
    const [loading, setLoading] = useState(false);

    async function handleWithdraw() {
        console.log(loading);

        await methods.init();
        await methods.instanceWithdraw(idx).then(function(result) {
                console.log(result);
                setLoading(false);
                setIsApproved(1);
                refetch();
        });
    }


    function close() {
        setLoading(false);
        setIsApproved(0);
        setClose();
    }

    function getTextStatus() {
        switch (isApproved) {
            case 0:
                return `Withdraw ${amount} CASE`
            case 1:
                return `Successfully withdrew ${amount}`;
            default:
                return '';
        }
    }

    return (
        <Modal isOpen={open} toggle={close} centered={true} size='md' style={{padding: '1rem'}}>
            <ModalHeader toggle={close}>    
                Confirm Withdrawing
            </ModalHeader>
            <ModalBody style={{justifyContent: 'center', textAlign: 'center', display:'flex', alignItems: 'center', flexDirection: 'column'}}>
                { loading && <Spinner style={{ width: '4rem', height: '4rem'}} /> }
                <span className={loading ? 'mt-3' : ''}>
                    {
                        loading ? 'Submitting transaction...' : getTextStatus()
                    }
                </span>
            </ModalBody>
            { isApproved !== 1 &&
            <ModalFooter style={{justifyContent: 'center'}}>
                <button id="stake-case-button" style={{width:85, fontSize:14}} className="button" disabled={loading} onClick={(loading) ? () => {} : () => {setLoading(true); handleWithdraw()}}>Withdraw</button>
            </ModalFooter>
            }
            { isApproved === 1 &&
            <ModalFooter style={{justifyContent: 'center'}}>
                <button id="stake-case-button" style={{width:85, fontSize:14}} className="button"  onClick={()=>close()}>Close</button>
            </ModalFooter>
            }

        </Modal>
    )
}
