export default function C(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
`}<span className='comment'>{`// C program for implementation of Bubble sort`}</span>{`
#include <stdio.h>

`}<span className='red'>{`void`}</span>{` swap(`}<span className='blue'>{`int`}</span>{` *xp, `}<span className='blue'>{`int`}</span>{` *yp)
{
    `}<span className='blue'>{`int`}</span>{` temp = *xp;
    *xp = *yp;
    *yp = temp;
}

`}<span className='comment'>{`// A function to implement bubble sort`}</span>{`
`}<span className='red'>{`void`}</span>{` bubbleSort(`}<span className='blue'>{`int`}</span>{` arr[], `}<span className='blue'>{`int`}</span>{` n)
{
    `}<span className='blue'>{`int`}</span>{` i, j;
        `}<span className='red'>{`for`}</span>{` (i = 0; i < n-1; i++)	
`}<span className='comment'>{`// Last i elements are already in place`}</span>{`
	        `}<span className='red'>{`for`}</span>{` (j = 0; j < n-i-1; j++)
		        `}<span className='red'>{`if`}</span>{` (arr[j] > arr[j+1])
			        swap(&arr[j], &arr[j+1]);
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
	`}<span className='blue'>{`int`}</span>{` arr[] = {64, 34, 25, 12, 22, 11, 90};
	`}<span className='blue'>{`int`}</span>{` n = `}<span className='red'>{`sizeof`}</span>{`(arr)/`}<span className='red'>{`sizeof`}</span>{`(arr[0]);
	bubbleSort(arr, n);
	`}<span className='blue'>{`printf`}</span>{`(`}<span className='print'>{`"Sorted array: \\n"`}</span>{`);
	printArray(arr, n);
	`}<span className='red'>{`return`}</span>{` 0;
}
`} <hr/> {` Output:

Sorted array:
11 12 22 25 34 64 90`}
                </code>
            </pre>
        </div>
    )
}