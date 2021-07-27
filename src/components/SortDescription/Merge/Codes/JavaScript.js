export default function JavaScript(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
<script>

`}<span className='comment'>{`// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]`}</span>{`
`}<span className='red'>{`function`}</span>{` merge(arr, l, m, r)
{
	`}<span className='red'>{`var`}</span>{` n1 = m - l + 1;
	`}<span className='red'>{`var`}</span>{` n2 = r - m;

	`}<span className='comment'>{`// Create temp arrays`}</span>{`
	`}<span className='red'>{`var`}</span>{` L = `}<span className='red'>{`new`}</span>{` Array(n1);
	`}<span className='red'>{`var`}</span>{` R = `}<span className='red'>{`new`}</span>{` Array(n2);

	`}<span className='comment'>{`// Copy data to temp arrays L[] and R[]`}</span>{`
	`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`var`}</span>{` i = 0; i < n1; i++)
		L[i] = arr[l + i];
	`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`var`}</span>{` j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	`}<span className='comment'>{`// Merge the temp arrays back into arr[l..r]

	// Initial index of first subarray`}</span>{`
	`}<span className='red'>{`var`}</span>{` i = 0;

	`}<span className='comment'>{`// Initial index of second subarray`}</span>{`
	`}<span className='red'>{`var`}</span>{` j = 0;

	`}<span className='comment'>{`// Initial index of merged subarray`}</span>{`
	`}<span className='red'>{`var`}</span>{` k = l;

	`}<span className='red'>{`while`}</span>{` (i < n1 && j < n2) {
		`}<span className='red'>{`if`}</span>{` (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		}
		`}<span className='red'>{`else`}</span>{` {
			arr[k] = R[j];
			j++;
		}
		k++;
	}

	`}<span className='comment'>{`// Copy the remaining elements of
	// L[], if there are any`}</span>{`
	`}<span className='red'>{`while`}</span>{` (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}

	`}<span className='comment'>{`// Copy the remaining elements of
	// R[], if there are any`}</span>{`
	`}<span className='red'>{`while`}</span>{` (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

`}<span className='comment'>{`// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */`}</span>{`
`}<span className='red'>{`function`}</span>{` mergeSort(arr,l, r){
	`}<span className='red'>{`if`}</span>{`(l>=r){
		`}<span className='red'>{`return`}</span>{`;//returns recursively
	}
	`}<span className='red'>{`var`}</span>{` m =l+ parseInt((r-l)/2);
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
	merge(arr,l,m,r);
}

`}<span className='comment'>{`// UTILITY FUNCTIONS
// Function to print an array`}</span>{`
`}<span className='red'>{`function`}</span>{` printArray( A, size)
{
	`}<span className='red'>{`for`}</span>{` (`}<span className='red'>{`var`}</span>{` i = 0; i < size; i++)
	document.write( A[i] + `}<span className='print'>{`" "`}</span>{`);
}


`}<span className='red'>{`var`}</span>{` arr = [ 12, 11, 13, 5, 6, 7 ];
	`}<span className='red'>{`var`}</span>{` arr_size = arr.length;

	document.write( `}<span className='print'>{`"Given array is <br>"`}</span>{`);
	printArray(arr, arr_size);

	mergeSort(arr, 0, arr_size - 1);

	document.write( `}<span className='print'>{`"<br>Sorted array is <br>"`}</span>{`);
	printArray(arr, arr_size);

`}<span className='comment'>{`// This code is contributed by SoumikMondal`}</span>{`

</script>
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