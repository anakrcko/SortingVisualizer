
let arrayInOrder = []

const merge = (array, start, mid, end) => {
    let i = start, j = mid + 1
    const arr = [] 

    while((i <= mid) && (j <= end)){
        arrayInOrder.push([i, j, null, null])      // Compare i th and j th element  
        if(array[i] <= array[j]){
            arr.push(array[i++])
        } else {
            arr.push(array[j++])
        }
    }

    while(i <= mid){
        arrayInOrder.push([i, null, null, null])
        arr.push(array[i++])
    }

    while(j <= end){
        arrayInOrder.push([null, j, null, null])
        arr.push(array[j++])
    }
    
    for(i = start; i <= end; i++){
        array[i] = arr[i - start]
        arrayInOrder.push([i, null, array.slice(), null]) 
    }

}

const mergeSortHelper = (array, start, end) => {
    if(start >= end) 
        return 
    
    const mid = Math.floor((start + end) / 2)

    mergeSortHelper(array, start, mid)
    mergeSortHelper(array, mid + 1, end) 
    
    merge(array, start, mid, end)
}

function mergeSort(generatedArray){
    arrayInOrder = []
    const array = generatedArray.slice() // copying blocks array
    let i
    
    mergeSortHelper(array, 0, array.length - 1)
    
    for( i = 0; i < array.length; i++){
        arrayInOrder.push([null, null, null, i]) // i th element will be in correct position
    }

    return arrayInOrder
}

export default mergeSort