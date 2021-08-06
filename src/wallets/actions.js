import { setChainId, setProvider, setAddress } from '../redux/wallets/actions'
import { closeModal } from '../redux/modal/actions'
import Web3 from 'web3'
import WalletConnectProvider from '@walletconnect/web3-provider'

export const selectWallet = async (wallet, dispatch) => {
    switch (wallet) {
        case 'binanceWallet':
            break
        case 'metaMask':
            try {
                await window.ethereum
                  .request({ method: "net_version" })
                  .then((netId) => {
                    dispatch(setChainId(netId))
                  })

                await window.ethereum
                  .request({ method: "eth_requestAccounts" })
                  .then((response) => {
                    dispatch(setAddress(response[0]))
                  })
    
                window.web3 = new Web3(window.ethereum)
                dispatch(setProvider(window.ethereum))
                localStorage.setItem('caseCurrentProvider', 'metaMask')
    
                window.ethereum.on("accountsChanged", (accounts) => {
                    dispatch(setAddress(accounts[0]))
                })
    
                window.ethereum.on("chainChanged", (chainId) => {
                    dispatch(setChainId(chainId))
                })

                dispatch(closeModal())
              } catch (err) {
                  dispatch(setProvider(null))
              }
              break
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
                dispatch(setProvider(provider))
                localStorage.setItem('caseCurrentProvider', 'walletConnect')

                const accounts = await window.web3.eth.getAccounts()
                if (accounts) {
                    dispatch(setAddress(accounts[0]))
                }
                const chainId = await window.web3.eth.getChainId()
                if (chainId) {
                    dispatch(setChainId(chainId))
                }

                provider.on("accountsChanged", (accounts) => {
                    dispatch(setAddress(accounts[0]))
                })
                
                provider.on("chainChanged", (chainId) => {
                    dispatch(setChainId(chainId))
                })
                
                provider.on("disconnect", (code, reason) => {

                })
                dispatch(closeModal())
            } catch (err) {
                dispatch(setProvider(null))
            }
            break
        default:
            break
    }
}

export const logout = async (provider, dispatch) => {
    dispatch(setAddress(''))
    dispatch(setChainId(''))
    if (provider) {
      if (provider.close) {
        await provider.close()
      }
      dispatch(setProvider(null))
    }
    localStorage.removeItem('caseCurrentProvider')
}