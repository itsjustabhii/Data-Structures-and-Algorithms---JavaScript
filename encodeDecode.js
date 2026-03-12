/**
 * Encode and Decode Strings
 * Design an algorithm to encode a list of strings to a string. 
 * The encoded string is then sent over the network and is decoded back to the original list of strings.
 */

function encodeDecode(){
    function encode(strs) {
        let encoded = ""

        for(let str of strs){
            encoded += str.length + "#" + str
        }
        return encoded
    }

    function decode(str) {
        let result = []
        let i = 0

        while(i < str.length){
            let j = i

            while(str[j] !== "#"){
                j++
            }

            let length = parseInt(str.substring(i,j))

            let word = str.substring(j+1, j+1+length)

            result.push(word)

            i = j + 1 + length
        }
        return result
    }
}

let encoded = encode(["Neet","Code"])
console.log(encoded)

console.log(decode(encoded))