import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../redux/modal/actions'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { logout, selectWallet } from '../wallets/actions'
import styled from 'styled-components'
import walletConnectImg from '../assets/images/walletConnect.png'
import metaMaskImg from '../assets/images/metaMask2.png'
import binanceWalletImg from '../assets/images/binanceWallet.png'

const WalletLogo = styled.img` 
        border-radius: 3px;
        max-width: 60px;
        max-height: 60px;
        width: 60px;
        height: 60px;
        padding: 12px;
    `

const WalletContainer = styled.div`
        margin-top: 1.2rem;
        & > div {
            font-size: 1.08rem;
            border-radius: 0.3rem;
            &:hover {
                cursor: pointer;
                background: lightgrey;
            }
            & > span {
                margin-left: 0.5rem;
            }
            & > span.isSelected {
                text-decoration: underline;
                color: #9A9A9A;
            }
        }
    `

export default function WalletConnectionModal() {
    const isOpen = useSelector(state => state.modal.isOpen)
    const provider = useSelector(state => state.wallet.provider)
    const dispatch = useDispatch()

    const toggle = () => dispatch(closeModal())

    const changeWallet = async (newWallet, dispatch) => {
        if (provider) {
            await logout(provider, dispatch)
        } 
        await selectWallet(newWallet, dispatch)
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle} centered={true}>
            <ModalHeader toggle={toggle}>Select a Wallet for BSC staking</ModalHeader>
            <ModalBody>
                <span>Please select a wallet to connect to this dapp:</span>
                <WalletContainer>
                    <div onClick={() => changeWallet('walletConnect', dispatch)}>
                        <WalletLogo src={walletConnectImg}></WalletLogo>
                        <span>Wallet Connect</span>
                        {provider?.isWalletConnect && <span className="isSelected">selected</span>}
                    </div>
                    <div onClick={() => changeWallet('metaMask', dispatch)}>
                        <WalletLogo src={metaMaskImg}></WalletLogo>
                        <span>MetaMask</span>
                        {provider?.isMetaMask && <span className="isSelected">selected</span>}
                    </div>
                    <div onClick={() => changeWallet('binanceWallet', dispatch)}>
                        <WalletLogo src={binanceWalletImg}></WalletLogo>
                        <span>Binance Chain Wallet</span>
                        {/* implement isSelected */}
                    </div>
                </WalletContainer>
            </ModalBody>
            <ModalFooter>
                <a href="#">What is a wallet?</a>
            </ModalFooter>
        </Modal>
    )
}
