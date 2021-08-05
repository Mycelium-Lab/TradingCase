import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../redux/modal/actions'
import { setAddress, setChainId } from '../redux/wallets/actions'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import styled from 'styled-components'
import walletConnectImg from '../assets/images/walletConnect.png'
import metaMaskImg from '../assets/images/metaMask2.png'
import binanceWalletImg from '../assets/images/binanceWallet.png'

import Web3 from 'web3'
import WalletConnectProvider from '@walletconnect/web3-provider'

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
        
                    window.ethereum.on("accountsChanged", (accounts) => {
                        console.log('accounts changed', accounts[0])
                        dispatch(setAddress(accounts[0]));
                    });
        
                    window.ethereum.on("chainChanged", (chainId) => {
                        console.log('chainId changed', chainId)
                        dispatch(setChainId(chainId));
                    });

                    dispatch(closeModal())
                  } catch (err) {
                      console.log(err)
                  }
                  break;
            case 'walletConnect':
                try {
                    const provider = new WalletConnectProvider({
                        rpc: {
                            42: 'https://kovan.infura.io/v3/6f16d7e1465c4c3e890aac99bdfd5deb',
                            56: 'https://bsc-dataseed.binance.org/',
                            97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
                        }
                    })
                    await provider.enable()
                    window.web3 = new Web3(provider)
                    const accounts = await window.web3.eth.getAccounts()
                    if (accounts) {
                        dispatch(setAddress(accounts[0]))
                    }
                    const chainId = await window.web3.eth.getChainId()
                    if (chainId) {
                        dispatch(setChainId(chainId))
                    }

                    // Subscribe to accounts change
                    provider.on("accountsChanged", (accounts) => {
                        console.log('accounts changed', accounts[0])
                        dispatch(setAddress(accounts[0]))
                    })
                    
                    // Subscribe to chainId change
                    provider.on("chainChanged", (chainId) => {
                        console.log(chainId)
                        dispatch(setChainId(chainId))
                    })
                    
                    // Subscribe to session disconnection
                    provider.on("disconnect", (code, reason) => {
                        console.log(code, reason)
                        dispatch(setAddress(''))
                    })

                    dispatch(closeModal())
                } catch (err) {
                    console.log(err)
                }
                break;
            default:
                break;
        }
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle} centered={true}>
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
