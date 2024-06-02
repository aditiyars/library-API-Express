// soal 3 [jumlah kata pada arraySatu yang terdapat pada arrayDua ]

const input = ['xc', 'dz', 'bbb', 'dz']
const query = ['bbb', 'ac', 'dz']
numberOfSame(input, query)

function numberOfSame(input, query){
    const result = []
    for (let i = 0; i < query.length; i++) {
        let count = 0
        for (let j = 0; j < input.length; j++) {
            if (query[i] == input[j]) {
                count++
            }        
        }
        result.push(count)
    }
    
    printString(result, query)
}

function printString(arrJumlah, arrKata){
    let stringResult = "["+arrJumlah + "] karena "
    for (let i = 0; i < arrJumlah.length; i++) {
        if (arrJumlah[i] > 0) {
            stringResult += "kata '" + arrKata[i] + "' terdapat " + arrJumlah[i] + " pada INPUT"
        }else{
            stringResult += "kata '" + arrKata[i] + "' tidak ada pada INPUT"
        }

        if (i < arrJumlah.length-1 && arrJumlah.length-1 > 0) {
            stringResult += ", "
        }else if (i < arrJumlah.length-2 && arrJumlah.length-2 > 0){
            stringResult += ", dan "
        }
    }

    console.log(stringResult)
}