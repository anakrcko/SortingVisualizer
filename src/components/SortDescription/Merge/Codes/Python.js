export default function PyhonCode(){
    return(
        <div>
            <pre>
                <code>{`
`}<span className='comment'>{`# Python program for implementation of MergeSort`}</span>{`
`}<span className='red'>{`def`}</span>{` mergeSort(arr):
	`}<span className='red'>{`if`}</span>{`  `}<span className='blue'>{`len`}</span>{`(arr) > `}<span className='number'>{`1`}</span>{`:

		`}<span className='comment'>{`# Finding the mid of the array`}</span>{`
		mid `}<span className='red'>{`=`}</span>{`  `}<span className='blue'>{`len`}</span>{`(arr)`}<span className='red'>{`//`}</span>{``}<span className='number'>{`2`}</span>{`

		`}<span className='comment'>{`# Dividing the array elements`}</span>{`
		L `}<span className='red'>{`= `}</span>{`arr[:mid]

		`}<span className='comment'>{`# into 2 halves`}</span>{`
		R `}<span className='red'>{`= `}</span>{`arr[mid:]

		`}<span className='comment'>{`# Sorting the first half`}</span>{`
		mergeSort(L)

		`}<span className='comment'>{`# Sorting the second half`}</span>{`
		mergeSort(R)

		i `}<span className='red'>{`=`}</span>{` j `}<span className='red'>{`=`}</span>{` k `}<span className='red'>{`=`}</span>{` `}<span className='number'>{`0`}</span>{`

		`}<span className='comment'>{`# Copy data to temp arrays L[] and R[]`}</span>{`
		`}<span className='red'>{`while`}</span>{` i <  `}<span className='blue'>{`len`}</span>{`(L) `}<span className='red'>{`and`}</span>{` j <  `}<span className='blue'>{`len`}</span>{`(R):
			`}<span className='red'>{`if`}</span>{` L[i] < R[j]:
				arr[k] `}<span className='red'>{`=`}</span>{` L[i]
				i `}<span className='red'>{`+=`}</span>{` `}<span className='number'>{`1`}</span>{`
			`}<span className='red'>{`else`}</span>{`:
				arr[k] `}<span className='red'>{`=`}</span>{` R[j]
				j `}<span className='red'>{`+=`}</span>{` `}<span className='number'>{`1`}</span>{`
			k `}<span className='red'>{`+=`}</span>{` `}<span className='number'>{`1`}</span>{`

		`}<span className='comment'>{`# Checking if any element was left`}</span>{`
		`}<span className='red'>{`while`}</span>{` i <  `}<span className='blue'>{`len`}</span>{`(L):
			arr[k] `}<span className='red'>{`=`}</span>{` L[i]
			i `}<span className='red'>{`+=`}</span>{` `}<span className='number'>{`1`}</span>{`
			k `}<span className='red'>{`+=`}</span>{` `}<span className='number'>{`1`}</span>{`

		`}<span className='red'>{`while`}</span>{` j <  `}<span className='blue'>{`len`}</span>{`(R):
			arr[k] `}<span className='red'>{`= `}</span>{`R[j]
			j `}<span className='red'>{`+=`}</span>{` `}<span className='number'>{`1`}</span>{`
			k `}<span className='red'>{`+=`}</span>{` `}<span className='number'>{`1`}</span>{`

`}<span className='comment'>{`# Code to print the list`}</span>{`


`}<span className='red'>{`def`}</span>{` printList(arr):
	`}<span className='red'>{`for`}</span>{` i `}<span className='red'>{`in`}</span>{`  `}<span className='blue'>{`range`}</span>{`( `}<span className='blue'>{`len`}</span>{`(arr)):
		`}<span className='red'>{`print`}</span>{`(arr[i], end`}<span className='red'>{`=`}</span>{``}<span className='print'>{`" "`}</span>{`)
		`}<span className='blue'>{`print`}</span>{`()


`}<span className='comment'>{`# Driver Code`}</span>{`
`}<span className='red'>{`if`}</span>{` __name__ `}<span className='red'>{`==`}</span>{` `}<span className='print'>{`'__main__'`}</span>{`:
	arr `}<span className='red'>{`=`}</span>{` [`}<span className='number'>{`12`}</span>{`, `}<span className='number'>{`11`}</span>{`, `}<span className='number'>{`13`}</span>{`, `}<span className='number'>{`5`}</span>{`, `}<span className='number'>{`6`}</span>{`, `}<span className='number'>{`7`}</span>{`]
	`}<span className='blue'>{`print`}</span>{`(`}<span className='print'>{`"Given array is:"`}</span>{`, end`}<span className='red'>{`=`}</span>{``}<span className='print'>{`"\\n"`}</span>{`)
	printList(arr)
	mergeSort(arr)
	`}<span className='red'>{`print`}</span>{`(`}<span className='print'>{`"Sorted array is: "`}</span>{`, end`}<span className='red'>{`=`}</span>{``}<span className='print'>{`"\\n"`}</span>{`)
	printList(arr)

`}<span className='comment'>{`# This code is contributed by Mayank Khanna`}</span>{`

`} <hr/> {` Output:

Given array is:
12 11 13 5 6 7 
Sorted array is: 
5 6 7 11 12 13
`}
                </code>
            </pre>
        </div>
    )
}