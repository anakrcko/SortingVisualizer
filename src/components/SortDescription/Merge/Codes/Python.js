export default function PyhonCode(){
    return(
        <div>
            <pre>
                <code>{`
`}<span className='comment'>{`# Python program for implementation of MergeSort`}</span>{`
`}<span className='red'>{`def`}</span>{` mergeSort(arr):
	`}<span className='red'>{`if`}</span>{` len(arr) > 1:

		`}<span className='comment'>{`# Finding the mid of the array`}</span>{`
		mid `}<span className='red'>{`=`}</span>{` len(arr)`}<span className='red'>{`//`}</span>{`2

		`}<span className='comment'>{`# Dividing the array elements`}</span>{`
		L `}<span className='red'>{`= `}</span>{`arr[:mid]

		`}<span className='comment'>{`# into 2 halves`}</span>{`
		R `}<span className='red'>{`= `}</span>{`arr[mid:]

		`}<span className='comment'>{`# Sorting the first half`}</span>{`
		mergeSort(L)

		`}<span className='comment'>{`# Sorting the second half`}</span>{`
		mergeSort(R)

		i `}<span className='red'>{`=`}</span>{` j `}<span className='red'>{`=`}</span>{` k `}<span className='red'>{`=`}</span>{` 0

		`}<span className='comment'>{`# Copy data to temp arrays L[] and R[]`}</span>{`
		while i < len(L) and j < len(R):
			if L[i] < R[j]:
				arr[k] = L[i]
				i += 1
			else:
				arr[k] = R[j]
				j += 1
			k += 1

		`}<span className='comment'>{`# Checking if any element was left`}</span>{`
		while i < len(L):
			arr[k] = L[i]
			i += 1
			k += 1

		while j < len(R):
			arr[k] = R[j]
			j += 1
			k += 1

`}<span className='comment'>{`# Code to print the list`}</span>{`


def printList(arr):
	for i in range(len(arr)):
		print(arr[i], end=" ")
	print()


`}<span className='comment'>{`# Driver Code`}</span>{`
if __name__ == '__main__':
	arr = [12, 11, 13, 5, 6, 7]
	print("Given array is", end="\n")
	printList(arr)
	mergeSort(arr)
	print("Sorted array is: ", end="\n")
	printList(arr)

`}<span className='comment'>{`# This code is contributed by Mayank Khanna`}</span>{`

`} <hr/> {` Output:

Given array is 
12 11 13 5 6 7 
Sorted array is 
5 6 7 11 12 13
`}
                </code>
            </pre>
        </div>
    )
}