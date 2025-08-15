// 121. Best time to buy and sell stocks
//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

let prices = [1,5,6,7,3,3,6,9,67]

function maxProfit(prices){
    let min = prices[0]
    let maxProfit = 0

    for(let i=1; i<prices.length; i++){
        if(prices[i] < min){ //checks if the current element is less than the min, then updates the value
            min = prices[i]
        }
        if(prices[i]-min > maxProfit){ //checks for the max profit obtained by subtracting from min to the next day values
            maxProfit = prices[i]-min //then updates the maxprofit
        }
    }
    return maxProfit
}

console.log(maxProfit(prices))