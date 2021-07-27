export default function C(){
    return(
        <div>
            <pre>
                <code>
                    {
                    `
`}<span className='comment'>{`// C program for insertion sort`}</span>{`
#include <math.h>
#include <stdio.h>

`}<span className='comment'>{`/* Function to sort an array using insertion sort*/`}</span>{`
`}<span className='red'>{`void`}</span>{` insertionSort(`}<span className='blue'>{`int`}</span>{` arr[], `}<span className='blue'>{`int`}</span>{` n)
{
	`}<span className='blue'>{`int`}</span>{` i, key, j;
	`}<span className='red'>{`for`}</span>{` (i = 1; i < n; i++) {
		key = arr[i];
		j = i - 1;

		`}<span className='comment'>{`/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */`}</span>{`
		`}<span className='red'>{`while`}</span>{` (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

`}<span className='comment'>{`// A utility function to print an array of size n`}</span>{`
`}<span className='red'>{`void`}</span>{` printArray(`}<span className='blue'>{`int`}</span>{` arr[], `}<span className='blue'>{`int`}</span>{` n)
{
	`}<span className='blue'>{`int`}</span>{` i;
	`}<span className='red'>{`for`}</span>{` (i = 0; i < n; i++)
		printf(`}<span className='print'>{`"%d "`}</span>{`, arr[i]);
	printf(`}<span className='print'>{`"\\n"`}</span>{`);
}

`}<span className='comment'>{`/* Driver program to test insertion sort */`}</span>{`
`}<span className='blue'>{`int`}</span>{` main()
{
	`}<span className='blue'>{`int`}</span>{` arr[] = { 12, 11, 13, 5, 6 };
	`}<span className='blue'>{`int`}</span>{` n = `}<span className='red'>{`sizeof`}</span>{`(arr) / `}<span className='red'>{`sizeof`}</span>{`(arr[0]);

	insertionSort(arr, n);
	printArray(arr, n);

	`}<span className='red'>{`return`}</span>{` 0;
}

`} <hr/> {` Output:

5 6 11 12 13`}
                </code>
            </pre>
        </div>
    )
}