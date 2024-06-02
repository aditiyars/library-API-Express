// soal 4 [pengurangan dari jumlah diagonal sebuah matrix]

const matrix = [
    [1,2,0],
    [4,5,6], 
    [7,8,9]
]

minDiagonal(matrix)

function minDiagonal(matrix){
    let diagonal1 = 0
    let diagonal2 = 0

    for (let i = 0; i < matrix.length; i++) {
        diagonal1 += matrix[i][i]
        diagonal2 += matrix[i][matrix.length - i - 1]
    }
    console.log("diagonal pertama = " + diagonal1)
    console.log("diagonal kedua = " + diagonal2)
    console.log("maka hasilnya adalah "+Math.abs(diagonal1-diagonal2))
}



