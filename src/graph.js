import { gql } from "@apollo/client";

const User = gql`
  query CaseUser($id: ID!) {
    caseStakingPool(id: "CaseStakingPool") {
       id
       mintedCaseTokens
       stakeAmount
    }
    caseUser(id: $id) {
      address
      rank
      careerValue
      avgAPY
      totalStakeReward
      referLevelUserCounts
      referLevelCaseCommissions
      totalCaseCommissionReceived
      commissionHistory {
        user {
            id
        }
        recipient {
            id
        }
        timestamp
        txAmount
        level
      }
      stakeList(
          where: { active: true }
          orderBy: stakeTimestamp
          orderDirection: desc
      ) {
          idx
          stakeAmount
          interestAmount
          withdrawnInterestAmount
          stakeTimestamp
          stakeTimeInDays
          apy
          active
      }
      referredUsers(first:10){
        address
        rank
      }
      stakeActivityHistory(orderBy: timestamp, orderDirection: desc) {
          id
          type
          timestamp
          txAmount
      }
    }
  }
`;

export {User};