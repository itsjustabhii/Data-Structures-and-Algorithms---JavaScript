//Write a code to print
//      *
//     *
//    *
//   *
//  *
// * 
//j-> n-(i+1) gives total number of blank spaces
//k-> i+1 -> prints a star in every iteration. 
//This uses 3 loops
 
let n = 5

for (let i = 0; i<n; i++){
    let row = " "
    for(let j =0; j<n-(i+1); j++){ // j loop prints blank spaces only
        row = row + " "
    } for(let k=0; k<i+1; k++){ //k loop prints the stars
            row = row + "*"
        }
    console.log(row)
}