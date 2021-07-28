export default function PyhonCode(){
    return(
        <div>
            <pre>
                <code>{`
`}<span className='comment'>{`# Python3 implementation of QuickSort

# This Function handles sorting part of quick sort
# start and end points to first and last element of
# an array respectively`}</span>{`
`}<span className='red'>{`def`}</span>{` partition(start, end, array):
	
	`}<span className='comment'>{`# Initializing pivot's index to start`}</span>{`
	pivot_index `}<span className='red'>{`=`}</span>{` start
	pivot `}<span className='red'>{`=`}</span>{` array[pivot_index]
	
	`}<span className='comment'>{`# This loop runs till start pointer crosses
	# end pointer, and when it does we swap the
	# pivot with element on end pointer`}</span>{`
	`}<span className='red'>{`while`}</span>{` start < end:
		
		`}<span className='comment'>{`# Increment the start pointer till it finds an
		# element greater than pivot`}</span>{`
		`}<span className='red'>{`while`}</span>{` start < `}<span className='blue'>{`len`}</span>{`(array) `}<span className='red'>{`and`}</span>{` array[start] <`}<span className='red'>{`=`}</span>{` pivot:
			start `}<span className='red'>{`+=`}</span>{` `}<span className='number'>{`1`}</span>{`
			
		`}<span className='comment'>{`# Decrement the end pointer till it finds an
		# element less than pivot`}</span>{`
		`}<span className='red'>{`while`}</span>{` array[end] > pivot:
			end `}<span className='red'>{`-=`}</span>{``}<span className='number'>{` 1`}</span>{`
		
		`}<span className='comment'>{`# If start and end have not crossed each other,
		# swap the numbers on start and end`}</span>{`
		`}<span className='red'>{`if`}</span>{`(start < end):
			array[start], array[end] `}<span className='red'>{`=`}</span>{` array[end], array[start]
	
	`}<span className='comment'>{`# Swap pivot element with element on end pointer.
	# This puts pivot on its correct sorted place.`}</span>{`
	array[end], array[pivot_index] `}<span className='red'>{`=`}</span>{` array[pivot_index], array[end]
	
	`}<span className='comment'>{`# Returning end pointer to divide the array into 2`}</span>{`
	`}<span className='red'>{`return`}</span>{` end
	
`}<span className='comment'>{`# The main function that implements QuickSort`}</span>{`
`}<span className='red'>{`def`}</span>{` quick_sort(start, end, array):
	
	`}<span className='red'>{`if`}</span>{` (start < end):
		
		`}<span className='comment'>{`# p is partitioning index, array[p]
		# is at right place`}</span>{`
		p `}<span className='red'>{`=`}</span>{` partition(start, end, array)
		
		`}<span className='comment'>{`# Sort elements before partition
		# and after partition`}</span>{`
		quick_sort(start, p `}<span className='red'>{`-`}</span>{` `}<span className='number'>{`1`}</span>{`, array)
		quick_sort(p `}<span className='red'>{`+`}</span>{` `}<span className='number'>{`1`}</span>{`, end, array)
		
`}<span className='comment'>{`# Driver code`}</span>{`
array`}<span className='red'>{` = `}</span>{`[ `}<span className='number'>{`10`}</span>{`, `}<span className='number'>{`7`}</span>{`, `}<span className='number'>{`8`}</span>{`, `}<span className='number'>{`9`}</span>{`, `}<span className='number'>{`1`}</span>{`, `}<span className='number'>{`5`}</span>{` ]
quick_sort(`}<span className='number'>{`0`}</span>{`, `}<span className='blue'>{`len`}</span>{`(array) `}<span className='red'>{`-`}</span>{` `}<span className='number'>{`1`}</span>{`, array)

`}<span className='blue'>{`print`}</span>{`(f`}<span className='print'>{`'Sorted array: {array}'`}</span>{`)
	
`}<span className='comment'>{`# This code is contributed by Adnan Aliakbar`}</span>{`

`} <hr/> {` Output:

Sorted array: 
1 5 7 8 9 10 
`}
                </code>
            </pre>
        </div>
    )
}