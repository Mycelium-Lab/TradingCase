import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import { ReactComponent as NetworkLogo } from '../assets/vectors/NetworkLogo.svg'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

export default function WrongNetworkModal() {
    const [isOpen, setIsOpen] = useState(false)

    const correctChainId = useSelector(state => state.wallet.correntChainId)
    const currentChainId = useSelector(state => state.wallet.chainId)
    const isMainModalOpen = useSelector(state => state.modal.isOpen)

    useEffect(() => {
        if (currentChainId && correctChainId) {
            if (correctChainId !== currentChainId) {
                setIsOpen(true)
            }
        }
    }, [currentChainId, correctChainId])

    const close = () => {
        setIsOpen(false)
    }

    const NetworkLogoContainer = styled.div`
        height: 36px;
        width: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid black;
        border-radius: 18px;
        flex-shrink: 0;
    `

    return (
        <Modal isOpen={!isMainModalOpen && isOpen} toggle={close} centered={true}>
            <ModalHeader toggle={close}>
                <div className="d-flex flex-row align-items-center">
                    <NetworkLogoContainer>
                        <NetworkLogo/>
                    </NetworkLogoContainer>
                    <span className="ml-3">You Must Change Your Current Network</span>
                </div>
            </ModalHeader>
            <ModalBody>
                <span>We've detected that you need to switch your wallet's network to <b>Binance Smart Chain Mainnet</b>.</span>
            </ModalBody>
            <ModalFooter>
                <Button onClick={close}>Ok</Button>
            </ModalFooter>
        </Modal>
    )
}
