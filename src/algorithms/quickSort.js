import {swap} from './helpers/swap'
import {choosePivot} from './helpers/quickSortHelper'

let arrayInOrder = []

const partition = (array, start, end) => {
    const pivot = start 
    let j = start

    for(let i = start + 1; i <= end ; i++){
        arrayInOrder.push([i, pivot, null, null])
        if(array[i] < array[pivot]){
            j += 1 
            swap(array, i, j)
            arrayInOrder.push([i, j, array.slice(), null])
        }
    }

    swap(array, pivot, j)
    arrayInOrder.push([pivot, j, array.slice(), null])
    arrayInOrder.push([null, null, null, j])
    return j
}


const quickSortHelper = (array, start, end) => {
    if(start >= end) {
        if(start === end) arrayInOrder.push([null, null, null, start])
        return
    } 

    const pivot = choosePivot(array, start, end);

    swap(array, start, pivot)
    arrayInOrder.push([start, pivot, array.slice(), null])

    const m = partition(array, start, end)

    quickSortHelper(array, start, m - 1)
    quickSortHelper(array, m + 1, end)

    return
}

function quickSort(generatedArray){
    const array = generatedArray.slice() // Copying blocks array
    arrayInOrder = []
    
    quickSortHelper(array, 0, array.length - 1)
    
    return arrayInOrder
}

export default quickSort

