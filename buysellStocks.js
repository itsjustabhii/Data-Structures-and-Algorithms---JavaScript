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