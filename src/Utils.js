import {abiProxy, abiStake, abiRank} from './constants';

export { findGetParameter,commissionToStaked };

const tokenCase = '0x33356568c72C1231897aE7B49a448BD0FE74B503';
const stakeCase = '0x23F9D8f999D103265bE54596fF8C359dC5e3e970';
const rankCase = '0x4fd9A8367f4Cb26A2FEe304610B241b2560125B3';


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
        this.contractRank = new this.web3.eth.Contract(abiRank, rankCase);
      }

    async instanceStake(amount, days, ref){
        await this.contractCase.methods.approve(stakeCase,amount*this.CASE_PRECISION).send({from: this.walletAddress});
        if (ref===null) await this.contractStake.methods.stake(amount*this.CASE_PRECISION, days, this.ZERO_ADDR).send({from: this.walletAddress});
        else await this.contractStake.methods.stake(amount*this.CASE_PRECISION, days, ref.toLowerCase()).send({from: this.walletAddress});
    }

    async instanceWithdraw(idx) {
      await this.contractStake.methods.withdraw(idx).send({from: this.walletAddress});
    }

    async instanceRankUp() {
      await this.contractRank.methods.rankUp(this.walletAddress).send({from: this.walletAddress});
    }

    async canRankUp() {
        let canRank = await this.contractRank.methods.canRankUp(this.walletAddress).call();
        return canRank;

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