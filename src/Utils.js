export { findGetParameter,commissionToStaked };

const tokenCase = '0x80c8Da4f646b151DBD27625D79a0fD1d79e01eFF';
const stakeCase = '0xF1955aE5Ba0dAdCA26dE0196dd458f203C17ED89';

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

    async instanceStake(amount, days, ref){
        await this.contractCase.methods.approve(stakeCase,amount*this.CASE_PRECISION).send({from: this.walletAddress});
        if (ref===null) await this.contractStake.methods.stake(amount*this.CASE_PRECISION, days, this.ZERO_ADDR).send({from: this.walletAddress});
        else await this.contractStake.methods.stake(amount*this.CASE_PRECISION, days, ref.toLowerCase()).send({from: this.walletAddress});
    }
    
    async getBalance() {
        this.balanceCase = await this.contractCase.methods.balanceOf(this.walletAddress).call();
        let decimalsCase = await this.contractCase.methods.decimals().call();
        //console.log(decimalsCase);
        this.balanceCase = this.balanceCase / 10**decimalsCase;
        //return [balance];
        return this.balanceCase;
    }
            
}

function findGetParameter(parameterName) {
  var result = null,
  tmp = [];
  window.location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
  return result;
}

function commissionToStaked(commission, level) {
  const percents = [8, 5, 2.5, 1.5, 1.0, 1.0, 0.5, 0.5 ];
  return parseFloat(commission * (100/percents[level-1])).toFixed(2);
}