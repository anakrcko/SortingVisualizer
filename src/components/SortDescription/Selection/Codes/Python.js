export default function PyhonCode(){
    return(
        <div>
            <pre>
                <code>{`
`}<span className='comment'>{`# Python program for implementation of Selection
# Sort`}</span>{`
`}<span className='red'>{`import`}</span>{` sys
A `}<span className='red'>{`=`}</span>{` [`}<span className='number'>{`64`}</span>{`, `}<span className='number'>{`25`}</span>{`, `}<span className='number'>{`12`}</span>{`, `}<span className='number'>{`22`}</span>{`, `}<span className='number'>{`11`}</span>{`]

`}<span className='comment'>{`# Traverse through all array elements`}</span>{`
`}<span className='red'>{`for`}</span>{` i `}<span className='red'>{`in`}</span>{` `}<span className='blue'>{`range`}</span>{`(`}<span className='blue'>{`len`}</span>{`(A)):
	
	`}<span className='comment'>{`# Find the minimum element in remaining
	# unsorted array`}</span>{`
	min_idx `}<span className='red'>{`=`}</span>{` i
	`}<span className='red'>{`for`}</span>{` j `}<span className='red'>{`in`}</span>{` `}<span className='blue'>{`range`}</span>{`(i`}<span className='red'>{`+`}</span>{``}<span className='number'>{`1`}</span>{`, `}<span className='blue'>{`len`}</span>{`(A)):
		`}<span className='red'>{`if`}</span>{` A[min_idx] > A[j]:
			min_idx`}<span className='red'>{` =`}</span>{` j
			
	`}<span className='comment'>{`# Swap the found minimum element with
	# the first element	`}</span>{`
	A[i], A[min_idx] `}<span className='red'>{`=`}</span>{` A[min_idx], A[i]

`}<span className='comment'>{`# Driver code to test above`}</span>{`
`}<span className='red'>{`print`}</span>{` ("Sorted array")
`}<span className='red'>{`for`}</span>{` i `}<span className='red'>{`in`}</span>{` `}<span className='blue'>{`range`}</span>{`(`}<span className='blue'>{`len`}</span>{`(A)):
	`}<span className='blue'>{`print`}</span>{`("%d" `}<span className='red'>{`%`}</span>{`A[i]),

`} <hr/> {` Output:

Sorted array: 
11 12 22 25 64`}
                </code>
            </pre>
        </div>
    )
}