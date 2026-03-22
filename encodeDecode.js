/**
 * Encode and Decode Strings
 * Design an algorithm to encode a list of strings to a string. 
 * The encoded string is then sent over the network and is decoded back to the original list of strings.
 */

function encodeDecode(){
    function encode(strs) {
        let encoded = ""

        for(let str of strs){
            encoded += str.length + "#" + str  //add the number of 1st part of string and delimiter '#' to the beginning of the array
        }
        return encoded
    }

    function decode(str) {
        let result = []
        let i = 0

        while(i < str.length){  //iterate i till the end of the string
            let j = i

            while(str[j] !== "#"){  //iterate j until you reach #
                j++
            }

            let length = parseInt(str.substring(i,j)) //Get the length of the encoded string

            let word = str.substring(j+1, j+1+length) // include the string from beginning till end[4#Neet]

            result.push(word)

            i = j + 1 + length // go to the next word in the array 
        }
        return result
    }
}

