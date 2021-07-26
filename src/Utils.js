
const tokenCase = '0x441666C6F05162b85359e030fF641Cb049D2C07e';
const stakeCase = '0xcd5C9E1368C1Ce9B405118Ee8C51f7FB0D3fe26b';

const abiProxy = [
    // balanceOf
    {
        "constant": true,
        "inputs": [{
            "name": "_owner",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "name": "balance",
            "type": "uint256"
        }],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint8"
          }
        ],
        "payable": false,
        "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
];

const abiStake = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakeAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stakeTimeInDays",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        }
      ],
      "name": "stake",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "stakeIdx",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
];

export class contractMethods {
    constructor(web) {
        this.web3 = web;
        this.CASE_PRECISION = 10 ** 8;
        this.CASE_10 = 1e1 * this.CASE_PRECISION;
        this.CASE_100 = 1e2 * this.CASE_PRECISION;
        this.CASE_1000 = 1e3 * this.CASE_PRECISION;
        this.CASE_10000 = 1e4 * this.CASE_PRECISION;
        this.ZERO_ADDR = "0x0000000000000000000000000000000000000000";
        this.SECONDS_IN_DAY = 86400;
    }
    async init() {
        this.account = await this.web3.eth.getAccounts();
        this.walletAddress = this.account[0];
        // Get ERC20 Token contract instance
        this.contractCase = new this.web3.eth.Contract(abiProxy, tokenCase);
        this.contractStake = new this.web3.eth.Contract(abiStake, stakeCase);
      }

    async instanceStake(amount, days){
        
        await this.contractCase.methods.approve(stakeCase,this.CASE_100).send({from: this.walletAddress});
        await this.contractStake.methods.stake(this.CASE_100, 50, this.ZERO_ADDR).send({from: this.walletAddress});
    }
    
    async getBalance() {
        this.balanceCase = await this.contractCase.methods.balanceOf(this.walletAddress).call();
        let decimalsCase = await this.contractCase.methods.decimals().call();
        console.log(decimalsCase);
        this.balanceCase = this.balanceCase / 10**decimalsCase;
        //return [balance];
        return this.balanceCase;
    }
            
}