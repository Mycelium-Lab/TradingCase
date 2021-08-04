import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../redux/modal/actions'
import { setAddress, setChainId } from '../redux/wallets/actions'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import styled from 'styled-components'
import walletConnectImg from '../assets/images/walletConnect.png'
import metaMaskImg from '../assets/images/metaMask.png'
import binanceWalletImg from '../assets/images/binanceWallet.png'

import Web3 from 'web3'

const WalletLogo = styled.img` 
        border-radius: 3px;
        max-width: 60px;
        max-height: 60px;
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
        }
    `

export default function WalletConnectionModal() {
    const isOpen = useSelector(state => state.modal.isOpen)
    const dispatch = useDispatch()

    const toggle = () => dispatch(closeModal())

    const selectWallet = async (wallet) => {
        switch (wallet) {
            case 'binanceWallet':
                break;
            case 'metaMask':
                try {
                    await window.ethereum
                      .request({ method: "net_version" })
                      .then((netId) => {
                        console.log(netId)
                        dispatch(setChainId(netId))
                      });

                    await window.ethereum
                      .request({ method: "eth_requestAccounts" })
                      .then((response) => {
                        console.log(response[0])
                        dispatch(setAddress(response[0]))
                      });
        
                    window.web3 = new Web3(window.ethereum);
        
                    window.ethereum.on("accountsChanged", (address) => {
                        console.log('accounts changed', address[0])
                        dispatch(setAddress(address[0]));
                    });
        
                    window.ethereum.on("chainChanged", (chainId) => {
                        console.log('chainId changed', chainId)
                        dispatch(setChainId(chainId));
                    });

                    dispatch(closeModal())
                  } catch (err) {
                      console.log(err)
                  }
            case 'walletConnect':
                break;
            default:
                break;
        }
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Select a Wallet for BSC staking</ModalHeader>
            <ModalBody>
                <span>Please select a wallet to connect to this dapp:</span>
                <WalletContainer>
                    <div onClick={() => selectWallet('walletConnect')}>
                        <WalletLogo src={walletConnectImg}></WalletLogo>
                        <span>Wallet Connect</span>
                    </div>
                    <div onClick={() => selectWallet('metaMask')}>
                        <WalletLogo src={metaMaskImg}></WalletLogo>
                        <span>MetaMask</span>
                    </div>
                    <div onClick={() => selectWallet('binanceWallet')}>
                        <WalletLogo src={binanceWalletImg}></WalletLogo>
                        <span>Binance Chain Wallet</span>
                    </div>
                </WalletContainer>
            </ModalBody>
            <ModalFooter>
                <a href="#">What is a wallet?</a>
            </ModalFooter>
        </Modal>
    )
}
