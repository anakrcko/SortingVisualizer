import { swap } from './helpers/swap'

function selectionSort(generatedArray){

    const arrayCopy = generatedArray.slice()
    const arrayInOrder = []

    let i, j
    
    for (i = 0; i < arrayCopy.length; i++) {
        for (j = i + 1; j < arrayCopy.length; j++) {
            arrayInOrder.push([i, j, null, null])
                              
            if (arrayCopy[i] > arrayCopy[j]) { // Compare
                swap(arrayCopy, i, j)
                arrayInOrder.push([i, j, arrayCopy.slice(), null]) // Swap
            }
        }
        arrayInOrder.push([null, null, null, i]) // i-th element is in correct position ( Sorted )
    }

    return arrayInOrder
}

export default selectionSort