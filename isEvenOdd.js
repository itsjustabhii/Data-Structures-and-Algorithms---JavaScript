function isEvenOdd(num){
    if(num < 0){
        console.log('Enter a valid number!')
    } else if(num % 2 == 0){
        console.log('Number is Even!')
    } else {
        console.log('Number is Odd!')
    }
}

isEvenOdd(4)