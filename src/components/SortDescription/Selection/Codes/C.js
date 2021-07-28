export default function C(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
`}<span className='comment'>{`// C program for implementation of selection sort`}</span>{`
#include <stdio.h>

`}<span className='red'>{`void`}</span>{` swap(`}<span className='blue'>{`int`}</span>{` *xp, `}<span className='blue'>{`int`}</span>{` *yp)
{
	`}<span className='blue'>{`int`}</span>{` temp = *xp;
	*xp = *yp;
	*yp = temp;
}

`}<span className='red'>{`void`}</span>{` selectionSort(`}<span className='blue'>{`int`}</span>{` arr[], `}<span className='blue'>{`int`}</span>{` n)
{
	`}<span className='blue'>{`int`}</span>{` i, j, min_idx;

	`}<span className='comment'>{`// One by one move boundary of unsorted subarray`}</span>{`
	`}<span className='red'>{`for`}</span>{` (i = 0; i < n-1; i++)
	{
		`}<span className='comment'>{`// Find the minimum element in unsorted array`}</span>{`
		min_idx = i;
		`}<span className='red'>{`for`}</span>{` (j = i+1; j < n; j++)
		`}<span className='red'>{`if`}</span>{` (arr[j] < arr[min_idx])
			min_idx = j;

		`}<span className='comment'>{`// Swap the found minimum element with the first element`}</span>{`
		swap(&arr[min_idx], &arr[i]);
	}
}

`}<span className='comment'>{`/* Function to print an array */`}</span>{`
`}<span className='red'>{`void`}</span>{` printArray(`}<span className='blue'>{`int`}</span>{` arr[], `}<span className='blue'>{`int`}</span>{` size)
{
	`}<span className='blue'>{`int`}</span>{` i;
	`}<span className='red'>{`for`}</span>{` (i=0; i < size; i++)
		`}<span className='blue'>{`printf`}</span>{`(`}<span className='print'>{`"%d "`}</span>{`, arr[i]);
	`}<span className='blue'>{`printf`}</span>{`(`}<span className='print'>{`"\\n"`}</span>{`);
}

`}<span className='comment'>{`// Driver program to test above functions`}</span>{`
`}<span className='blue'>{`int`}</span>{` main()
{
	`}<span className='blue'>{`int`}</span>{` arr[] = {64, 25, 12, 22, 11};
	`}<span className='blue'>{`int`}</span>{` n = `}<span className='red'>{`sizeof`}</span>{`(arr)/`}<span className='red'>{`sizeof`}</span>{`(arr[0]);
	selectionSort(arr, n);
	`}<span className='blue'>{`printf`}</span>{`(`}<span className='print'>{`"Sorted array: \\n"`}</span>{`);
	printArray(arr, n);
	`}<span className='red'>{`return`}</span>{` 0;
}

`} <hr/> {` Output:

Sorted array: 
11 12 22 25 64`}
                </code>
            </pre>
        </div>
    )
}