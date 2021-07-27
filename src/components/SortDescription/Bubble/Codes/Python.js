export default function PyhonCode(){
    return(
        <div>
            <pre>
                <code>{`
`}<span className='red'>{`def`}</span>{` bubbleSort(arr):
	n `}<span className='red'>{`=`}</span>{` `}<span className='blue'>{`len`}</span>{`(arr)

	`}<span className='comment'>{`# Traverse through all array elements`}</span>{`
	`}<span className='red'>{`for`}</span>{` i `}<span className='red'>{`in`}</span>{` `}<span className='blue'>{`range`}</span>{`(n):

		`}<span className='comment'>{`# Last i elements are already in place`}</span>{`
		`}<span className='red'>{`for`}</span>{` j `}<span className='red'>{`in`}</span>{` `}<span className='blue'>{`range`}</span>{`(`}<span className='number'>{`0`}</span>{`, n`}<span className='red'>{`-`}</span>{`i`}<span className='red'>{`-`}</span>{``}<span className='number'>{`1`}</span>{`):

		`}<span className='comment'>{`# traverse the array from 0 to n-i-1
			# Swap if the element found is greater
			# than the next element`}</span>{`
			`}<span className='red'>{`if`}</span>{` arr[j] {">"} arr[j`}<span className='red'>{`+`}</span>{``}<span className='number'>{`1`}</span>{`] :
				arr[j], arr[j`}<span className='red'>{`+`}</span>{``}<span className='number'>{`1`}</span>{`] `}<span className='red'>{`=`}</span>{` arr[j`}<span className='red'>{`+`}</span>{``}<span className='number'>{`1`}</span>{`], arr[j]

				`}<span className='comment'>{`# Driver code to test above`}</span>{`
arr `}<span className='red'>{`=`}</span>{` [`}<span className='number'>{`64`}</span>{`, `}<span className='number'>{`34`}</span>{`, `}<span className='number'>{`25`}</span>{`, `}<span className='number'>{`12`}</span>{`, `}<span className='number'>{`22`}</span>{`, `}<span className='number'>{`11`}</span>{`, `}<span className='number'>{`90`}</span>{`]

bubbleSort(arr)

`}<span className='blue'>{`print`}</span>{` (`}<span className='print'>{`"Sorted array is:\\n"`}</span>{`)
`}<span className='red'>{`for`}</span>{` i `}<span className='red'>{`in`}</span>{` `}<span className='blue'>{`range`}</span>{`(`}<span className='blue'>{`len`}</span>{`(arr)):
	`}<span className='blue'>{`print`}</span>{` (`}<span className='print'>{`"%d "`}</span>{` `}<span className='red'>{`%`}</span>{`arr[i]),

`} <hr/> {` Output:

Sorted array is:
11 12 22 25 34 64 90`}
                </code>
            </pre>
        </div>
    )
}