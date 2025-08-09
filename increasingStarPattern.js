//Write a code to print increasing star pattern

let n = 4

for(let i=0; i<n; i++){
    let row = ' '
    for(let j=0; j<i+1; j++){ //During ever i iteration, 1 star of j loop is printed. thats why j<i+1 || Also can write it as j<=i
        row = row + '*'
    }
    console.log(row)
}