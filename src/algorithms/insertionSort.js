import { swap } from './helpers/swap'

function insertionSort(generatedArray) {
    const array = generatedArray.slice() // copying blocks array
    const arrayInOrder = []
    let i, j
    
    for (i = 0; i < array.length; i++) {
        j = i - 1
        while(j >= 0 && array[j] > array[j + 1]){
            swap(array, j, j + 1)

            arrayInOrder.push([j, j + 1, null, null])              // Compare
            arrayInOrder.push([j, j + 1, array.slice(), null]) // Swap
            
            j -= 1
        }
    }

    for(i = 0; i < array.length; i++ ){
        arrayInOrder.push([null, null, null, i])
    }

    return arrayInOrder
}

export default insertionSort