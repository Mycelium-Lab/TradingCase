import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../redux/modal/actions'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { logout, selectWallet } from '../wallets/actions'
import styled from '@emotion/styled'
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

const TipsContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        & > span.span__wallet-question {
            color: #007bff;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
        & > span.span__wallet-explanation {
            margin-top: 1.1rem;
            font-size: 0.88rem;
        }
`

export default function WalletConnectionModal() {
    const [tipsOpen, setTipsOpen] = useState(false)
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
            <ModalHeader toggle={toggle}>Select a Wallet for BSC Staking</ModalHeader>
            <ModalBody>
                <span>Please select a wallet to connect to this dapp:</span>
                <WalletContainer>
                    <div onClick={() => changeWallet('metaMask', dispatch)}>
                        <WalletLogo src={metaMaskImg}></WalletLogo>
                        <span>MetaMask</span>
                        {provider?.isMetaMask && <span className="isSelected">selected</span>}
                    </div>
                    <div onClick={() => changeWallet('walletConnect', dispatch)}>
                        <WalletLogo src={walletConnectImg}></WalletLogo>
                        <span>WalletConnect</span>
                        {provider?.isWalletConnect && <span className="isSelected">selected</span>}
                    </div>
                </WalletContainer>
                <div className="mt-3 alert alert-warning" role="alert">
                    Please also make sure that your selected network is  <span onClick={() => window.open('https://www.binance.org/en/smartChain')} className="alert-link">Binance Smart Chain Mainnet</span> (ChainID: 56 / 0x38).
                </div>
            </ModalBody>
            <ModalFooter>
                <TipsContainer>
                    <span className="span__wallet-question" onClick={() => setTipsOpen(!tipsOpen)}>What is a wallet?</span>
                    { 
                        tipsOpen && 
                        <span className="span__wallet-explanation">
                            Wallets are used to send, receive, and store digital assets like Ether. Wallets come in many forms. They are either built into your browser, an extension added to your browser, a piece of hardware plugged into your computer or even an app on your phone. For more information about wallets, see <span style={{color: '#', fontWeight: 'bold'}} onClick={()=>window.open('https://docs.ethhub.io/using-ethereum/wallets/intro-to-ethereum-wallets/')}>this</span> explanation.
                        </span>
                    }
                </TipsContainer>
            </ModalFooter>
        </Modal>
    )
}