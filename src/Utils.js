import {abiProxy, abiStake, abiRank} from './constants';

export { findGetParameter,commissionToStaked };


//адреса контрактов токенов
const tokenCase = '0x33356568c72C1231897aE7B49a448BD0FE74B503';
const stakeCase = '0x23F9D8f999D103265bE54596fF8C359dC5e3e970';
const rankCase = '0x4fd9A8367f4Cb26A2FEe304610B241b2560125B3';


export class contractMethods {

    //конструктор класса
    constructor(web, walletAddress) {
        this.web3 = web;
        this.CASE_PRECISION = 10 ** 8;
        this.ZERO_ADDR = "0x0000000000000000000000000000000000000000";
        this.contractCase = new this.web3.eth.Contract(abiProxy, tokenCase);
        this.contractStake = new this.web3.eth.Contract(abiStake, stakeCase);
        this.contractRank = new this.web3.eth.Contract(abiRank, rankCase);
        this.walletAddress = walletAddress;
    }

    //метод стейкинга
    instanceStake(amount, days, ref) {
        if (ref===null) {
            return new Promise((resolve, reject) => {
                return this.contractStake.methods.stake((amount*this.CASE_PRECISION).toString(), days.toString(), this.ZERO_ADDR).send({from: this.walletAddress})
                .on('receipt', function(receipt) {
                    resolve(receipt.transactionHash);
                    reject('rejected');
                })
                .on('error', function(error){console.log('error',error)});
            });
        }
        else {
            return new Promise((resolve, reject) => {
                return this.contractStake.methods.stake((amount*this.CASE_PRECISION).toString(), days.toString(), ref.toLowerCase()).send({from: this.walletAddress})
                .on('receipt', function(receipt) {
                    resolve(receipt.transactionHash);
                });
            });
        }
    }

    //метод аппрува стейкинга
    instanceApprove(amount) {
        return new Promise((resolve, reject) => {
            return this.contractCase.methods.approve(stakeCase,(amount*this.CASE_PRECISION).toString()).send({from: this.walletAddress},function(error, receipt){
                if (receipt === undefined) {
                    resolve(receipt);
                }
            }).on('receipt', function(receipt) {
                    resolve(receipt);
            });
        });
    }

    // метод для вывода вознаграждений
    async instanceWithdraw(idx) {
        return new Promise((resolve, reject) => {
            return this.contractStake.methods.withdraw(idx).send({from: this.walletAddress})
                .on('receipt', function(receipt) {
                    resolve(receipt);
            });
        });
    }

    //метод для поднятия ранга
    async instanceRankUp() {
      await this.contractRank.methods.rankUp(this.walletAddress).send({from: this.walletAddress});
    }

    //метод для получения информации о том, может ли юзер поднять ранг
    async canRankUp() {
        console.log(this.walletAddress);
        return new Promise((resolve, reject) => {
            return this.contractRank.methods.canRankUp(this.walletAddress.toLowerCase()).call({from: this.walletAddress.toLowerCase()}, function(error, result) {
                resolve(result);
            });
        });
    }
    
    //метод для получения баланса
    async getBalance() {
        return new Promise((resolve, reject) => {
            return this.contractCase.methods.balanceOf(this.walletAddress).call({from: this.walletAddress.toLowerCase()}, function(error, result) {
                this.balanceCase = parseInt(result) / 10**8;
                resolve(this.balanceCase);
            });
        })
    }         
}


//функция для поиска get-параметра
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


//высчитывает комиссию, полученную с реферала определенного уровня
function commissionToStaked(commission, level) {
  const percents = [8, 5, 2.5, 1.5, 1.0, 1.0, 0.5, 0.5 ];
  return parseFloat(commission * (100/percents[level-1])).toFixed(2);
}