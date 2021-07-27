import { swap } from './helpers/swap'

function bubbleSort(generatedArray) {

    const array = generatedArray.slice() // copying blocks array
    const arrayInOrder = []
    let i, j
    
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length - i - 1; j++) {
            arrayInOrder.push([j, j + 1, null, null])
                              // Compare
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
                arrayInOrder.push([j, j + 1, array.slice(), null]) // Swap
            }
        }
        arrayInOrder.push([null, null, null, j]) // j-th element is in correct position ( Sorted )
    }

    return arrayInOrder
}

export default bubbleSort

