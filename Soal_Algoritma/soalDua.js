// soal 2 - longest character
const sentence = "Saya sangat senang mengerjakan soal algoritma"
const arrString = sentence.split(" ");
longestSentence(arrString)

function longestSentence(input){
    let longest = 0;
    let word = ""
    for (let index = 0; index < input.length; index++) {
        if (input[index].length > longest) {
            longest = input[index].length
            word = input[index]
        }
    }
    console.log(word+ ": " + longest + " character")
}