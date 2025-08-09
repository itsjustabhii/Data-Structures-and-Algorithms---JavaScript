// function starPattern(n){
//     for(let i=0; i<n; i++){
//         let row = ' '
//         for(let j=0; j<n; j++){
//             row = row + "*"
//             }
//     }
//     console.log(row)
// }

// console.log(starPattern(4))

let n = 4

for(let i=0; i<n; i++){ //i stands for row
    let row = ' '
    for(let j=0; j<n; j++){ //j stands for column
    row = row + '*'
    }
    console.log(row)
} 
    
