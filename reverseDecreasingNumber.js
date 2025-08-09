//Write a code for decreasing number
// 12345
// 1234
// 123
// 12
// 1 

let n = 5

for(let i =0; i<n; i++){
    let row = ' '
    for(let j = 0; j<n-i; j++){ //j will run n-i times as for every i iteration, j will decrease by 1
        row = row + (j+1)
    }
    console.log(row)
}