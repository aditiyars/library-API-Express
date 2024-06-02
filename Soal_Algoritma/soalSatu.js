// soal 1 reverse string abaikan numeric

const input = "42APASIHH23"
reverse(input)

function reverse(input){
    const splice = input.split('')
    let onlyString = []
    const numericIndex = []
    const stringIndex = []

    for (let i = 0; i < splice.length; i++) {
        if (isNaN(splice[i])) {
            onlyString.push(splice[i])
            stringIndex.push(i)
        }else{
            numericIndex.push(i)
        }
    }
    
    const result = []
    // character build
    for (let i = 0; i < numericIndex.length; i++) {
        const n = numericIndex[i]
        result[n] = splice[n]
    }
    
    // numeric build
    onlyString = onlyString.reverse()
    for (let i = 0; i < stringIndex.length; i++) {
        result[stringIndex[i]] = onlyString[i]
    }
    console.log(result.join(''))
}