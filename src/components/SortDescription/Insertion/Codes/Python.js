export default function PyhonCode(){
    return(
        <div>
            <pre>
                <code>{`
`}<span className='comment'>{`# Python program for implementation of Insertion Sort

# Function to do insertion sort`}</span>{`
`}<span className='red'>{`def`}</span>{` insertionSort(arr):

	`}<span className='comment'>{`# Traverse through 1 to len(arr)`}</span>{`
	`}<span className='red'>{`for`}</span>{` i `}<span className='red'>{`in`}</span>{` `}<span className='blue'>{`range`}</span>{`(`}<span className='number'>{`1`}</span>{`, `}<span className='blue'>{`len`}</span>{`(arr)):

		key `}<span className='red'>{`=`}</span>{` arr[i]

		`}<span className='comment'>{`# Move elements of arr[0..i-1], that are
		# greater than key, to one position ahead
		# of their current position`}</span>{`
		j `}<span className='red'>{`=`}</span>{` i`}<span className='red'>{`-`}</span>{``}<span className='number'>{`1`}</span>{`
		`}<span className='red'>{`while`}</span>{` j >`}<span className='red'>{`=`}</span>{` `}<span className='number'>{`0 `}</span>{``}<span className='red'>{`and`}</span>{` key < arr[j] :
				arr[j `}<span className='red'>{`+`}</span>{` `}<span className='number'>{`1`}</span>{`] `}<span className='red'>{`=`}</span>{` arr[j]
				j `}<span className='red'>{`-=`}</span>{` `}<span className='number'>{`1`}</span>{`
		arr[j `}<span className='red'>{`+`}</span>{` `}<span className='number'>{`1`}</span>{`] `}<span className='red'>{`=`}</span>{` key


`}<span className='comment'>{`# Driver code to test above`}</span>{`
arr `}<span className='red'>{`=`}</span>{` [`}<span className='number'>{`12`}</span>{`, `}<span className='number'>{`11`}</span>{`, `}<span className='number'>{`13`}</span>{`, `}<span className='number'>{`5`}</span>{`, `}<span className='number'>{`6`}</span>{`]
insertionSort(arr)
`}<span className='red'>{`for`}</span>{` i `}<span className='red'>{`in`}</span>{` `}<span className='blue'>{`range`}</span>{`(`}<span className='blue'>{`len`}</span>{`(arr)):
	`}<span className='red'>{`print`}</span>{` (`}<span className='print'>{`"%d "`}</span>{` `}<span className='red'>{`%`}</span>{` arr[i])

`}<span className='comment'>{`# This code is contributed by Mohit Kumra`}</span>{`

`} <hr/> {` Output:

5 6 11 12 13`}
                </code>
            </pre>
        </div>
    )
}