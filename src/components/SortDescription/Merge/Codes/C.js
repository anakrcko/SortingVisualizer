export default function C(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
`}<span className='comment'>{`/* C program for Merge Sort */`}</span>{`
#include <stdio.h>
#include <stdlib.h>

`}<span className='comment'>{`// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]`}</span>{`
`}<span className='red'>{`void`}</span>{` merge(`}<span className='blue'>{`int`}</span>{` arr[], `}<span className='blue'>{`int`}</span>{` l, `}<span className='blue'>{`int`}</span>{` m, `}<span className='blue'>{`int`}</span>{` r)
{
	`}<span className='blue'>{`int`}</span>{` i, j, k;
	`}<span className='blue'>{`int`}</span>{` n1 = m - l + 1;
	`}<span className='blue'>{`int`}</span>{` n2 = r - m;

	`}<span className='comment'>{`/* create temp arrays */`}</span>{`
	`}<span className='blue'>{`int`}</span>{` L[n1], R[n2];

	`}<span className='comment'>{`/* Copy data to temp arrays L[] and R[] */`}</span>{`
	`}<span className='red'>{`for`}</span>{` (i = 0; i < n1; i++)
		L[i] = arr[l + i];
	`}<span className='red'>{`for`}</span>{` (j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	`}<span className='comment'>{`/* Merge the temp arrays back into arr[l..r]*/`}</span>{`
	i = 0; `}<span className='comment'>{`// Initial index of first subarray`}</span>{`
	j = 0; `}<span className='comment'>{`// Initial index of second subarray`}</span>{`
	k = l; `}<span className='comment'>{`// Initial index of merged subarray`}</span>{`
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

	`}<span className='comment'>{`/* Copy the remaining elements of L[], if there
	are any */`}</span>{`
	`}<span className='red'>{`while `}</span>{`(i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}

	`}<span className='comment'>{`/* Copy the remaining elements of R[], if there
	are any */`}</span>{`
	`}<span className='red'>{`while`}</span>{` (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

`}<span className='comment'>{`/* l is for left index and r is right index of the
sub-array of arr to be sorted */`}</span>{`
`}<span className='red'>{`void`}</span>{` mergeSort(`}<span className='blue'>{`int`}</span>{` arr[], `}<span className='blue'>{`int`}</span>{` l, `}<span className='blue'>{`int`}</span>{` r)
{
	`}<span className='red'>{`if`}</span>{` (l < r) {
		`}<span className='comment'>{`// Same as (l+r)/2, but avoids overflow for
		// large l and h`}</span>{`
		`}<span className='blue'>{`int`}</span>{` m = l + (r - l) / 2;

		`}<span className='comment'>{`// Sort first and second halves`}</span>{`
		mergeSort(arr, l, m);
		mergeSort(arr, m + 1, r);

		merge(arr, l, m, r);
	}
}
`}<span className='comment'>{`
/* UTILITY FUNCTIONS */
/* Function to print an array */`}</span>{`
`}<span className='red'>{`void`}</span>{` printArray(`}<span className='blue'>{`int`}</span>{` A[], `}<span className='blue'>{`int`}</span>{` size)
{
	`}<span className='blue'>{`int`}</span>{` i;
	`}<span className='red'>{`for`}</span>{` (i = 0; i < size; i++)
		`}<span className='blue'>{`printf`}</span>{`(`}<span className='print'>{`"%d "`}</span>{`, A[i]);
	`}<span className='blue'>{`printf`}</span>{`(`}<span className='print'>{`"\\n"`}</span>{`);
}

`}<span className='comment'>{`/* Driver code */`}</span>{`
`}<span className='blue'>{`int`}</span>{` main()
{
	`}<span className='blue'>{`int`}</span>{` arr[] = { 12, 11, 13, 5, 6, 7 };
	`}<span className='blue'>{`int`}</span>{` arr_size = `}<span className='red'>{`sizeof`}</span>{`(arr) / `}<span className='red'>{`sizeof`}</span>{`(arr[0]);

	`}<span className='blue'>{`printf`}</span>{`(`}<span className='print'>{`"Given array is \\n"`}</span>{`);
	printArray(arr, arr_size);

	mergeSort(arr, 0, arr_size - 1);

	`}<span className='blue'>{`printf`}</span>{`(`}<span className='print'>{`"\\nSorted array is \\n"`}</span>{`);
	printArray(arr, arr_size);
	`}<span className='red'>{`return`}</span>{` 0;
}
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